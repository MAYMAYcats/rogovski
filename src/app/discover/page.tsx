"use client";

import '../styles/fonts.css';
import Image from 'next/image';
import styles from '../styles/discover.module.css';
import React, { useState } from 'react';

const DiscoverPage: React.FC = () => {
    // Track multiple open sections using an array
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const handleClick = (index: number) => {
        setOpenIndices((prevOpenIndices) => {
            // If index is already open, remove it (close the section)
            if (prevOpenIndices.includes(index)) {
                return prevOpenIndices.filter((i) => i !== index);
            }
            // If index is not open, add it (open the section)
            return [...prevOpenIndices, index];
        });
    };

    return (
        <section id="discover">
            {/*<Header />*/}
            <div className={styles.aContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleEn}>
                        Discover the Story Behind Our Dishes
                    </div>
                    <div className={styles.titleJp}>
                        料理の歴史
                    </div>
                </div>
                <div className={styles.firstContainer}>
                    <div className={styles.firstContent}>
                        <h2>
                            Would you like to learn how famous dishes like "Beef Stroganoff" or "Russian Tea" came to be? We will share with you the fascinating stories behind the creation of the legendary recipes from the Rogosky restaurant, which continue to captivate food lovers in Japan.
                        </h2>
                        <h2>
                            Embark on a culinary journey through traditions: discover "Rustic-style Borscht," a dish that has won hearts not only in Russia but far beyond its borders. Find out how chefs were inspired by authentic recipes to create unique flavors, and why these dishes remain popular to this day.   
                        </h2>
                    </div>
                    <div className={styles.firstPhoto}>
                        <Image 
                            className="discover1"
                            src="/discover1.png"
                            alt="discover1"
                            width={288}   // Fixed width
                            height={291}  // Fixed height
                        />
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.contentsGroup}>
                        {/* Section 1 */}
                        <div className={styles.mainContent}>
                            <div
                                className={`${styles.titles} ${openIndices.includes(0) ? styles.open : ''}`}
                                onClick={() => handleClick(0)}
                            >
                                <div className={styles.mainTitle}>
                                    The History of Pirozhki  (Russian Edition)
                                </div>
                                <div className={styles.arrowIcon}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ri:arrow-up-s-line">
                                            <path id="Vector" d="M11.9993 13.6007L16.9493 8.65071L18.3633 10.0647L11.9993 16.4287L5.63528 10.0647L7.04928 8.65071L11.9993 13.6007Z" fill="black"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.sepLine}></div>
                            <div className={`${styles.content} ${openIndices.includes(0) ? styles.open : ''}`}>
                                <div className={styles.contentText}>
                                    <div className={styles.contentBox}>
                                        <p>The founder, Midori Nagaya, who started the business in the 1940s, was stationed in Manchuria as a military officer. It was also a town inhabited by exiled Russians.</p>
                                        <p>One of his assignments was "researching food in cold regions," and combined with his natural passion for gourmet food, he visited numerous Russian restaurants and homes to eat. This experience led to the opening of Rogovsky after the war.</p>
                                        <p>Although Midori knew the taste of the dishes, he had never made them himself. His wife, Miyo, was responsible for cooking. Miyo learned Russian and ordered original Soviet cookbooks, going through trial and error with great effort to create Rogovsky's signature pirozhki.</p>
                                    </div>
                                    <h3>1/1</h3>
                                </div>
                                <div className={styles.contentPhoto}>
                                    <Image 
                                        className="discover2"
                                        src="/discover2.png"
                                        alt="discover2"
                                        width={435}
                                        height={440}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className={styles.mainContent}>
                            <div
                                className={`${styles.titles} ${openIndices.includes(1) ? styles.open : ''}`}
                                onClick={() => handleClick(1)}
                            >
                                <div className={styles.mainTitle}>
                                    Beef Stroganoff
                                </div>
                                <div className={styles.arrowIcon}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ri:arrow-up-s-line">
                                            <path id="Vector" d="M11.9993 13.6007L16.9493 8.65071L18.3633 10.0647L11.9993 16.4287L5.63528 10.0647L7.04928 8.65071L11.9993 13.6007Z" fill="black"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.sepLine}></div>
                            <div className={`${styles.content} ${openIndices.includes(1) ? styles.open : ''}`}>
                                <div className={styles.contentText}>
                                    <div className={styles.contentBox}>
                                        <p>Long ago, during the opulent Romanov era, it is said that a chef in the service of the Stroganoff family created a dish by stewing beef for his master, who had bad teeth (though there are various theories).</p>
                                        <p>This may have been one reason for the creation of the dish, but a significant factor was that the chef was French.</p>
                                        <p>At that time, many Russian emperors and aristocrats employed French chefs, who introduced the latest culinary trends.</p>
                                    </div>
                                    <h3>1/1</h3>
                                </div>
                                <div className={styles.contentPhoto}>
                                    <Image 
                                        className="discover3"
                                        src="/discover3.png"
                                        alt="discover3"
                                        width={435}
                                        height={440}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Section 3 */}
                        <div className={styles.mainContent}>
                            <div
                                className={`${styles.titles} ${openIndices.includes(2) ? styles.open : ''}`}
                                onClick={() => handleClick(2)}
                            >
                                <div className={styles.mainTitle}>
                                    Herring in a Fur Coat
                                </div>
                                <div className={styles.arrowIcon}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ri:arrow-up-s-line">
                                            <path id="Vector" d="M11.9993 13.6007L16.9493 8.65071L18.3633 10.0647L11.9993 16.4287L5.63528 10.0647L7.04928 8.65071L11.9993 13.6007Z" fill="black"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.sepLine}></div>
                            <div className={`${styles.content} ${openIndices.includes(2) ? styles.open : ''}`}>
                                <div className={styles.contentText}>
                                    <div className={styles.contentBox}>
                                        <p>This salad, made by layering herring, potatoes, boiled eggs, carrots, and beets, all mixed separately with mayonnaise or sour cream, has an interesting origin story.</p>                                        
                                        <p>It was New Year's Eve in 1918, a turbulent time just after the Russian Revolution and before the birth of the Soviet Union, at a restaurant in Moscow. The restaurant was often filled with drunk customers engaged in political debates, which frequently led to fights.</p>                                      
                                        <p> Each time, furniture was broken, dishes were shattered, and many people were injured.</p>
                                    </div>
                                    <h3>1/1</h3>
                                </div>
                                <div className={styles.contentPhoto}>
                                    <Image 
                                        className="discover3"
                                        src="/discover3.png"
                                        alt="discover3"
                                        width={435}
                                        height={440}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Section 4 */}
                        <div className={styles.mainContent}>
                            <div
                                className={`${styles.titles} ${openIndices.includes(3) ? styles.open : ''}`}
                                onClick={() => handleClick(3)}
                            >
                                <div className={styles.mainTitle}>
                                Russian black tea
                                </div>
                                <div className={styles.arrowIcon}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ri:arrow-up-s-line">
                                            <path id="Vector" d="M11.9993 13.6007L16.9493 8.65071L18.3633 10.0647L11.9993 16.4287L5.63528 10.0647L7.04928 8.65071L11.9993 13.6007Z" fill="black"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.sepLine}></div>
                            <div className={`${styles.content} ${openIndices.includes(3) ? styles.open : ''}`}>
                                <div className={styles.contentText}>
                                    <div className={styles.contentBox}>
                                        <p>Let me introduce the origins of what is now called "Russian Tea" (Roshian Tea) in Japan. This is a unique expression in Japan, and it seems that the Rogovsky menu is the source of this term.</p>
                                        <p>The following is an excerpt from the section on "Ruskii Chai (Russian Tea)" in Standard Russian Cuisine (Shibata Shoten, Showa 39), written by Miyo Nagaya, Rogovsky's first head chef:</p>
                                        <p>"In the Soviet Union, it is not actually called Ruskii Chai, but I named it this for convenience. You won’t find it served in restaurants, but you often encounter this kind of tea when visiting farms or rural households."
                                        The “this kind of tea” she refers to is tea mixed with jam, honey, or fruit liqueur—exactly the style of tea served at Rogovsky. </p>
                                   </div>
                                    <h3>1/1</h3>
                                </div>
                                <div className={styles.contentPhoto}>
                                    <Image 
                                        className="discover4"
                                        src="/discover4.png"
                                        alt="discover4"
                                        width={435}
                                        height={440}
                                    />
                                </div>
                            </div>
                        </div>
                          {/* Section 5 */}
                          <div className={styles.mainContent}>
                            <div
                                className={`${styles.titles} ${openIndices.includes(4) ? styles.open : ''}`}
                                onClick={() => handleClick(4)}
                            >
                                <div className={styles.mainTitle}>
                                Countryside-style Borscht
                                </div>
                                <div className={styles.arrowIcon}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ri:arrow-up-s-line">
                                            <path id="Vector" d="M11.9993 13.6007L16.9493 8.65071L18.3633 10.0647L11.9993 16.4287L5.63528 10.0647L7.04928 8.65071L11.9993 13.6007Z" fill="black"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.sepLine}></div>
                            <div className={`${styles.content} ${openIndices.includes(4) ? styles.open : ''}`}>
                                <div className={styles.contentText}>
                                    <div className={styles.contentBox}>
                                        <p>"There isn't a specific 'countryside-style' borscht, but this is a type that was often served when I was invited to White Russian farmers' homes in the past. I added some of my own twists, and it is now what we serve at Rogovsky.</p>
                                        <p>The meat and vegetables are cut into large chunks and served simply, making it a hearty and nutritious dish. If I had to name it, I would call it 'countryside-style.'"</p>
                                        <p>At Rogovsky, we make two types of borscht:</p>
                                   </div>
                                    <h3>1/1</h3>
                                </div>
                                <div className={styles.contentPhoto}>
                                    <Image 
                                        className="discover5"
                                        src="/discover5.png"
                                        alt="discover5"
                                        width={435}
                                        height={440}
                                    />
                                </div>
                            </div>
                        </div>
                          {/* Section 4 */}
                          <div className={styles.mainContent}>
                            <div
                                className={`${styles.titles} ${openIndices.includes(5) ? styles.open : ''}`}
                                onClick={() => handleClick(5)}
                            >
                                <div className={styles.mainTitle}>
                                    Imperial Wine "Abrau-Durso"
                                </div>
                                <div className={styles.arrowIcon}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ri:arrow-up-s-line">
                                            <path id="Vector" d="M11.9993 13.6007L16.9493 8.65071L18.3633 10.0647L11.9993 16.4287L5.63528 10.0647L7.04928 8.65071L11.9993 13.6007Z" fill="black"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.sepLine}></div>
                            <div className={`${styles.content} ${openIndices.includes(5) ? styles.open : ''}`}>
                                <div className={styles.contentText}>
                                    <div className={styles.contentBox}>
                                        <p>On the centennial of the Russian Revolution, we reflect on the wine Abrau-Durso, made for the Russian emperor and his family since 1870. Emperor Alexander II's wish was to create a wine that surpassed French champagne, and the result was a truly remarkable wine.</p>
                                        <p>However, after the Russian Revolution, during the Soviet era, the wine's name changed to "Soviet Champagne," becoming "wine for the people." Throughout this turbulent period, the conditions for winemaking were far from ideal.</p>
                                        <p>With the collapse of the Soviet Union, a new era began. Resources, people, and the environment were once again aligned, allowing this "imperial wine" to once more be enjoyed by the people as "the people's wine."</p>                                   
                                    </div>
                                    <h3>1/1</h3>
                                </div>
                                <div className={styles.contentPhoto}>
                                    <Image 
                                        className="discover4"
                                        src="/discover4.png"
                                        alt="discover4"
                                        width={435}
                                        height={440}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverPage;
