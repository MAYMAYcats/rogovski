'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import styles from '../styles/access.module.css';
import { Suspense } from 'react';
import { useTranslation } from "react-i18next";

const AccessPage: React.FC =() =>{
    const { t } = useTranslation('access');
    return(

    
    <section id="access">
        <Suspense fallback={<div>Loading...</div>}>
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
                            <h1 suppressHydrationWarning>
                                {t("contact")}
                            </h1>
                            <h2>03-6274-6670</h2>
                            <p suppressHydrationWarning>
                                {t("contactDetail")}
                            </p>
                        </div>
                        <div>
                            <h1 suppressHydrationWarning>
                            {t("openingTimes")}
                            </h1>
                            <div className={styles.weekdays}>
                                <p suppressHydrationWarning>{t("weekdays")}</p>
                                <p suppressHydrationWarning>{t("weekdaysLunch")}</p>
                                <p suppressHydrationWarning>{t("weekdaysDinner")}</p>
                            </div>
                            <div className={styles.weekends}>
                                <p suppressHydrationWarning>{t("weekends")}</p>
                                <p suppressHydrationWarning>{t("weekendsLunch")}</p>
                                <p suppressHydrationWarning>{t("weekendsDinner")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.midContainer}>
                        <div className={styles.addressContainer}>
                            <h2 suppressHydrationWarning>{t("address")}</h2>
                            <p suppressHydrationWarning>{t("addressDetail1")}</p>
                            <p suppressHydrationWarning>{t("addressDetail2")}</p>
                        </div>
                        <div className={styles.helpText}>
                            <a suppressHydrationWarning>{t("addressRemark")}</a>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.mapBox}>
                            <Image 
                                src="/access.png"
                                alt="accessrogovski"
                                width={590}
                                height={480}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.mobileMapBox}>
                            <Image 
                                src="/access.png"
                                alt="accessrogovski"
                                width={590}
                                height={480}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Suspense>
    </section>
);
};

export default AccessPage;