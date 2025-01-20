'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import styles from '../styles/main.module.css';
import Bottom from '@/components/bottom';
import { useEffect, useState } from 'react';

import { useTranslation } from "react-i18next";
import { format } from 'date-fns';
import { ja } from 'date-fns/locale'; // 일본어 로케일 가져오기


const MainPage: React.FC =() =>{

    const { t } = useTranslation('main');

    const [activeImage, setActiveImage] = useState(1); // Default to the first image
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveImage((prev) => (prev === 4 ? 1 : prev + 1)); // Cycle through images 1 to 4
      }, 2000); // Change every 3 seconds (3000ms)
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
/*
    const [formattedDate, setFormattedDate] = useState<string>('');

    useEffect(() => {
      const date = new Date();
      setFormattedDate(format(date, 'yyyy/MM/dd', { locale: ja }));
    }, []); // 클라이언트에서만 날짜 처리
    */

return (

    <section id="main">

    <div className={styles.homeContainer}>
      <div className={styles.homeContextContainer}>
        <div className={styles.homeLeftContext}>
          <div className={styles.title}>
            <div className={styles.titleJP}>
            ロゴスキー
            </div>
            <div className={styles.titleEn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="336" viewBox="0 0 116 336" className={styles.titleVector}>
                <path d="M43.6392 335.235H0.667969V0.676514H43.8981C84.7985 0.676514 109.132 8.19467 109.132 78.6774C109.132 120.497 99.5537 147.75 76.256 154.799V155.739C96.965 156.678 109.132 170.775 109.132 218.703V288.716C109.132 301.873 110.426 321.608 115.603 335.235H72.373C67.1958 321.608 66.1603 301.873 66.1603 288.716V217.763C66.1603 194.269 58.3944 182.522 50.6285 182.522H43.6392V335.235ZM43.6392 48.6048V134.594C63.054 134.594 66.1603 122.847 66.1603 91.3643C66.1603 60.3519 63.3128 48.6048 43.6392 48.6048Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="339" viewBox="0 0 110 339" fill="none" className={styles.titleVector}>
                <path d="M43.5728 77.7025V260.532C43.5728 273.787 45.9026 286.128 54.9628 286.128C64.023 286.128 66.3528 273.787 66.3528 260.532V77.7025C66.3528 64.4474 64.023 52.1064 54.9628 52.1064C45.9026 52.1064 43.5728 64.4474 43.5728 77.7025ZM109.324 95.0713V243.163C109.324 317.666 83.4377 338.235 54.9628 338.235C26.4879 338.235 0.601562 317.666 0.601562 243.163V95.0713C0.601562 20.5683 26.4879 0 54.9628 0C83.4377 0 109.324 20.5683 109.324 95.0713Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="111" height="339" viewBox="0 0 111 339" fill="none" className={styles.titleVector}>
                <path d="M84.7477 331.836L82.4013 315.381C77.7085 324.522 71.4516 330.464 64.6732 333.664C58.1555 337.32 51.1164 338.235 44.8594 338.235C16.4422 338.235 0.539062 317.666 0.539062 243.163V95.0713C0.539062 20.5683 26.6098 0 55.2877 0C90.2225 0 109.776 24.682 110.297 88.6723L110.036 122.953H66.7588V77.7025C66.7588 64.4474 64.4125 52.1064 55.2877 52.1064C46.1629 52.1064 43.8165 64.4474 43.8165 77.7025V260.532C43.8165 273.787 45.9022 286.128 55.2877 286.128C64.4125 286.128 66.7588 273.787 66.7588 260.532V217.11H50.3342V167.746H110.036V331.836H84.7477Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="339" viewBox="0 0 110 339" fill="none" className={styles.titleVector}>
                <path d="M43.4439 77.7025V260.532C43.4439 273.787 45.7737 286.128 54.8339 286.128C63.8941 286.128 66.2239 273.787 66.2239 260.532V77.7025C66.2239 64.4474 63.8941 52.1064 54.8339 52.1064C45.7737 52.1064 43.4439 64.4474 43.4439 77.7025ZM109.195 95.0713V243.163C109.195 317.666 83.3088 338.235 54.8339 338.235C26.359 338.235 0.472656 317.666 0.472656 243.163V95.0713C0.472656 20.5683 26.359 0 54.8339 0C83.3088 0 109.195 20.5683 109.195 95.0713Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="117" height="336" viewBox="0 0 117 336" fill="none" className={styles.titleVector}>
                <path d="M28.8394 335.235L0.300781 0.676514H46.4815L56.8592 258.643H57.3781L76.0579 0.676514H116.271L85.3978 335.235H28.8394Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="339" viewBox="0 0 110 339" fill="none" className={styles.titleVector}>
                <path d="M109.066 122.953H66.095V77.2454C66.095 61.2479 63.2475 52.1064 54.705 52.1064C45.3859 52.1064 43.315 61.2479 43.315 77.2454C43.315 132.094 109.066 148.092 109.066 248.648C109.066 309.896 90.4281 338.235 54.4461 338.235C27.0066 338.235 0.34375 321.78 0.34375 265.56V205.226H43.315V261.446C43.315 280.643 46.6802 286.128 54.705 286.128C61.6943 286.128 66.095 280.643 66.095 261.446C66.095 187.857 0.34375 186.486 0.34375 81.3591C0.34375 22.3966 22.3471 0 55.4816 0C84.4743 0 109.066 17.3688 109.066 71.7606V122.953Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="113" height="336" viewBox="0 0 113 336" fill="none" className={styles.titleVector}>
                <path d="M43.2486 335.235H0.277344V0.676514H43.2486V152.449H43.7663L70.947 0.676514H111.847L83.1135 148.22L112.106 335.235H69.6526L43.7663 165.606H43.2486V335.235Z" fill="#101214"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="336" viewBox="0 0 43 336" fill="none" className={styles.titleVector}>
                <path d="M42.6684 335.235H0.214844V0.676514H42.6684V335.235Z" fill="#101214"/>
              </svg>
            </div>
            <div className={styles.titleEn2}>
              ROGOVSKI
            </div>

          </div>
          <div className={styles.sinceBox}>
            Since 1951
          </div>
          <div className={styles.homeSubTitle} suppressHydrationWarning>
            {t("subTitle")}
          </div>
          <div className={styles.homeDescription} suppressHydrationWarning>
            {t("homeDescription")}
          </div>
          <div className={styles.reserveButtonWrapper}> 
            <div className={styles.reserveButton} suppressHydrationWarning> 
              {t("reserve")}
            </div>
          </div>
        </div>
        <div className={styles.homeRightContext}>
          <div className={styles.imageBox}>
            <div className={`${styles.imageCycle} ${activeImage === 1 ? styles.active : ''}`}>
            <Image
                src="/main-rogovski.png"
                alt="Image 1"
                width={460}
                height={565}
              />
            </div>
            <div className={`${styles.imageCycle} ${activeImage === 2 ? styles.active : ''}`}>
            <Image
                src="/main2.png"
                alt="Image 2"
                width={460}
                height={565}
              />
            </div>
            <div className={`${styles.imageCycle} ${activeImage === 3 ? styles.active : ''}`}>
            <Image
                src="/main3.png"
                alt="Image 3"
                width={460}
                height={565}
              />
            </div>
            <div className={`${styles.imageCycle} ${activeImage === 4 ? styles.active: ''}`}>
            <Image
                src="/main4.png"
                alt="Image 4"
                width={460}
                height={565}
              />
            </div>
          </div>
      
          <div className={styles.animationBox}>
            <div className={styles.animatedBorder1}>
              <Image className={styles.aniStyle}
                src="/menu1.jpeg"
                alt="menu1"
                width={56}
                height={56}
              />
            </div>
            <div className={styles.animatedBorder2}>
              <Image className={styles.aniStyle}
                src="/menu2.png"
                alt="menu2"
                width={56}
                height={56}
              />
            </div>
            <div className={styles.animatedBorder3}>
              <Image className={styles.aniStyle}
                src="/menu3.jpeg"
                alt="menu3"
                width={56}
                height={56}
              />
            </div>
            <div className={styles.animatedBorder4}>
              <Image className={styles.aniStyle}
                src="/menu4.jpeg"
                alt="menu4"
                width={56}
                height={56}
              />
            </div>
          </div>

        <div className={styles.lineContainer}> 
          <div className={styles.line}/>
        </div>
        </div>

      </div>

    </div>

  <Bottom />
  </section>
);
};
export default MainPage;