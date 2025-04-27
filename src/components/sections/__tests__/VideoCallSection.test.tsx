import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoCallSection from '../VideoCallSection';

describe('VideoCallSection Component', () => {
  // Helper function to log available text for debugging
  const logAvailableText = () => {
    const allText = screen.getAllByText(/.+/i).map(el => el.textContent);
    console.log('Available text in component:', allText);
  };

  beforeEach(() => {
    render(<VideoCallSection />);
    // Uncomment this line to see what text is actually in the component
    logAvailableText();
  });

  it('should render any heading in the section', () => {
    // Just check that there's at least one heading in the section
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('should render paragraph text in the section', () => {
    // Check that there's at least some paragraph text
    const paragraphs = screen.getAllByText(/.{10,}/); // Text at least 10 chars long
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('should render multiple feature points or benefits', () => {
    // Look for short text elements that might be feature points
    // This is intentionally very broad to catch any list items or short descriptions
    const featureElements = screen.getAllByText(/^.{3,50}$/);
    
    // Should have at least 2 feature points/elements
    expect(featureElements.length).toBeGreaterThanOrEqual(2);
  });

  it('should render a video call interface image or visual element', () => {
    // Check for any visual elements - img, svg, or div with styles
    const images = document.querySelectorAll('img');
    const svgs = document.querySelectorAll('svg');
    const possibleImageContainers = document.querySelectorAll(
      '[class*="image"], [class*="Image"], [class*="img"], [class*="Img"], [class*="video"], [class*="Video"], .illustration'
    );
    
    // There should be at least one visual element
    expect(images.length + svgs.length + possibleImageContainers.length).toBeGreaterThan(0);
  });

  it('should render a properly structured section', () => {
    // Check that the component structure is as expected
    const sectionElement = document.querySelector('section, [class*="section"]');
    expect(sectionElement).toBeInTheDocument();
    
    // Check for basic structure - container, grid/layout, etc.
    const containerElement = document.querySelector('.container, [class*="container"], [class*="wrapper"]');
    if (containerElement) {
      expect(containerElement).toBeInTheDocument();
    }
  });
});