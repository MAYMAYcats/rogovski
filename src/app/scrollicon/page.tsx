'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/scrollicon.module.css';

const ScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Set visibility when scrolling up or down
      if (scrollTop !== 0) {
        setIsVisible(true); // Show the icon if user has scrolled at all
      } else {
        setIsVisible(false); // Hide the icon when at the top of the page
      }

    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run once when the component mounts

  // Log `isVisible` when it updates
  useEffect(() => {
    console.log('isVisible updated:', isVisible);
  }, [isVisible]);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <section id="topbutton">
      <div
        className={styles.scrollContainer}
        onClick={scrollToTop}
      >
        <Image 
          src="/balalaika-top-button-improved 1.svg"
          alt="menurogovski"
          width={64}   // Fixed width
          height={64}  // Fixed height
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  ) : null;
};

export default ScrollIcon;
