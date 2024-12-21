import '../app/styles/fonts.css';

import '../app/styles/main.module.css';
import MainPage from './main/page';
import AboutPage from './about/page';
import PopupPage from './popup/page';
import GalleryPage from './gallery/page';
import AccessPage from './access/page';
import EventPage from './event/page';
import MenuPage from './menu/page';
import NewsPage from './news/page';
import FooterPage from './footer/page';
import AnimationPage from './animation/page';


export default function Home() {
  return (
    <>
      <MainPage/>
      <AboutPage/>
      <PopupPage/>
      <MenuPage/>
      <EventPage/>
      <GalleryPage/>
      <NewsPage/>
      <AccessPage/>
      <AnimationPage/>
      <FooterPage/>

    </>
    
  );
}
