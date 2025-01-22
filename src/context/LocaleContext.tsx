// src/context/LocaleContext.tsx

import React, { createContext, useContext, useState } from 'react';

// 로케일 컨텍스트 생성
const LocaleContext = createContext('ja-JP');

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState('ja-JP'); // 일본어 로케일 기본 설정

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
