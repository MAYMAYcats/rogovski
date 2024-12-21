'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../styles/gallery.css';

const GalleryPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate translateX value based on scroll position
  const translateX = scrollPosition * 0.2; // Adjust this factor for desired speed

    // Adjust movement calculations

    //const maxTranslation = 1200; // Total space to move gallery (adjust this based on image width)
  
    //const translateX = Math.min(scrollY, maxTranslation); // Ensure it doesn't go beyond maxTranslation

  useEffect(() => {
    const svgs = document.querySelectorAll('.gallery-svg');
    const images = document.querySelectorAll('.gal-image, .gal-image2, .popup-image, .popup-image2, .popup-image3'); 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const delay = entry.target.getAttribute('data-delay') || '0'; 

        if (entry.isIntersecting) {
          entry.target.classList.add('show-svg', 'show-image');
          (entry.target as HTMLElement).style.animationDelay = `${delay}s`;
        } else {
          entry.target.classList.remove('show-svg', 'show-image');
          (entry.target as HTMLElement).style.animationDelay = '0.2s';
        }
      });
    }, { threshold: 1 }); // Adjust threshold to allow earlier detection

    svgs.forEach((svg) => observer.observe(svg));
    images.forEach((img) => observer.observe(img));

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <section id="gallery">
      <div className="galleryContainer">
        <div className="galleryContextContainer"
          style={{
            transform: `translateX(-${translateX}px)`, // Apply horizontal movement
            transition: 'transform 0.5s ease-out', // Optional smooth transition
          }}
>
          <div className="galleryText">
            <svg xmlns="http://www.w3.org/2000/svg"              
              className="gallery-svg"
              data-delay="5.0"
              width="1300" 
              height="395" 
              viewBox="0 0 1500 395" 
              fill="none"
            >
              <path d="M200.172 335.796L194.595 319.145C183.44 328.396 168.566 334.409 152.453 337.646C136.96 341.347 120.227 342.272 105.354 342.272C37.8034 342.272 0 321.458 0 246.066V96.2061C0 20.8138 61.9729 0 130.143 0C213.187 0 259.666 24.9766 260.906 89.7307L260.286 124.42H157.411V78.63C157.411 65.2166 151.834 52.7283 130.143 52.7283C108.453 52.7283 102.875 65.2166 102.875 78.63V263.642C102.875 277.055 107.833 289.543 130.143 289.543C151.834 289.543 157.411 277.055 157.411 263.642V219.701H118.368V169.748H260.286V335.796H200.172Z" fill="#E2483D"/>
              <path d="M372.994 239.128V267.804C372.994 277.055 381.671 281.68 390.966 281.68C411.418 281.68 413.896 271.505 413.896 247.916V202.125C394.685 212.301 372.994 218.314 372.994 239.128ZM413.896 335.796V304.807H412.657C400.882 323.77 382.91 339.034 343.867 339.034C301.106 339.034 275.077 319.608 275.077 284.918V245.603C275.077 176.224 413.896 184.549 413.896 135.521C413.896 124.883 409.558 116.095 393.445 116.095C377.332 116.095 372.994 124.883 372.994 135.521V164.66H275.077V140.146C275.077 86.9555 334.571 67.9918 393.445 67.9918C452.32 67.9918 511.814 86.9555 511.814 140.146V335.796H413.896Z" fill="#E2483D"/>
              <path d="M625.088 335.796H527.171V6.47541H625.088V335.796Z" fill="#E2483D"/>
              <path d="M739.181 335.796H641.264V6.47541H739.181V335.796Z" fill="#E2483D"/>
              <path d="M991.474 211.838H852.655V265.492C852.655 281.218 860.091 290.931 873.106 290.931C888.599 290.931 893.557 281.218 893.557 265.492V231.265H991.474V270.117C991.474 320.07 941.896 339.034 873.106 339.034C810.513 339.034 754.738 317.758 754.738 268.729V142.459C754.738 94.8185 796.879 67.9918 873.106 67.9918C935.698 67.9918 991.474 85.5679 991.474 142.459V211.838ZM852.655 167.898H893.557V131.821C893.557 121.645 886.74 116.095 873.106 116.095C859.472 116.095 852.655 121.645 852.655 131.821V167.898Z" fill="#E2483D"/>
              <path d="M1104.13 71.2295V105.919H1105.99C1119 82.7927 1140.69 67.9918 1176.64 67.9918C1226.22 67.9918 1208.5 88.8056 1208.5 116.095L1242.95 214.151H1145.03V149.859C1145.03 139.221 1140.69 128.121 1124.58 128.121C1108.47 128.121 1104.13 139.221 1104.13 149.859V335.796H1006.21V71.2295H1104.13Z" fill="#E2483D"/>
              <path d="M1251.49 71.2295H1350.65L1383.49 253.929H1384.73L1417.58 71.2295H1500L1420.67 350.135C1412.62 380.199 1384.11 395 1341.35 395H1262.64V346.897H1313.46C1326.48 346.897 1330.81 344.584 1330.81 339.496C1330.81 335.796 1329.57 332.559 1328.34 327.933L1251.49 71.2295Z" fill="#E2483D"/>
            </svg>
          </div>
          <div className="galleryImageContainer">
            <Image 
              className="gal-image"
              src="/gallery1.png"
              alt="popup1"
              width={333}
              height={358}

            />
            <Image 
              className="gal-image2"
              src="/gallery2.png"
              alt="popup2"
              width={333}
              height={358}

            />
            <Image 
              className="gal-image"
              src="/gallery1.png"
              alt="popup1"
              width={333}
              height={358}
                        />
            <Image 
              className="gal-image"
              src="/gallery1.png"
              alt="popup1"
              width={333}
              height={358}
                       />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPageC;
