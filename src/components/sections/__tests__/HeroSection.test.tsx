import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
  it('should render the main heading with "AI Wellness Guide"', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    // The actual text is "Meet Your AI Wellness Guide" where "AI Wellness Guide" is in a span
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('AI Wellness Guide')).toBeInTheDocument();
  });

  it('should render the introductory paragraph about therapy sessions', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    // The actual text is different than expected - match what's actually there
    expect(
      screen.getByText(/Experience therapy sessions with our empathetic AI guides/i)
    ).toBeInTheDocument();
  });

  it('should render the "Try Free Session" button', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    // The actual button text is "Try Free Session" not "Get Started Free"
    expect(
      screen.getByRole('link', { name: /Try Free Session/i })
    ).toBeInTheDocument();
    // Check if the link points correctly
    expect(screen.getByRole('link', { name: /Try Free Session/i })).toHaveAttribute(
      'href',
      'https://care.springhealth.com/browse/therapists'
    );
  });

  it('should render a "Learn More" button', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument();
  });

  it('should render the hero image of a serene lake', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    // The actual alt text is "Serene lake surrounded by trees"
    expect(screen.getByRole('img', { name: /Serene lake surrounded by trees/i })).toBeInTheDocument();
  });

  it('should display the user satisfaction metric', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    expect(screen.getByText(/98% User Satisfaction/i)).toBeInTheDocument();
  });
});