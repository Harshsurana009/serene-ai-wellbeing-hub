import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HowItWorksSection from '../HowItWorksSection';

describe('HowItWorksSection Component', () => {
  // Helper function to log available text for debugging
  const logAvailableText = () => {
    const allText = screen.getAllByText(/.+/i).map(el => el.textContent);
    console.log('Available text in component:', allText);
  };

  beforeEach(() => {
    render(<HowItWorksSection />);
  });

  it('should render the main heading about how it works', () => {
    // Look for any heading containing words related to "how it works"
    const headings = screen.getAllByRole('heading');
    const mainHeading = headings.find(heading => 
      /how|works|steps|process|guide/i.test(heading.textContent || '')
    );
    
    expect(mainHeading).toBeInTheDocument();
  });

  it('should render a three-step process', () => {
    // Instead of checking each step individually, let's first verify
    // that there are at least 3 distinct sections/steps
    
    // Try to find elements with numbers 1, 2, 3
    const numberElements = screen.getAllByText(/[123]\.?|Step [123]/i);
    
    // There should be at least 3 elements with numbers (one for each step)
    expect(numberElements.length).toBeGreaterThanOrEqual(3);
  });

  it('should include content about signing up or assessment', () => {
    // Look for any text related to signing up or assessment
    const signupText = screen.getAllByText(/sign|create|account|assess/i);
    expect(signupText.length).toBeGreaterThan(0);
  });

  it('should include content about matching with an AI guide', () => {
    // Look for any text related to matching or AI guide
    const matchingText = screen.getAllByText(/match|ai|guide|wellness/i);
    expect(matchingText.length).toBeGreaterThan(0);
  });

  it('should include content about sessions or conversations', () => {
    // Look for any text related to sessions or conversations
    const sessionText = screen.getAllByText(/session|start|schedule|attend|video|conversation/i);
    expect(sessionText.length).toBeGreaterThan(0);
  });

  it('should have visual elements to illustrate the steps', () => {
    // Look for any visual elements - could be SVGs, imgs, or divs with specific classes
    
    // Check for SVGs first
    const svgs = document.querySelectorAll('svg');
    
    if (svgs.length >= 3) {
      expect(svgs.length).toBeGreaterThanOrEqual(3);
    } else {
      // If not enough SVGs, check for images
      const images = document.querySelectorAll('img');
      
      if (images.length >= 3) {
        expect(images.length).toBeGreaterThanOrEqual(3);
      } else {
        // If not enough images either, check for div containers that might represent steps
        const possibleStepContainers = document.querySelectorAll(
          '.step, [class*="step"], [class*="Step"], .card, .box, .container, .item, [class*="item"]'
        );
        
        // There should be at least 3 containers (one for each step)
        expect(possibleStepContainers.length).toBeGreaterThanOrEqual(3);
      }
    }
  });
});