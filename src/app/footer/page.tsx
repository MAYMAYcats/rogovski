'use client';
import '../styles/footer.css';
import { useTranslation } from "react-i18next";



const Footer: React.FC = () => {
  const { t } = useTranslation('access');

  
  return(
  <section id="footer">
    <div className="footerContainer">
      <div className="leftContainer">
        <h1>03-6274-6670</h1>
        <p suppressHydrationWarning>
          {t("contactDetail")}
        </p>
        <h3 suppressHydrationWarning>{t("openingTimes")}</h3>
        <div className="weekdays">
          <p suppressHydrationWarning>▼{t("weekdays")}</p>
          <p suppressHydrationWarning>{t("weekdaysLunch")}</p>
          <p suppressHydrationWarning>{t("weekdaysDinner")}</p>
        </div>
        <div className="weekends">
          <p suppressHydrationWarning>{t("weekends")}</p>
          <p suppressHydrationWarning>{t("weekendsLunch")}</p>
          <p suppressHydrationWarning>{t("weekendsDinner")}</p>
        </div>
      </div>
      <div className="midContainer">
        <ul>
          <li>About
            <div className="customLine"></div>
          </li>
          <li>Menu
          <div className="customLine"></div>
          </li>
          <li>Event
          <div className="customLine"></div>
          </li>
          <li>Gallery
          <div className="customLine"></div>
          </li>
          <li>News
          <div className="customLine"></div>
          </li>
          <li>Access
          <div className="customLine"></div>
          </li>
          <li className="onlineShop">Online Shop
          <div className="customLine"></div>
          </li>
          <div className="reserveBtn">Reserve</div>
        </ul>
      </div>
      <div className="rightContainer">
        <div className="snsIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
            <path d="M24.5 4.08008C13.5 4.08008 4.5 13.0601 4.5 24.1201C4.5 34.1201 11.82 42.4201 21.38 43.9201V29.9201H16.3V24.1201H21.38V19.7001C21.38 14.6801 24.36 11.9201 28.94 11.9201C31.12 11.9201 33.4 12.3001 33.4 12.3001V17.2401H30.88C28.4 17.2401 27.62 18.7801 27.62 20.3601V24.1201H33.18L32.28 29.9201H27.62V43.9201C32.3329 43.1758 36.6244 40.7711 39.7199 37.1402C42.8153 33.5093 44.5107 28.8914 44.5 24.1201C44.5 13.0601 35.5 4.08008 24.5 4.08008Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
            <path d="M16.1 4H32.9C39.3 4 44.5 9.2 44.5 15.6V32.4C44.5 35.4765 43.2779 38.427 41.1024 40.6024C38.927 42.7779 35.9765 44 32.9 44H16.1C9.7 44 4.5 38.8 4.5 32.4V15.6C4.5 12.5235 5.72214 9.57298 7.89756 7.39756C10.073 5.22214 13.0235 4 16.1 4ZM15.7 8C13.7904 8 11.9591 8.75857 10.6088 10.1088C9.25857 11.4591 8.5 13.2904 8.5 15.2V32.8C8.5 36.78 11.72 40 15.7 40H33.3C35.2096 40 37.0409 39.2414 38.3912 37.8912C39.7414 36.5409 40.5 34.7096 40.5 32.8V15.2C40.5 11.22 37.28 8 33.3 8H15.7ZM35 11C35.663 11 36.2989 11.2634 36.7678 11.7322C37.2366 12.2011 37.5 12.837 37.5 13.5C37.5 14.163 37.2366 14.7989 36.7678 15.2678C36.2989 15.7366 35.663 16 35 16C34.337 16 33.7011 15.7366 33.2322 15.2678C32.7634 14.7989 32.5 14.163 32.5 13.5C32.5 12.837 32.7634 12.2011 33.2322 11.7322C33.7011 11.2634 34.337 11 35 11ZM24.5 14C27.1522 14 29.6957 15.0536 31.5711 16.9289C33.4464 18.8043 34.5 21.3478 34.5 24C34.5 26.6522 33.4464 29.1957 31.5711 31.0711C29.6957 32.9464 27.1522 34 24.5 34C21.8478 34 19.3043 32.9464 17.4289 31.0711C15.5536 29.1957 14.5 26.6522 14.5 24C14.5 21.3478 15.5536 18.8043 17.4289 16.9289C19.3043 15.0536 21.8478 14 24.5 14ZM24.5 18C22.9087 18 21.3826 18.6321 20.2574 19.7574C19.1321 20.8826 18.5 22.4087 18.5 24C18.5 25.5913 19.1321 27.1174 20.2574 28.2426C21.3826 29.3679 22.9087 30 24.5 30C26.0913 30 27.6174 29.3679 28.7426 28.2426C29.8679 27.1174 30.5 25.5913 30.5 24C30.5 22.4087 29.8679 20.8826 28.7426 19.7574C27.6174 18.6321 26.0913 18 24.5 18Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
            <path d="M38.5 6H33.1H15.9H10.5C9.43913 6 8.42172 6.42143 7.67157 7.17157C6.92143 7.92172 6.5 8.93913 6.5 10V15.4V32.8V38C6.5 39.0609 6.92143 40.0783 7.67157 40.8284C8.42172 41.5786 9.43913 42 10.5 42H15.9H33.3H38.5C39.5609 42 40.5783 41.5786 41.3284 40.8284C42.0786 40.0783 42.5 39.0609 42.5 38V32.6V15.4V10C42.5 8.93913 42.0786 7.92172 41.3284 7.17157C40.5783 6.42143 39.5609 6 38.5 6ZM31.7 34L24.5 26.8L17.3 34L14.5 31.2L21.7 24L14.5 16.8L17.3 14L24.5 21.2L31.7 14L34.5 16.8L27.3 24L34.5 31.2L31.7 34Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
);
}
export default Footer;
