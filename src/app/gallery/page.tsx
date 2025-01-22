'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect} from 'react';
import styles from '../styles/gallery.module.css'; // Import the CSS module
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    src: '/gallery1.png',
    alt: 'Rogovsky Interior',
    size: '1', // 80vw
    position: 'center',
    verticalOffset: '0%' 
  },
  {
    src: '/gallery2.png',
    alt: 'Menu Page',
    size: '2', // 60vw
    position: 'top',
    verticalOffset: '30%' 
  },
  {
    src: '/gallery3.png',
    alt: 'Menu Items',
    size: '1', // 40vw
    position: 'center',
    verticalOffset: '10%' 
  },
  {
    src: '/gallery4.png',
    alt: 'Table Setting',
    size: '2', // 60vw
    position: 'center',
    verticalOffset: '30%' 
  },
  {
    src: '/gallery6.jpg',
    alt: 'News Image',
    size: '1', // 80vw
    position: 'center',
    verticalOffset: '10%' 
  },
  {
    src: '/about-1.jpeg',
    alt: 'Restaurant View',
    size: '2', // 60vw
    position: 'top',
    verticalOffset: '30%' 
  },
  {
    src: '/gallery7.png',
    alt: 'Restaurant View',
    size: '1', // 60vw
    position: 'center',
    verticalOffset: '10%' 
  },
  {
    src: '/gallery8.png',
    alt: 'Restaurant View',
    size: '2', // 60vw
    position: 'top',
    verticalOffset: '30%' 
  },
  {
    src: '/gallery9.png',
    alt: 'Restaurant View',
    size: '1', // 60vw
    position: 'center',
    verticalOffset: '10%' 
  },
  {
    src: '/gallery10.png',
    alt: 'Restaurant View',
    size: '2', // 60vw
    position: 'top',
    verticalOffset: '30%' 
  },
  {
    src: '/gallery11.png',
    alt: 'Restaurant View',
    size: '1', // 60vw
    position: 'center',
    verticalOffset: '10%' 
  },
  {
    src: '/gallery12.png',
    alt: 'Restaurant View',
    size: '2', // 60vw
    position: 'top',
    verticalOffset: '30%' 
  }

];


const imageUrls = [
  '/gallery1.png',
  '/gallery2.png',
  '/gallery3.png',
  '/gallery4.png',
  '/gallery6.jpg',
  '/about-1.jpeg',
  '/gallery7.png',
  '/gallery8.png',
  '/gallery9.png',
  '/gallery10.png',
  '/gallery11.png',
  '/gallery12.png'
]; // Array of image URLs

const GallerySection: React.FC = () => {
  /* for Mobile width less than 393 */
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of the current image for mobile swipe
  const touchStartX = useRef<number | null>(null); // Track where the touch starts
  const touchEndX = useRef<number | null>(null); // Track where the touch ends

  /* for Desktop width over than 393 */
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isLocked, setIsLocked] = useState(false);
  /*const [progress, setProgress] = useState(0);*/
  const scrollPosition = useRef(0);
  const targetScroll = useRef(0);
  const isScrollComplete = useRef(false);


  // Touch Handlers for mobile 
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current;

      if (deltaX > 50) {
        // Swipe left
        if (currentIndex < imageUrls.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (deltaX < -50) {
        // Swipe right
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    }
    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };


  // For desktop
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {

    if (window.innerWidth < 394) { return;}
    let animationFrameId: number;
    let lastTime = performance.now();

    const handleScroll = () => {
    
      if (!sectionRef.current || isLocked || isScrollComplete.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3 && !isLocked && inView) {
        setIsLocked(true);
        document.body.style.overflow = 'hidden';
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: 'auto'
        });
      }
    };

    const animate = (currentTime: number) => {
      if (!containerRef.current || !isLocked) return;
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      // Smooth interpolation
      const scrollDiff = targetScroll.current - scrollPosition.current;
      const scrollStep = scrollDiff * Math.min(deltaTime * 5, 1); // Adjust speed here
      scrollPosition.current += scrollStep;
      // Update scroll position and progress
      container.scrollLeft = scrollPosition.current;
      const currentProgress = (scrollPosition.current / maxScroll) * 100;
      /*setProgress(Math.min(100, Math.max(0, currentProgress)));*/
      // Check if scrolling is complete
      if (currentProgress >= 98) {
        setIsLocked(false);
        document.body.style.overflow = '';
        isScrollComplete.current = true;
        return;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current || !isLocked) return;
      e.preventDefault();
      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollMultiplier = 2; // Adjust scroll sensitivity
      
      targetScroll.current = Math.max(0, Math.min(maxScroll,
        targetScroll.current + e.deltaY * scrollMultiplier
      ));
      if (!animationFrameId) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Check window width and apply logic accordingly
    if (window.innerWidth > 393) {
      window.addEventListener('scroll', handleScroll);
      if (isLocked) {
        window.addEventListener('wheel', handleWheel, { passive: false });
      }
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLocked, inView]);


  return (
    <section id="gallery" ref={sectionRef} className={styles.gallerySection}>
      {/* Mobile Only */}
      <div
        className={styles.sliderContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.sliderTitle}>
          Gallery
        </div>
        <div
          className={styles.imageTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imageUrls.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className={styles.image} />
          ))}
        </div>
        <div className={styles.dotNavigation}>
          {imageUrls.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)} // Allow user to click on dots to navigate
            />
          ))}
        </div>
      </div>
      {/* Desktop Only */}
      <div ref={inViewRef} className={styles.galleryOverlay}>
        <h2 className={styles.textOverlay}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="395" viewBox="0 0 1500 395" fill="none" className={styles.responsiveSvg} >
            <path d="M200.172 335.796L194.595 319.145C183.44 328.396 168.566 334.409 152.453 337.646C136.96 341.347 120.227 342.272 105.354 342.272C37.8034 342.272 0 321.458 0 246.066V96.2061C0 20.8138 61.9729 0 130.143 0C213.187 0 259.666 24.9766 260.906 89.7307L260.286 124.42H157.411V78.63C157.411 65.2166 151.834 52.7283 130.143 52.7283C108.453 52.7283 102.875 65.2166 102.875 78.63V263.642C102.875 277.055 107.833 289.543 130.143 289.543C151.834 289.543 157.411 277.055 157.411 263.642V219.701H118.368V169.748H260.286V335.796H200.172Z" fill="#E2483D"/>
            <path d="M372.994 239.128V267.804C372.994 277.055 381.671 281.68 390.966 281.68C411.418 281.68 413.896 271.505 413.896 247.916V202.125C394.685 212.301 372.994 218.314 372.994 239.128ZM413.896 335.796V304.807H412.657C400.882 323.77 382.91 339.034 343.867 339.034C301.106 339.034 275.077 319.608 275.077 284.918V245.603C275.077 176.224 413.896 184.549 413.896 135.521C413.896 124.883 409.558 116.095 393.445 116.095C377.332 116.095 372.994 124.883 372.994 135.521V164.66H275.077V140.146C275.077 86.9555 334.571 67.9918 393.445 67.9918C452.32 67.9918 511.814 86.9555 511.814 140.146V335.796H413.896Z" fill="#E2483D"/>
            <path d="M625.088 335.796H527.171V6.47541H625.088V335.796Z" fill="#E2483D"/>
            <path d="M739.181 335.796H641.264V6.47541H739.181V335.796Z" fill="#E2483D"/>
            <path d="M991.474 211.838H852.655V265.492C852.655 281.218 860.091 290.931 873.106 290.931C888.599 290.931 893.557 281.218 893.557 265.492V231.265H991.474V270.117C991.474 320.07 941.896 339.034 873.106 339.034C810.513 339.034 754.738 317.758 754.738 268.729V142.459C754.738 94.8185 796.879 67.9918 873.106 67.9918C935.698 67.9918 991.474 85.5679 991.474 142.459V211.838ZM852.655 167.898H893.557V131.821C893.557 121.645 886.74 116.095 873.106 116.095C859.472 116.095 852.655 121.645 852.655 131.821V167.898Z" fill="#E2483D"/>
            <path d="M1104.13 71.2295V105.919H1105.99C1119 82.7927 1140.69 67.9918 1176.64 67.9918C1226.22 67.9918 1208.5 88.8056 1208.5 116.095L1242.95 214.151H1145.03V149.859C1145.03 139.221 1140.69 128.121 1124.58 128.121C1108.47 128.121 1104.13 139.221 1104.13 149.859V335.796H1006.21V71.2295H1104.13Z" fill="#E2483D"/>
            <path d="M1251.49 71.2295H1350.65L1383.49 253.929H1384.73L1417.58 71.2295H1500L1420.67 350.135C1412.62 380.199 1384.11 395 1341.35 395H1262.64V346.897H1313.46C1326.48 346.897 1330.81 344.584 1330.81 339.496C1330.81 335.796 1329.57 332.559 1328.34 327.933L1251.49 71.2295Z" fill="#E2483D"/>
          </svg>
        </h2>
      </div>
      <div 
        ref={containerRef} 
        className={`${styles.imagesContainer} ${isLocked ? styles.scrolling : ''}`}
      >
          {galleryImages.map((image, index) => (

            
            <div 
              key={index}
              className={`${styles.imageWrapper} ${styles[`size-${image.size}`]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={95}
                className={styles.image}
                priority={index < 2}
                sizes={
                  image.size === '1'
                    ? '(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw'
                    : '(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 30vw'
                }
                style={{ 
                  objectPosition: `center ${image.position}`,
                  objectFit: 'cover', 
                }}
                  />
            </div>
          
          ))
        }
      </div>
{/* 
      <div className={styles.progressBarContainer}>
        <div 
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </div>
*/}
  </section>
  );
};

export default GallerySection;
