# Serene AI Wellbeing Hub

Welcome to the Serene AI Wellbeing Hub – an interactive wellness platform that connects users with AI wellness guides through secure video sessions to support mental health and wellbeing.

## Project Info

**URL**: [https://lovable.dev/projects/a7bb73a8-a716-4854-acd9-e2e0019f720d](https://lovable.dev/projects/a7bb73a8-a716-4854-acd9-e2e0019f720d)

---

## What does this repo do?

This repository contains a modern React application that enables users to:

- Book and join real-time AI-powered video therapy sessions
- Receive personalized wellness guidance based on emotional analysis
- Access secure, end-to-end encrypted conversations with AI wellness guides
- Explore features, testimonials, and membership options for mental wellbeing

The app integrates with the Tavus.io API to create, manage, and end video conversation sessions with AI therapists, simulating a real-world mental health support experience.

---

## Application Flow

1. **Landing Page / Hero Section**
   - Users are greeted with an introduction to the platform and its benefits.
   - Prominent call-to-action buttons invite users to try a free session or learn more.

2. **How It Works**
   - The process is explained in clear steps: sign up, get matched with an AI guide, and start a session.

3. **Video Call Section**
   - Users see how secure, private, and accessible the video sessions are.
   - Visuals and feature points highlight privacy and 24/7 availability.

4. **Testimonials**
   - Real user stories and satisfaction metrics build trust in the platform.

5. **Call to Action (CTA)**
   - Users are encouraged to start their wellness journey or explore membership benefits.

6. **Appointment Booking & Session**
   - Users can book an appointment, which triggers a secure API call to Tavus.io.
   - On the appointment page, users can start a session, which creates a new AI video conversation.
   - The join link is provided, and the session is managed securely.

7. **Session Management**
   - The app handles session creation, joining, and ending via Tavus API.
   - All interactions are private and encrypted.

---

## Technologies Used

- **Vite** – Fast frontend build tool
- **React** – UI framework
- **TypeScript** – Type-safe JavaScript
- **shadcn-ui** – Component library
- **Tailwind CSS** – Utility-first CSS framework
- **React Router** – Navigation
- **React Query** – Data fetching and state management
- **Jest & Testing Library** – Testing framework

---

## Getting Started

### Prerequisites

- Node.js 16+ & npm (or yarn)
- Git

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd serene-ai-wellbeing-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173)

---

## Running Tests

The project includes comprehensive tests for components and services.

```sh
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Generate coverage report
npm test -- --coverage
```

---

## Project Structure

```
/src
  /components       # UI components
    /layout         # Layout components (Navbar, Footer)
    /sections       # Page sections (Hero, VideoCall, etc.)
    /ui             # shadcn UI components
  /hooks            # Custom React hooks
  /lib              # Utility functions
  /pages            # Main application pages
  /services         # API services (Tavus integration)
```

---

## How can I edit this code?

There are several ways of editing your application.

### Use Lovable

Simply visit the [Lovable Project](https://lovable.dev/projects/a7bb73a8-a716-4854-acd9-e2e0019f720d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

### Use your preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

### Use GitHub Codespaces

- Navigate to the main page of your repository
- Click on the "Code" button (green button) near the top right
- Select the "Codespaces" tab
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

### Edit directly in GitHub

- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon) at the top right of the file view
- Make your changes and commit

---

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a7bb73a8-a716-4854-acd9-e2e0019f720d) and click on Share -> Publish.

---

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

## Contributing

1. Create a feature branch from main
2. Make your changes
3. Run tests to ensure everything is working
4. Submit a pull request

---

## License

This project is licensed under the terms of the license included in the repository.
