// filepath: src/services/__tests__/tavusApi.test.ts
import {
  createConversation,
  getConversation,
  endConversation,
} from "../tavusApi";
import { toast } from "sonner"; // Import the mocked toast

// Mock the global fetch function before each test
beforeEach(() => {
  (fetch as jest.Mock).mockClear();
  // Clear mock calls for toast as well
  (toast.success as jest.Mock).mockClear();
  (toast.error as jest.Mock).mockClear();
});

// Mock appointment data for testing
const mockAppointmentData = {
  id: "appt_123",
  appointment_type: "Wellness Check",
  member_details: { name: "John Doe", ai_diagnosis: "Stress" },
  provider_details: { name: "Dr. AI", role: "Therapist" },
};

const mockParams = {
  duration: 30,
  appointmentData: mockAppointmentData,
};

describe("Tavus API Service", () => {
  describe("createConversation", () => {
    it("should handle API error during creation", async () => {
      const mockErrorResponse = { message: "API Limit Reached" };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 429,
        statusText: "Too Many Requests",
        json: async () => mockErrorResponse,
      });

      // Expect the function to throw (or use fallback)
      // Since the code has a fallback, we test the fallback behavior
      console.warn = jest.fn(); // Suppress console.warn during this test
      const result = await createConversation(mockParams);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("status", "pending");
      expect(result).toHaveProperty("joinUrl");
      expect(result.joinUrl).toMatch(/https:\/\/meet\.tavus\.io\/session\//);
      expect(console.warn).toHaveBeenCalledWith("Using fallback mock response");
    });

    it("should use fallback mock response on fetch network error", async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network failed"));
      console.warn = jest.fn(); // Suppress console.warn

      const result = await createConversation(mockParams);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toHaveProperty("id");
      expect(result.id).toMatch(/^conv_/);
      expect(result).toHaveProperty("status", "pending");
      expect(result).toHaveProperty("joinUrl");
      expect(result.joinUrl).toMatch(/https:\/\/meet\.tavus\.io\/session\//);
      expect(console.warn).toHaveBeenCalledWith("Using fallback mock response");
    });
  });

  describe("getConversation", () => {
    const conversationId = "conv_xyz";

    it("should get conversation details successfully", async () => {
      const mockApiResponse = {
        id: conversationId,
        status: "active",
        join_url: `https://meet.tavus.io/session/${conversationId}`,
        created_at: "2025-04-27T11:00:00Z",
        expires_at: "2025-04-27T11:30:00Z",
      };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiResponse,
      });

      const result = await getConversation(conversationId);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://tavusapi.com/v2/conversations/${conversationId}`,
        expect.objectContaining({ method: "GET" })
      );
      expect(result).toEqual({
        id: conversationId,
        status: "active",
        joinUrl: `https://meet.tavus.io/session/${conversationId}`,
        createdAt: "2025-04-27T11:00:00Z",
        expiresAt: "2025-04-27T11:30:00Z",
      });
    });

    it("should use fallback mock response on get conversation error", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: "Not Found",
        json: async () => ({ message: "Conversation not found" }),
      });
      console.warn = jest.fn(); // Suppress console.warn

      const result = await getConversation(conversationId);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result.id).toBe(conversationId);
      expect(result.status).toMatch(/active|completed/);
      expect(result.joinUrl).toBe(
        `https://meet.tavus.io/session/${conversationId}`
      );
      expect(console.warn).toHaveBeenCalledWith("Using fallback mock response");
    });
  });

  describe("endConversation", () => {
    const conversationId = "conv_end";

    it("should end a conversation successfully", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }), // Assuming API returns success
      });

      const result = await endConversation(conversationId);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://tavusapi.com/v2/conversations/${conversationId}/end`,
        expect.objectContaining({ method: "POST" })
      );
      expect(result).toEqual({ success: true });
    });

    it("should use fallback mock response on end conversation error", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: "Bad Request",
        json: async () => ({ message: "Cannot end completed session" }),
      });
      console.warn = jest.fn(); // Suppress console.warn

      const result = await endConversation(conversationId);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ success: true }); // Fallback returns success: true
      expect(console.warn).toHaveBeenCalledWith("Using fallback mock response");
    });
  });
});
