'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../styles/popup.css';
import { useTranslation } from "react-i18next";


const PopupPage: React.FC =() =>{
    const { t } = useTranslation('popup');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const rightPopup = document.querySelector('.rightPopup') as HTMLElement;
        const boxes = document.querySelectorAll('.rightPopupBox') as NodeListOf<HTMLElement>;


        const handleScroll = () => {
            if(!rightPopup) return;
            const isMobile = window.innerWidth <= 393;
            const scrollPosition = isMobile ? 
                document.body.scrollTop || document.documentElement.scrollTop : 
                window.scrollY;
            const scrollHeight = rightPopup.scrollHeight; // Total height of scrollable content
            const clientHeight = rightPopup.clientHeight; // Visible height of the rightPopup
            const windowHeight = window.innerHeight;

            // Calculate scroll progress based on rightPopup's scroll
            const scrollProgress = scrollHeight > clientHeight
                ? (scrollPosition / (scrollHeight - clientHeight)) * 100
                : 0;
        
            // Update progress bar based on scroll progress
            setProgress(scrollProgress);


            //const boxes = document.querySelectorAll('.rightPopupBox');
            const triggerPoint = isMobile ? windowHeight * 0.3 : windowHeight * 0.3;

            let visibleBoxes = 0;

            boxes.forEach((box, index) => {
              const boxTop = box.offsetTop;
              const boxHeight = box.offsetHeight;
              const isVisible = boxTop + boxHeight > scrollPosition && boxTop < scrollPosition + clientHeight;
      
              if (isVisible) {
                box.classList.add('show');
                visibleBoxes  = visibleBoxes+1;
                /*console.log("isVisible, visibleBox?", isVisible, visibleBoxes, visibleBoxes)*/
              } else {
                box.classList.remove('show');
                /*console.log("isVisible", isVisible, visibleBoxes, visibleBoxes)*/
              }
            });
      
            // Calculate progress based on how many boxes are visible
            const totalBoxes = boxes.length;
            const progressPercentage = (visibleBoxes / totalBoxes) * 100;
            setProgress(progressPercentage);

      /*      console.log("visibleBoxes: ", visibleBoxes);
      
            console.log("Box Scroll Progress: ", progressPercentage);*/

            if (scrollPosition > triggerPoint) {
                rightPopup?.classList.add('show');
                const scrollProgress = Math.min((scrollPosition - triggerPoint) / windowHeight, 1);
                if (rightPopup) {
                    rightPopup.style.transform = `translateY(${100 - (scrollProgress * 100)}%)`;
                }
            }

            boxes.forEach((box, index) => {
                const boxTrigger = windowHeight * (0.7 + index * 0.5);
                if (scrollPosition > boxTrigger) {
                    box.classList.add('show');
                }
            });
        };

        // Add touch events for mobile
        const events = ['scroll', 'touchmove', 'touchend'];
        events.forEach(event => 
            window.addEventListener(event, handleScroll, { passive: true }));
        handleScroll();

        return () => {
            events.forEach(event => window.removeEventListener(event, handleScroll));
        };
    }, []);

      
    return (
    <section id="popup">

    <div className="widePage">
      <div className="popupContextContainer">
        <div className="backgroundImage">
            <Image className="popupBgImage"
                src="/popup.png"
                alt="popup1"
                width={1920}
                height={1200}
                priority
            />
            <div className="bgText pcVersion">
                Rogovski <br /> Exclusive <br />Cuisine
            </div>
            <div className="bgText mobileVersion">
                Rogovski <br /> Exclusive Cuisine
            </div>

        </div>
        <div className="rightPopup">
            <div className="rightPopupWrapper">
                <div className="rightPopupBox">
                    <h1 suppressHydrationWarning>{t("menu1")}</h1>
                    
                    <Image className="img1"
                        src="/popup1.png"
                        alt="popup1"
                        width={590}
                        height={358}
                        loading="lazy"
                    />

                    <p suppressHydrationWarning>
                        {t("description1")}                    
                    </p>
                </div>
                <div className="rightPopupBox">
                    <h1 suppressHydrationWarning>{t("menu2")}</h1>
                    <Image className="img1"
                        src="/popup-2.jpg"
                        alt="popup3"
                        width={590}
                        height={358}
                        loading="lazy"
                    />
                    <p suppressHydrationWarning>
                        {t("description2")}                         
                    </p>
                </div>
                <div className="rightPopupBox">
                    <h1 suppressHydrationWarning>{t("menu3")}</h1>
                    <Image className="img1"
                        src="/popup2.png"
                        alt="popup2"
                        width={590}
                        height={358}
                        loading="lazy"
                    />
                    <p suppressHydrationWarning>
                        {t("description3")}                   
                    </p>
                 </div>
                <div className="rightPopupBox">
                    <h1 suppressHydrationWarning>{t("menu4")}</h1>
                    <Image className="img1"
                        src="/popup-1.jpg"
                        alt="popup4"
                        width={590}
                        height={358}
                        loading="lazy"
                    />
                    <p suppressHydrationWarning>{t("description4")}  </p>
                </div>
                <div className="rightPopupBox">
                    <h1 suppressHydrationWarning>{t("menu5")}</h1>
                    <Image className="img1"
                        src="/popup5.png"
                        alt="popup5"
                        width={590}
                        height={358}
                        loading="lazy"
                    />
                    <p suppressHydrationWarning>{t("description5")}</p>
                </div>
            </div>
                                  {/* Progress Bar (aligned to the right of .rightPopup) */}

        </div>
        <div className="progressBarContainer">
                <div
                    className="progressBar"
                    style={{ height: `${progress}%` }}>

                </div>
            </div>
    </div>
    </div>


  </section>
  );
};

export default PopupPage;