'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import '../styles/globals.css';
import styles from '../styles/news.module.css';

const NewsPage: React.FC =() =>(
    <section id="news">
        <div className="container">
        <div className={styles.contextContainer}>
            <div className="leftContext">
                <div className="title">
                    <div className="titleEn">
                        News
                    </div>
                    <div className="titleJp">
                        ニュース
                    </div>
                </div>
            </div>

            <div className={styles.ContentsContainer}>
                <div className={styles.newsImage}>
                    <Image 
                        className={styles.newsImg1}
                        src="/news-img.png"
                        alt="news1"
                        width={222}   // Fixed width
                        height={240}  // Fixed height
                    />
                    <div className={styles.newsContents}>
                        <a className={styles.newsDate}>
                            09.10.2024
                        </a>
                        <a className={styles.newsTitle}>
                            Event store information
                        </a>
                        <a className={styles.newsDetails}>
                            Event store information has been updated
                        </a>
                    </div>
                </div>
                <div className={styles.newsImage}>
                    <Image 
                        className={styles.newsImg1}
                        src="/news-img.png"
                        alt="news1"
                        width={222}   // Fixed width
                        height={240}  // Fixed height
                    />
                    <div className={styles.newsContents}>
                        <a className={styles.newsDate}>
                            09.10.2024
                        </a>
                        <a className={styles.newsTitle}>
                            Event store information
                        </a>
                        <a className={styles.newsDetails}>
                            Event store information has been updated
                        </a>
                    </div>
                </div>
                <div className={styles.newsImage}>
                    <Image 
                        className={styles.newsImg1}
                        src="/news-img.png"
                        alt="news1"
                        width={222}   // Fixed width
                        height={240}  // Fixed height
                    />
                    <div className={styles.newsContents}>
                        <a className={styles.newsDate}>
                            09.10.2024
                        </a>
                        <a className={styles.newsTitle}>
                            Event store information
                        </a>
                        <a className={styles.newsDetails}>
                            Event store information has been updated
                        </a>
                    </div>
                </div>
</div>
            </div>
        </div>
    </section>
);

export default NewsPage;