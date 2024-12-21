'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import '../styles/globals.css';
import styles from '../styles/access.module.css';

const AccessPage: React.FC =() =>(
    <section id="access">
        <div className="container">
            <div className={styles.contextContainer}>
                <div className="leftContext">
                    <div className="title">
                        <div className="titleEn">
                            Access 
                        </div>
                        <div className="titleJp">
                            アクセス
                        </div>
                    </div>
                </div>
                <div className={styles.contentsContainer}>
                    <div className={styles.leftContainer}>
                        <div>
                            <h1>
                                Contact:
                            </h1>
                            <h2>03-6274-6670</h2>
                            <p>
                                Please contact the store for details 
                                on closing days for the New Year 
                                holidays (December 31st, January 1st) and each month.
                            </p>
                        </div>
                        <div>
                            <h1>
                            Opening times:
                            </h1>
                            <div className={styles.weekdays}>
                                <h2>Weekdays (Monday to Friday) </h2>
                                <p>Lunch | 11:00 - 16:00 (LO.15:00) </p>
                                <p>Dinner | 17:00 - 22:00 (LO.21:00) </p>
                            </div>
                            <div className={styles.weekends}>
                                <h2>Weekdays (Monday to Friday) </h2>
                                <p>Lunch | 11:00 - 16:00 (LO.15:00) </p>
                                <p>Dinner | 17:00 - 22:00 (LO.21:00) </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.midContainer}>
                        <div className={styles.addressContainer}>
                            <h1>Address:</h1>
                            <h2>5-7-10 Ginza, Chuo-ku, Tokyo Ginza EXITMELSA 7F </h2>
                            <p>1 minute from the station! A glamorous location facing Ginza Chuo-dori. 
                            The location facing the world-famous main street, Ginza Chuo-dori, will add to your glamorous mood.</p>
                            <p> And it's just a 1-minute walk from Ginza Station's A2 exit! It's conveniently close in any weather, so even the elderly can feel at ease. </p>
                        </div>
                        <div className={styles.helpText}>
                            <a>*The photo shows Ginza Chuo-dori in pedestrian precinct on the weekend.</a>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.mapBox}>
                            <Image 
                                src="/access.png"
                                alt="accessrogovski"
                                width={590}
                                height={480}
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.mobileMapBox}>
                            <Image 
                                src="/access.png"
                                alt="accessrogovski"
                                width={590}
                                height={480}
                                objectFit="cover"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AccessPage;