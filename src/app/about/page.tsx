'use client';
import Image from 'next/image';
import styles from '../styles/about.module.css';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useTranslation } from "react-i18next";

const ScrollLink = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

const AboutPage: React.FC =() =>{
  const { t } = useTranslation('about');
  

  return (
  <section id="about">
    <Suspense fallback={<div>Loading...</div>}>
    <div className="container">
      <div className="contextContainer">
        <div className={styles.leftContext}>
          <div className="title">
            <div className="titleEn">
            About
            </div>
            <div className="titleJp">
            ロゴスキーについて
            </div>
          </div>
          <div className="subTitle">
            <h1 suppressHydrationWarning>{t("subTitle")}</h1>
          </div>
          <div className="detail1">
            <p suppressHydrationWarning>
              {t("detail")}
            </p>
            <p className="detail2" suppressHydrationWarning>
              {t("detail2")}
            </p>
          </div>
          <a href="https://www.rogovski.co.jp/omise0.htm" className={styles.viewAllStories}>
            <p className={styles.viewAllStoriesText} suppressHydrationWarning>
              {t("viewAllStories")}
            </p>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" /*</div>width="24" height="24"*/ viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
              </svg>
            </div>
          </a>
        <hr className={styles.customLine} />
        <div className={styles.mobileImageBox2}>
          <Image 
              src="/about-mobile.png"
              alt="mobile-rogovski"
              width={321}
              height={205}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
      </div>
      <div className="rightContext">
        <div className={styles.imageContainer}>
          <div className={styles.imageBox1}>
            <Image 
              src="/about-1.jpeg"
              alt="maain-rogovski"
              width={240}
              height={211}
              style={{ objectFit: 'cover' }}

            />
          </div>
          <div className={styles.imageBox2}>
            <Image 
                src="/about-4.png"
                alt="maain-rogovski"
                width={330}
                height={474}
                style={{ objectFit: 'cover' }}
              />
          </div>
          <div className={styles.imageBox3}>
            <Image 
                src="/about-2.png"
                alt="maain-rogovski"
                width={110}
                height={243}
                style={{ objectFit: 'cover' }}
              />
          </div>
          <div className={styles.imageBox4}>
            <Image 
                src="/about-3.jpeg"
                alt="maain-rogovski"
                width={110}
                height={129}
                style={{ objectFit: 'cover' }}
              />
          </div>
          <div className={styles.imageBox5}>
          <ScrollLink to="gallery" smooth={true} offset={0} className="menuItem">
            Gallery
          </ScrollLink>
          </div>
        </div>
        <div className={styles.history}>
          1951-2024
        </div>

      </div>

    </div>

    </div>
    </Suspense>
  </section>
);
};
export default AboutPage;