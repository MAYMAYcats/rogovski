'use client'; // This tells Next.js to treat this file as a client-side component


import Image from 'next/image';
import '../styles/globals.css';
import styles from '../styles/event.module.css';
import Header from '@/components/header';
import Bottom from '@/components/bottom';

const EventPage: React.FC =() =>(
  <section id="event">
    <Header/>
    <div className="container">
      <div className="contextContainer">
        <div className="leftContext">
          <div className="title">
            <div className="titleEn">
              Event
            </div>
            <div className="titleJp">
              イベント
            </div>
          </div>
          <div className="subTitle">
            <h1>Rogovsky Russian Delicacies in Tokyo</h1>
          </div>
          <div className="detail1">
            <p>
                We will be opening stores mainly in department stores in Tokyo for a limited time.
            </p>
          </div>
          <div className="detail2">
            <p>
                Popular dishes such as piroshki, borsch, and beef stroganoff, which are also familiar from our restaurant, will be available to take home freshly cooked
            </p>
          </div>
          <div className={styles.eventListContainer}>
            <div className={styles.eventList}>
              <a>
                7/4 (Thu) - 7/10 (Wed)
              </a>
              <a>
                Futako Tamagawa Rise Tokyu Food Show B1
              </a>
            </div>

            <div className={styles.eventList}>
              <a>
                  8/22 (Thu) - 8/28 (Wed) 
              </a>
              <a>
                  Hiyoshi Tokyu Avenue 1F (Food Event Hall) 
              </a>
            </div>

            <div className={styles.eventList}>
              <a>
                  9/26 (Thu) - 10/2 (Wed)
              </a>
              <a>
                  Futako Tamagawa Rise Tokyu Food Show B1
              </a>
            </div>

            <div className={styles.eventList}>
              <a>
                  10/10 (Thu) - 10/16 (Wed)
              </a>
              <a>
                  Shibuya Tokyu Food Show B1 (This Week 3/Shibuchika)
              </a>
            </div>

            <div className={styles.eventList}>
              <a>
                  10/17 (Thu) - 10/23 (Wed)
              </a>
              <a>
                  Tokyu Department Store Tama Plaza B1 (This Week 1)
              </a>
            </div>

            <div className={styles.eventList}>
              <a>
                  10/23 (Wed) - 10/29 (Tue)
              </a>
              <a>
                  Nihonbashi Mitsukoshi Main Building B1 (Food Collection)
              </a>
            </div>
            <div className={styles.watchAllEvent}>
              <p className={styles.watchAllEventText}>
                Watch All Event
              </p>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileImageBox}>
        <Image 
                src="/event2.png"
                alt="eventrogovski"
                layout="responsive"
                width={590}   // Fixed width
                height={508} 
                objectFit='cover'
        />
        </div>
        <div className="rightContext">
          <div className={styles.imageBox}>
            <Image 
                src="/event2.png"
                alt="eventrogovski"
                width={590}   // Fixed width
                height={508} 
                objectFit='cover'
                //style={{ objectFit: 'contain' }} 
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
  </section>
);

export default EventPage;