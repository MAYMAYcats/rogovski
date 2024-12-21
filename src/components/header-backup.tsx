'use client'; // Ensure this is a client-side component

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import '../app/styles/fonts.css';
import '../app/styles/globals.css';
import '../app/styles/header.css';

// Dynamically import the Link component with ssr: false
const ScrollLink = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

export default function Header() {
    const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false); // Toggle visibility of the language options
    const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'JP' | 'CN'>('EN'); // Track the selected language
  
    // Toggle language menu visibility
    const handleLanguageToggle = () => {
        setIsLanguageMenuVisible((prevState) => !prevState); // Toggle the language menu visibility
    };
  
    // Set selected language and close the menu
    const handleLanguageSelect = (language: 'EN' | 'JP' | 'CN') => {
        setSelectedLanguage(language); // Update the selected language
        setIsLanguageMenuVisible(false); // Close the language menu after selection
    };

    return (
        <div className="mainContainer">
            <div className="headContainer">
                <div className="headMenuContainer">
                    <nav>
                        <ul>
                            <div className="imgContainer">
                                <ScrollLink to="main" smooth={true} duration={500} offset={-120}>
                                    <Image
                                        src="/rogovsky.jpg"
                                        alt="rogovski"
                                        width={200}
                                        height={107}
                                        className="logo"
                                    />
                                </ScrollLink>
                            </div>

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
                                <ScrollLink to="gallery" smooth={true} duration={500} className="menuItem2">
                                    Online Shop
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="gallery" smooth={true} duration={500} className="menuItem3">
                                    Reserve
                                </ScrollLink>
                            </li>

                            {/* Language Selector */}
                            <div className="langContainer">
                                <div className="langBox">
                                    <div className="frame6" onClick={handleLanguageToggle}>
                                        <div className="langSelect">
                                            {selectedLanguage} {/* Show the selected language */}
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
                                    {/* Show language options when the menu is visible */}
                                    {isLanguageMenuVisible && (
                                        <div className="languageOptions">
                                            {/* Always show EN, hide only the selected language */}
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
                                            {selectedLanguage !== 'CN' && (
                                                <div
                                                    className="languageOption"
                                                    onClick={() => handleLanguageSelect('CN')}
                                                >
                                                    CN
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
        </div>
    );
}
