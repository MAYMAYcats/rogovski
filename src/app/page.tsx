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
import i18n from './i18n'; // Import your i18n configuration here
/*
import { useLocale } from '@/context/LocaleContext'; // Context에서 로케일 가져오기
import { format } from 'date-fns';
import { ja } from 'date-fns/locale'; // 일본어 로케일 가져오기
*/

export default function Home() {
  
  /*const [formattedDate, setFormattedDate] = useState<string | null>(null); // State to store formatted date*/

  useEffect(() => {
    i18n.changeLanguage('en'); // Set the default language, e.g., 'en' for English

    // Only format the date after hydration to avoid mismatch during SSR
    const date = new Date();
    //const formatted = format(date, 'yyyy/MM/dd', { locale: ja });
   // setFormattedDate(formatted); // Set the formatted date
  }, []); // Run this effect only once after the component mounts

  //const { locale } = useLocale(); // 컨텍스트에서 로케일 가져오기


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
