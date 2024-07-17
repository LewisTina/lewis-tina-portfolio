import React, { useContext, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";
import styles from './index.module.scss'
import Icon from "@/components/Icons";
import { useOutsideClick } from "@/components/hooks/outside_click";


export default function SwitchTheme() {
    
  const { theme, setTheme } = useTheme();
  const {t} = useTranslation("common")
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState<string | undefined>(undefined)
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => {if(isOpen) setIsOpen(false)});

  const handleChange = (value:'light' | 'dark' | 'system') => {
          setTheme(value)
    };

  const getIcon = (theme: string) => {
    const icons: any = {
      "system": "ComputerDesktopIcon",
      "light": "SunIcon",
      "dark": "MoonIcon"
    }
    return icons[theme] || "laptop"
  }

  useEffect(() => {
    setActiveTheme(theme)
  }, [theme])

  return (
    <div className={styles.themeMenu} ref={ref}>
      <div className={styles.preview}>
        <button 
          type="button"
          className="flex w-full items-center gap-x-1.5 rounded-md text-secondary px-3 py-2 text-sm font-semibold" id="theme-button" 
          onClick={() => {setIsOpen(!isOpen)}}>
          <Icon name={getIcon(activeTheme!)}/>
        </button>
      </div>
      

      {
        isOpen &&
        <div className={`${styles.menuButton} bg-white dark:bg-black`}>
          <div className="py-1" role="none">
            <button 
              className={`${styles.button} text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100`} 
              onClick={() => {handleChange('light')}}>
                <Icon name={getIcon('light')}/>
                {t('light')}
            </button>

            <button 
              className={`${styles.button} text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100`} 
              onClick={() => {handleChange('dark')}}>
                <Icon name={getIcon('dark')}/>
                {t('dark')}
            </button>

            <button 
              className={`${styles.button} text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100`} 
              onClick={() => {handleChange('system')}}>
                <Icon name={getIcon('system')}/>
                {t('system')}
            </button>

          </div>
        </div>
        }
</div>
  );
}