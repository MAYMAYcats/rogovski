'use client';
import { useEffect, useRef, useState } from "react";
import styles from "../styles/mosaic.module.css";
import Image from "next/image";

import { useTranslation } from "react-i18next";


const MosaicPage: React.FC = () => {
  const { t } = useTranslation('mosaic');

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let rafId: number;

    const updateParallax = () => {
      if (!sectionRef.current || !containerRef.current || !imageRef.current || !textRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top / (window.innerHeight);
      
      if (scrollProgress > 0 && !isRevealed) {
        setIsRevealed(true);
        document.body.style.overflow = 'hidden';
        timeoutId = setTimeout(() => {
          document.body.style.overflow = '';
          setCanScroll(true);
          containerRef.current?.classList.add(styles.parallax);
        }, 2700);
      }

      // Parallax effect
      if (canScroll) {
        const parallaxProgress = Math.min(Math.max(scrollProgress - 1, 0), 1);
        imageRef.current.style.setProperty('--scroll-speed', parallaxProgress.toString());
        textRef.current.style.setProperty('--scroll-speed', parallaxProgress.toString());

        // Fade out when scrolling past
        if (scrollProgress > 2) {
          containerRef.current.classList.add(styles.scrolling);
        } else {
          containerRef.current.classList.remove(styles.scrolling);
        }
      }

      rafId = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      document.body.style.overflow = '';
    };
  }, [isRevealed, canScroll]);

  return (
    <section ref={sectionRef} id="mosaic" className={styles.section}>
      <div className={styles.mobileContainer}>
        <div className={styles.mobileImage}>
          <Image
              src="/mosaic.jpeg"
              alt="Restaurant Interior"
              width={393}
              height={300}
            />
        </div>
      </div>
      <div 
        ref={containerRef} 
        className={`${styles.imageContainer} ${isRevealed ? styles.reveal : ''} ${canScroll ? styles['can-scroll'] : ''}`}
      >
        <div ref={imageRef} className={styles.image}>
          <Image
            src="/mosaic.jpeg"
            alt="Restaurant Interior"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
        <div className={styles.splitLines}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.splitLine} />
          ))}
        </div>
        <div ref={textRef} className={styles.textContent}>
          <h1 className={styles.title} suppressHydrationWarning>
            {t("p1")}<br />{t("p2")}{" "}
            <span className={styles.wordRotator}>
              <span className={styles.rotatingWords} suppressHydrationWarning>{t("friend")}</span>
              <span className={styles.rotatingWords} suppressHydrationWarning>{t("family")}</span>
              <span className={styles.rotatingWords} suppressHydrationWarning>{t("lover")}</span>
            </span>
          </h1>
          <button className={styles.reserveButton} suppressHydrationWarning>
          {t("reserve")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MosaicPage;
