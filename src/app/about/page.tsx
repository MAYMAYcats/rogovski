import Image from 'next/image';
import '../styles/globals.css';
import styles from '../styles/about.module.css';

const AboutPage: React.FC =() =>(
  <section id="about">
    <div className="container">
    <div className="contextContainer">
      <div className="leftContext">
        <div className="title">
          <div className="titleEn">
            About
          </div>
          <div className="titleJp">
            ロゴスキーについて
          </div>
        </div>
        <div className="subTitle">
          <h1>Rogovski – Where People and Flavors Meet</h1>
        </div>
        <div className="detail1">
          <p>
            Since 1951, Rogovski has been Japan’s first and most beloved Russian restaurant. It’s a place where families, friends, and colleagues come together to enjoy simple, heartfelt meals. Our dishes bring the warmth and comfort of home, blending the culinary traditions of Russia, Ukraine, Georgia, and beyond.
          </p>
          <p className="detail2">
            Rogovsky is a place where it feels good to spend time, share stories, and create new memories. We welcome every guest, whether it’s your first visit or you’re a regular.
          </p>
        </div>

        <div className={styles.viewAllStories}>
          <p className={styles.viewAllStoriesText}>
            View All Stories
          </p>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" /*</div>width="24" height="24"*/ viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.7305 12L15.7657 18.9664L14.6329 17.8352L19.6681 12.8H1.59927V11.2H19.6681L14.6329 6.16637L15.7657 5.03357L22.7305 12Z" fill="#E2483D"/>
            </svg>
          </div>
        </div>
        <div className={styles.mobileImageBox2}>
            <Image 
                src="/about-mobile.png"
                alt="mobile-rogovski"
                layout="responsive"
                width={321}
                height={205}
                objectFit='cover'
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
              objectFit='cover'

            />
          </div>
          <div className={styles.imageBox2}>
            <Image 
                src="/about-4.png"
                alt="maain-rogovski"
                width={330}
                height={474}
                objectFit='cover'
              />
          </div>
          <div className={styles.imageBox3}>
            <Image 
                src="/about-2.png"
                    
                alt="maain-rogovski"
                width={110}
                height={243}
                objectFit='cover'
              />
          </div>
          <div className={styles.imageBox4}>
            <Image 
                src="/about-3.jpeg"
                alt="maain-rogovski"
                width={110}
                height={129}
                objectFit='cover'
              />
          </div>
          <div className={styles.imageBox5}>
            Gallery
          </div>
        </div>
        <div className={styles.history}>
          1951-2024
        </div>

      </div>

    </div>

    </div>
  </section>
);

export default AboutPage;