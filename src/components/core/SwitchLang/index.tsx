import React, { useContext, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import style from './index.module.scss'


export default function SwitchLang() {
    
  const {t} = useTranslation("common")
  const [isOpen, setIsOpen] = useState(false)
  const [activeLang, setActiveLang] = useState<string>("fr")
  const handleChange = (value:'fr' | 'en') => {
      setActiveLang(value)
    };

  useEffect(()=> {
    if(isOpen == true){
      var elem = document.getElementById("lang-menu");
      if(typeof elem !== 'undefined' && elem !== null) {
        window.addEventListener('click', function(e){   
          if (!(elem!.contains(e.target as HTMLElement))){
              setIsOpen(false)
          } 
        });
      }
    }
})


  return (
    <div className={`relative inline-block text-left ${style.langMenu}`} style={{textTransform: "capitalize"}} id="lang-menu">
      <div className={style.preview}>
        <button 
          type="button"
          className="flex w-full items-center gap-x-1.5 rounded-md text-darkest dark:text-white px-3 py-2 text-xs font-semibold" id="menu-button" 
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {setIsOpen(!isOpen)}}>
            {activeLang}
        </button>
      </div>
      

      {
        isOpen &&
        <div className={`absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${style.menuButton}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1" role="none">
            <button 
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100 flex w-full items-center px-4 py-2 text-sm " 
              role="menuitem" 
              id="menu-item-0"
              onClick={() => {handleChange('fr')}}>
                {t('fr')}
            </button>

            <button 
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100 flex w-full items-center px-4 py-2 text-sm" 
              role="menuitem" 
              id="menu-item-1"
              onClick={() => {handleChange('en')}}>
                {t('en')}
            </button>

          </div>
        </div>
        }
</div>
  );
}