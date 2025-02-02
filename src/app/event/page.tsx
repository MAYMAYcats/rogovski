'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import styles from '../styles/event.module.css';
import { Suspense } from 'react';
import { useTranslation } from "react-i18next";

const EventPage: React.FC =() =>{
  const { t } = useTranslation('event');


  return (
  <section id="event">
        <Suspense fallback={<div>Loading...</div>}>
    <div className="container">
      <div className={styles.contextContainer}>
        <div className="leftContext">
          <div className="title">
            <div className="titleEn">
              Event
            </div>
            <div className="titleJp">
              イベント
            </div>
          </div>
          <div className={styles.calendarWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
              <path d="M16 18.5H2V7.5H16M13 0.5V2.5H5V0.5H3V2.5H2C0.89 2.5 0 3.39 0 4.5V18.5C0 19.0304 0.210714 19.5391 0.585786 19.9142C0.960859 20.2893 1.46957 20.5 2 20.5H16C16.5304 20.5 17.0391 20.2893 17.4142 19.9142C17.7893 19.5391 18 19.0304 18 18.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5H15V0.5M14 11.5H9V16.5H14V11.5Z" fill="white"/>
            </svg>
            <span className={styles.calendarText}>Calendar</span>
          </div>

          <div className="subTitle">
            <h1 suppressHydrationWarning>{t("subTitle")}</h1>
          </div>
          <div className="detail1">
            <p suppressHydrationWarning>
              {t("detail1")}
            </p>
          </div>
          <div className="detail1">
            <p suppressHydrationWarning>
              {t("detail2")}    
            </p>
          </div>
          <div className={styles.eventListContainer}>
            
          <a href="discover" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "black", textDecoration: "none" }}
            className={styles.eventList}>
              <span className={styles.eventDate} suppressHydrationWarning>
                {t("eventDate1")}
              </span>
              <span className={styles.eventTitle} suppressHydrationWarning>
                {t("eventTitle1")}
              </span>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </a>

            <a href="discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "black", textDecoration: "none" }}
              className={styles.eventList}>
            <span className={styles.eventDate} suppressHydrationWarning>
              {t("eventDate2")}
              </span>
              <span className={styles.eventTitle} suppressHydrationWarning>
              {t("eventTitle2")}
              </span>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </a>

            <a href="discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "black", textDecoration: "none" }}
              className={styles.eventList}>
            <span className={styles.eventDate} suppressHydrationWarning>
              {t("eventDate3")}
              </span>
              <span className={styles.eventTitle} suppressHydrationWarning>
              {t("eventTitle3")}
              </span>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </a>

            <a href="discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "black", textDecoration: "none" }}
              className={styles.eventList}>
            <span className={styles.eventDate} suppressHydrationWarning>
              {t("eventDate4")}
              </span>
              <span className={styles.eventTitle} suppressHydrationWarning>
              {t("eventTitle4")}
              </span>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </a>

            <a href="discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "black", textDecoration: "none" }}
              className={styles.eventList}>
            <span className={styles.eventDate} suppressHydrationWarning>
              {t("eventDate5")}
              </span>
              <span className={styles.eventTitle} suppressHydrationWarning>
              {t("eventTitle5")}
              </span>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </a>

            <a href="discover" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "black", textDecoration: "none" }}
              className={styles.eventList}>
            <span className={styles.eventDate} suppressHydrationWarning>
              {t("eventDate6")}
              </span>
              <span className={styles.eventTitle} suppressHydrationWarning>
              {t("eventTitle6")}
              </span>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </a>
          </div>
          <div className={styles.mobileImageBox}>
          <Image 
                  src="/event2.png"
                  alt="eventrogovski"
                  width={590}   // Fixed width
                  height={508} 
                  style={{ objectFit: 'cover' }}
          />
        </div>
        </div>

        <div className="rightContext">
          <div className={styles.imageBox}>
            <Image 
                src="/event2.png"
                alt="eventrogovski"
                width={590}   // Fixed width
                height={508} 
                style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.welcomeBox}>
            <div className={styles.welcomeItem}>
              <div className={styles.word1}>いらっしゃいませ</div>
              <div className={styles.word2}>WELCOME</div>
              <div className={styles.word3}>歡迎</div>
              <div className={styles.word4}>مرحباً </div>
              <div className={styles.word5}>환영합니다</div>
            </div>
            <div className={styles.russsianText}>
              Приходите 
              пожайлуста 
            </div>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  </section>
  )
};

export default EventPage;