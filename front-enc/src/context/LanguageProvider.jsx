import React, { useState } from 'react'
import LanguageContext  from '../Context/LanguageContext';

const LanguageProvider = ({childern}) => {
    const [language,setLanguage] = useState(en);
    const changeLanguage = (lang) =>
        setLanguage(lang);
  return (
    <LanguageContext.provider value={{language,changeLanguage}}>
        {childern}
    </LanguageContext.provider>
    
   
  )
}

export default LanguageProvider