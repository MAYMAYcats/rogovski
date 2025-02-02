'use client';

import '../app/styles/global.css';
import '../app/styles/main.module.css';
import MainPage from './main/page';
import AboutPage from './about/page';
import PopupPage from './popup/page';
import AccessPage from './access/page';
import EventPage from './event/page';
import MenuPage from './menu/page';
import NewsPage from './news/page';
import FooterPage from './footer/page';
import MosaicPage from './mosaic/page';
import GallerySection from './gallery/page';
import Header from '@/components/header';
import ScrollIcon from './scrollicon/page'

import { useEffect } from 'react';
import i18n from './i18n'; 
import { appWithTranslation } from 'next-i18next';


function Home() {
  

  useEffect(() => {
    i18n.changeLanguage('en'); // Set the default language, e.g., 'en' for English
  }, []); 
  return (
    <>

      <Header />

      <MainPage />
      <ScrollIcon />
      <AboutPage />
      <PopupPage />
      <MenuPage />
      <EventPage />
      <GallerySection />
      <NewsPage />
      <AccessPage />
      <MosaicPage />
      <FooterPage />

    </>
  );
}

export default appWithTranslation(Home);