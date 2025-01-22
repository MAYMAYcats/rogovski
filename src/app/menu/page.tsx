"use client"
import Image from 'next/image';
import styles from '../styles/menu.module.css';
import { useTranslation } from "react-i18next";
import { useState } from 'react';


const MenuPage: React.FC =() =>{

    const { t } = useTranslation('menu');
    const lunchUrl = `https://www.rogovski.co.jp/oshokuji2.htm`;
    const dinnerUrl = `https://www.rogovski.co.jp/oshokuji1.htm`;
    const alacrateUrl = `https://www.rogovski.co.jp/oshokuji0.htm`;
    const takeoutUrl = `https://www.rogovski.co.jp/omiyage.htm`;
    const drinkbarUrl = `https://www.rogovski.co.jp/oshokuji3.htm`;
    

    /*** */
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    /**** */
    return(
    <section id="menu">
        <div className={styles.container}>
            <div className={styles.contextContainer}>
                <div className={styles.leftContext}>
                    <div className={styles.title}>
                        <div className={styles.titleEn}>
                            Menu
                        </div>
                        <div className={styles.titleJp}>
                            メニュー
                        </div>
                    </div>

                    <div className={styles.subTitle}>
                        <h1 suppressHydrationWarning>{t("subTitle")}</h1>
                    </div>
                    <div className={styles.detail}>
                        <p suppressHydrationWarning>
                        {t("detail")} 
                        </p>
                    </div>

                    <div className={styles.menuLinkWrapper}>
                        <div className={styles.menuLink}
                            onMouseEnter={() => setImageUrl("/menu-1.png")}  // On hover, set the image URL
                            onMouseLeave={() => setImageUrl(null)}  // On mouse out, remove the image
                        >
                            <a href={lunchUrl} suppressHydrationWarning>{t("menuLink1")}</a>
                            <div className={styles.menuIcon}>
                                <svg className={styles.defaultIcon} xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 9 9" fill="none" preserveAspectRatio="xMidYMid meet">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57452 6.89182C8.54167 6.89183 8.50913 6.88538 8.47877 6.87281C8.44842 6.86025 8.42083 6.84182 8.3976 6.81859C8.37437 6.79536 8.35595 6.76778 8.34338 6.73742C8.33082 6.70706 8.32436 6.67453 8.32438 6.64168L8.32438 0.881407L0.973121 8.23267C0.926237 8.27955 0.862649 8.30589 0.796344 8.30589C0.730041 8.30589 0.666452 8.27955 0.619568 8.23267C0.572683 8.18578 0.546344 8.12219 0.546344 8.05589C0.546344 7.98958 0.572683 7.926 0.619568 7.87911L7.97083 0.527854L2.21056 0.527853C2.17771 0.527853 2.14518 0.521383 2.11483 0.508812C2.08449 0.496241 2.05691 0.477817 2.03368 0.454589C2.01045 0.431362 1.99203 0.403786 1.97946 0.373438C1.96689 0.34309 1.96042 0.310563 1.96042 0.277714C1.96042 0.244865 1.96689 0.212338 1.97946 0.18199C1.99203 0.151642 2.01046 0.124066 2.03368 0.100839C2.05691 0.0776115 2.08448 0.0591863 2.11483 0.0466157C2.14518 0.034045 2.17771 0.0275746 2.21056 0.0275749L8.57452 0.0275756C8.60737 0.0275575 8.63991 0.0340149 8.67026 0.0465789C8.70062 0.0591432 8.7282 0.077568 8.75143 0.100799C8.77467 0.12403 8.79309 0.151613 8.80565 0.181969C8.81822 0.212326 8.82468 0.244861 8.82466 0.277715L8.82466 6.64168C8.82468 6.67453 8.81822 6.70706 8.80565 6.73742C8.79309 6.76778 8.77467 6.79536 8.75143 6.81859C8.7282 6.84182 8.70062 6.86025 8.67026 6.87281C8.63991 6.88538 8.60737 6.89183 8.57452 6.89182Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.menuLink}
                               onMouseEnter={() => setImageUrl("/menu-2.png")}  // On hover, set the image URL
                               onMouseLeave={() => setImageUrl(null)}  // On mouse out, remove the image
   
                        >
                            <a href={dinnerUrl} suppressHydrationWarning>{t("menuLink2")}</a>
                            <div className={styles.menuIcon}>
                                <svg className={styles.defaultIcon} xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 9 9" fill="none" preserveAspectRatio="xMidYMid meet">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57452 6.89182C8.54167 6.89183 8.50913 6.88538 8.47877 6.87281C8.44842 6.86025 8.42083 6.84182 8.3976 6.81859C8.37437 6.79536 8.35595 6.76778 8.34338 6.73742C8.33082 6.70706 8.32436 6.67453 8.32438 6.64168L8.32438 0.881407L0.973121 8.23267C0.926237 8.27955 0.862649 8.30589 0.796344 8.30589C0.730041 8.30589 0.666452 8.27955 0.619568 8.23267C0.572683 8.18578 0.546344 8.12219 0.546344 8.05589C0.546344 7.98958 0.572683 7.926 0.619568 7.87911L7.97083 0.527854L2.21056 0.527853C2.17771 0.527853 2.14518 0.521383 2.11483 0.508812C2.08449 0.496241 2.05691 0.477817 2.03368 0.454589C2.01045 0.431362 1.99203 0.403786 1.97946 0.373438C1.96689 0.34309 1.96042 0.310563 1.96042 0.277714C1.96042 0.244865 1.96689 0.212338 1.97946 0.18199C1.99203 0.151642 2.01046 0.124066 2.03368 0.100839C2.05691 0.0776115 2.08448 0.0591863 2.11483 0.0466157C2.14518 0.034045 2.17771 0.0275746 2.21056 0.0275749L8.57452 0.0275756C8.60737 0.0275575 8.63991 0.0340149 8.67026 0.0465789C8.70062 0.0591432 8.7282 0.077568 8.75143 0.100799C8.77467 0.12403 8.79309 0.151613 8.80565 0.181969C8.81822 0.212326 8.82468 0.244861 8.82466 0.277715L8.82466 6.64168C8.82468 6.67453 8.81822 6.70706 8.80565 6.73742C8.79309 6.76778 8.77467 6.79536 8.75143 6.81859C8.7282 6.84182 8.70062 6.86025 8.67026 6.87281C8.63991 6.88538 8.60737 6.89183 8.57452 6.89182Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.menuLink}
                               onMouseEnter={() => setImageUrl("/menu-3.png")}  // On hover, set the image URL
                               onMouseLeave={() => setImageUrl(null)}  // On mouse out, remove the image
   
                        >
                            <a href={alacrateUrl} suppressHydrationWarning>{t("menuLink3")}</a>
                            <div className={styles.menuIcon}>
                                <svg className={styles.defaultIcon} xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 9 9" fill="none" preserveAspectRatio="xMidYMid meet">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57452 6.89182C8.54167 6.89183 8.50913 6.88538 8.47877 6.87281C8.44842 6.86025 8.42083 6.84182 8.3976 6.81859C8.37437 6.79536 8.35595 6.76778 8.34338 6.73742C8.33082 6.70706 8.32436 6.67453 8.32438 6.64168L8.32438 0.881407L0.973121 8.23267C0.926237 8.27955 0.862649 8.30589 0.796344 8.30589C0.730041 8.30589 0.666452 8.27955 0.619568 8.23267C0.572683 8.18578 0.546344 8.12219 0.546344 8.05589C0.546344 7.98958 0.572683 7.926 0.619568 7.87911L7.97083 0.527854L2.21056 0.527853C2.17771 0.527853 2.14518 0.521383 2.11483 0.508812C2.08449 0.496241 2.05691 0.477817 2.03368 0.454589C2.01045 0.431362 1.99203 0.403786 1.97946 0.373438C1.96689 0.34309 1.96042 0.310563 1.96042 0.277714C1.96042 0.244865 1.96689 0.212338 1.97946 0.18199C1.99203 0.151642 2.01046 0.124066 2.03368 0.100839C2.05691 0.0776115 2.08448 0.0591863 2.11483 0.0466157C2.14518 0.034045 2.17771 0.0275746 2.21056 0.0275749L8.57452 0.0275756C8.60737 0.0275575 8.63991 0.0340149 8.67026 0.0465789C8.70062 0.0591432 8.7282 0.077568 8.75143 0.100799C8.77467 0.12403 8.79309 0.151613 8.80565 0.181969C8.81822 0.212326 8.82468 0.244861 8.82466 0.277715L8.82466 6.64168C8.82468 6.67453 8.81822 6.70706 8.80565 6.73742C8.79309 6.76778 8.77467 6.79536 8.75143 6.81859C8.7282 6.84182 8.70062 6.86025 8.67026 6.87281C8.63991 6.88538 8.60737 6.89183 8.57452 6.89182Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.menuLink}
                          onMouseEnter={() => setImageUrl("/menu-4.png")}  // On hover, set the image URL
                          onMouseLeave={() => setImageUrl(null)}  // On mouse out, remove the image
>
                            <a href={drinkbarUrl} suppressHydrationWarning>{t("menuLink4")}</a>
                            <div className={styles.menuIcon}>
                                <svg className={styles.defaultIcon} xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 9 9" fill="none" preserveAspectRatio="xMidYMid meet">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57452 6.89182C8.54167 6.89183 8.50913 6.88538 8.47877 6.87281C8.44842 6.86025 8.42083 6.84182 8.3976 6.81859C8.37437 6.79536 8.35595 6.76778 8.34338 6.73742C8.33082 6.70706 8.32436 6.67453 8.32438 6.64168L8.32438 0.881407L0.973121 8.23267C0.926237 8.27955 0.862649 8.30589 0.796344 8.30589C0.730041 8.30589 0.666452 8.27955 0.619568 8.23267C0.572683 8.18578 0.546344 8.12219 0.546344 8.05589C0.546344 7.98958 0.572683 7.926 0.619568 7.87911L7.97083 0.527854L2.21056 0.527853C2.17771 0.527853 2.14518 0.521383 2.11483 0.508812C2.08449 0.496241 2.05691 0.477817 2.03368 0.454589C2.01045 0.431362 1.99203 0.403786 1.97946 0.373438C1.96689 0.34309 1.96042 0.310563 1.96042 0.277714C1.96042 0.244865 1.96689 0.212338 1.97946 0.18199C1.99203 0.151642 2.01046 0.124066 2.03368 0.100839C2.05691 0.0776115 2.08448 0.0591863 2.11483 0.0466157C2.14518 0.034045 2.17771 0.0275746 2.21056 0.0275749L8.57452 0.0275756C8.60737 0.0275575 8.63991 0.0340149 8.67026 0.0465789C8.70062 0.0591432 8.7282 0.077568 8.75143 0.100799C8.77467 0.12403 8.79309 0.151613 8.80565 0.181969C8.81822 0.212326 8.82468 0.244861 8.82466 0.277715L8.82466 6.64168C8.82468 6.67453 8.81822 6.70706 8.80565 6.73742C8.79309 6.76778 8.77467 6.79536 8.75143 6.81859C8.7282 6.84182 8.70062 6.86025 8.67026 6.87281C8.63991 6.88538 8.60737 6.89183 8.57452 6.89182Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.menuLink}
                          onMouseEnter={() => setImageUrl("/menu-5.png")}  // On hover, set the image URL
                          onMouseLeave={() => setImageUrl(null)}  // On mouse out, remove the image
>
                            <a href={takeoutUrl} suppressHydrationWarning>{t("menuLink5")}</a>
                            <div className={styles.menuIcon}>
                                <svg className={styles.defaultIcon} xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 9 9" fill="none" preserveAspectRatio="xMidYMid meet">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57452 6.89182C8.54167 6.89183 8.50913 6.88538 8.47877 6.87281C8.44842 6.86025 8.42083 6.84182 8.3976 6.81859C8.37437 6.79536 8.35595 6.76778 8.34338 6.73742C8.33082 6.70706 8.32436 6.67453 8.32438 6.64168L8.32438 0.881407L0.973121 8.23267C0.926237 8.27955 0.862649 8.30589 0.796344 8.30589C0.730041 8.30589 0.666452 8.27955 0.619568 8.23267C0.572683 8.18578 0.546344 8.12219 0.546344 8.05589C0.546344 7.98958 0.572683 7.926 0.619568 7.87911L7.97083 0.527854L2.21056 0.527853C2.17771 0.527853 2.14518 0.521383 2.11483 0.508812C2.08449 0.496241 2.05691 0.477817 2.03368 0.454589C2.01045 0.431362 1.99203 0.403786 1.97946 0.373438C1.96689 0.34309 1.96042 0.310563 1.96042 0.277714C1.96042 0.244865 1.96689 0.212338 1.97946 0.18199C1.99203 0.151642 2.01046 0.124066 2.03368 0.100839C2.05691 0.0776115 2.08448 0.0591863 2.11483 0.0466157C2.14518 0.034045 2.17771 0.0275746 2.21056 0.0275749L8.57452 0.0275756C8.60737 0.0275575 8.63991 0.0340149 8.67026 0.0465789C8.70062 0.0591432 8.7282 0.077568 8.75143 0.100799C8.77467 0.12403 8.79309 0.151613 8.80565 0.181969C8.81822 0.212326 8.82468 0.244861 8.82466 0.277715L8.82466 6.64168C8.82468 6.67453 8.81822 6.70706 8.80565 6.73742C8.79309 6.76778 8.77467 6.79536 8.75143 6.81859C8.7282 6.84182 8.70062 6.86025 8.67026 6.87281C8.63991 6.88538 8.60737 6.89183 8.57452 6.89182Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.reserveButtonWrapper}> 
                        <div className={styles.reserveButton}> 
                            Menu
                        </div>
                    </div>

                    <div className={styles.mobileMenuImageBox}>
                        <Image 
                            src="/menuPage.jpeg"
                            alt="menurogovski"
                            width={327}   // Fixed width
                            height={270}  // Fixed height
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div className={styles.rightContext}>
                <div className={styles.backgroundImage}>
                    {imageUrl && (
                        <div className={styles.imageWrapper}>
                            <Image src={imageUrl} alt="Menu Image" width={670} height={853} />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
  </section>
);
}
export default MenuPage;