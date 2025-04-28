// Optional: configure or set up a testing framework before each test
// Useful for importing jest-dom matchers
require('@testing-library/jest-dom');

// Mock fetch globally for all tests
global.fetch = jest.fn();

// Mock sonner toast globally (optional, if needed in many tests)
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
    info: jest.fn(),
  },
}));