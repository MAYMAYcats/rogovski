'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import '../app/styles/fonts.css';
import '../app/styles/header.css';
import { useTranslation } from "react-i18next";


const ScrollLink = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });


export default function Header() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language.toUpperCase());

    const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false); 


    useEffect(() => {
        setSelectedLanguage(i18n.language.toUpperCase());
      }, [i18n.language]);

      const handleLanguageSelect = (lang: string) => {
        i18n.changeLanguage(lang.toLowerCase());
        setSelectedLanguage(lang);
        setIsLanguageMenuVisible(false);
      };
    
    const handleLanguageToggle = () => {
        setIsLanguageMenuVisible((prevState) => !prevState);
    };


    const toggleMobileMenu = () => {
        setIsMobileMenuVisible((prev) => !prev);

        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.classList.toggle('open');
        }
    };

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    };

    return (
            <div className="headContainer">
                <div className="headMenuContainer">
                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <nav className={`menu ${isMobileMenuVisible ? 'visible' : ''}`}>
                        <ul className="mobileMenuList">
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('main')}>Main</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('about')}>About</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('menu')}>Menu</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('event')}>Event</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('gallery')}>Gallery</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('news')}>News</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('access')}>Access</button>
                            </li>
                            <li>
                                <button className="mobileButton" onClick={() => handleScroll('gallery')}>Reserve</button>
                            </li>
                        </ul>
                        <div className="imgContainer">
                            <ScrollLink to="main" smooth={true} duration={500} offset={-120}>
                                <Image
                                    src="/rogovsky.jpg"
                                    alt="rogovski"
                                    width={200}
                                    height={107}
                                    className="pcLogo"
                                />
                            </ScrollLink>
                        </div>
                        
                        <ul className="menuList">
                            <li>
                                <ScrollLink to="about" smooth={true} duration={500} offset={-120} className="menuItem">
                                  About
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="menu" smooth={true} offset={-120} className="menuItem">
                                    Menu
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="event" smooth={true} offset={0} className="menuItem">
                                    Event
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="gallery" smooth={true} offset={0} className="menuItem">
                                    Gallery
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="news" smooth={true} duration={500} className="menuItem">
                                    News
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="access" smooth={true} duration={500} offset={100} className="menuItem">
                                    Access
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="gallery" smooth={true} duration={500} offset={100} className="menuItem">
                                    <span className="menuItem1">Online Shop</span>
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="gallery" smooth={true} duration={500} offset={100} className="menuItem">
                                <span className="menuItem2">Reserve</span>
                                </ScrollLink>
                            </li>

                            {/* Language Selector */}
                            <div className="langContainer">
                                <div className="langBox">
                                    <div className="frame6" onClick={handleLanguageToggle}>
                                        <div className="langSelect">
                                            {selectedLanguage} 
                                        </div>
                                        <div className="symbol">
                                            <Image
                                                src="/material-symbols_arrow-forward-ios.svg"
                                                alt="Arrow Forward"
                                                width={12}
                                                height={12}
                                            />
                                        </div>
                                    </div>

                                    {isLanguageMenuVisible && (
                                        <div className="languageOptions">
                                          
                                            {selectedLanguage !== 'EN' && (
                                                <div
                                                    className="languageOption"
                                                    onClick={() => handleLanguageSelect('EN')}
                                                >
                                                    EN
                                                </div>
                                            )}
                                            {selectedLanguage !== 'JP' && (
                                                <div
                                                    className="languageOption"
                                                    onClick={() => handleLanguageSelect('JP')}
                                                >
                                                    JP
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </ul>
     
                    </nav>
                </div>
            </div>

    );
}
