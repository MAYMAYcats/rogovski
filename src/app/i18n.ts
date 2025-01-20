// src/app/i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    lng: "en", // 기본 언어 설정
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 번역 파일 경로
    },
    ns: ["common", 'main', 'about', 'popup', 'menu', 'event', 'access', 'mosaic'], // 네임스페이스
    defaultNS: "common",
  });

export default i18next;
