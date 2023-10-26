import useTranslation from "next-translate/useTranslation"
import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import CustomButton from "../button"
import Image from "next/image"

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['500'],
      display: 'swap',
    }
  )

const focus = ["web_dev", "ui_design", "mobile_dev", "branding", "seo", "graphic_design"]

export default function About(props: any){
    const {t} = useTranslation('common')
    const actualYear = parseFloat((new Date().getFullYear()).toString())
    return(
        <section className="w-full relative overflow-hidden -top-32 md:top-0" id="about">
            <div className="bg-primary py-4 px-16 xl:px-4 mt-20 md:mt-0 relative -left-8 md:-left-2 w-[calc(100%+4rem)] md:w-[calc(100%+1rem)] rotate-[-3.15deg] md:rotate-0 flex justify-start md:flex-wrap text-white">
                <div className=" flex md:flex-wrap max-w-[1535px] md:max-w-full ">
                
                <div className="px-20 flex lg:px-6 md:px-0">
                    <p className="px-4 py-1 border-r-2 border-white">
                        <span className="block text-base leading-4 capitalize">
                            {t('since')}
                        </span>

                        <span className="block text-2xl leading-6">
                            2020
                        </span>
                    </p>
                    <p className={`px-4 py-1 ${dm_sans.className}`}>
                        <span className="block text-base capitalize whitespace-pre-line">
                            {t('experience_count', {counter: (actualYear - 2020)})}
                        </span>
                    </p>
                </div>

                <div className="overflow-hidden flex items-center md:my-4">
                    <ul className={`marquee capitalize text-xl ${style.aboutMarquee}`}>
                        <li>{t('creative')}</li>
                        <li className="mx-10">·</li>
                        <li>{t('rigorous')}</li>
                        <li className="mx-10">·</li>
                        <li>{t('attentive')} </li>
                        <li className="mx-10">·</li>
                        <li>{t('demanding')}</li>
                        <li className="mx-10">·</li>
                        <li>{t('professional')} </li>
                        <li className="mx-10">·</li>
                        <li className="mr-5">{t('concerned')}</li>
                    </ul>
                    <ul className={`marquee capitalize text-xl ${style.aboutMarquee}`}>
                        <li>{t('creative')}</li>
                        <li className="mx-10">·</li>
                        <li>{t('rigorous')}</li>
                        <li className="mx-10">·</li>
                        <li>{t('attentive')} </li>
                        <li className="mx-10">·</li>
                        <li>{t('demanding')}</li>
                        <li className="mx-10">·</li>
                        <li>{t('professional')} </li>
                        <li className="mx-10">·</li>
                        <li>{t('concerned')}</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex justify-between lg:items-start px-16 md:px-4 lg:px-6 lg:my-8 md:my-0 md:flex-col max-w-[1535px] w-full">
                    <div className="w-96 my-6 flex flex-col select-none after:block after:absolute after:-inset-1 after:bg-gradient-white after:dark:bg-gradient-darkest relative -z-10">
                        <span className="text-7xl lg:text-6xl md:text-5xl block text-light-grey dark:text-light-grey/25">Web & <br/> Mobile</span>  
                        <span className="text-7xl lg:text-6xl md:text-5xl block text-secondary">Dev</span>  
                    </div>

                    <div className="mx-8 md:my-4 lg:mx-6"></div>

                    <div className="text-darkest dark:text-white">
                        <h2 className="text-4xl capitalize mt-10 md:mt-0">
                            {t('about_me')}
                        </h2>
                        <p className={`py-2 ${dm_sans.className} whitespace-pre-line text-justify word-spacing`}>
                            {t('about_lewis')}
                        </p>

                        <a href="https://www.factauto.com/" target="_blank">
                        <CustomButton 
                            rightIcon={
                                <span className="material-symbols-outlined pl-4">arrow_outward</span>
                            }
                            bgColor={"bg-primary"} 
                            color={"text-white"} 
                            label={t("try_factauto")} 
                            action={undefined}/>
                        </a>
                    </div>
                </div>

                <div className="flex justify-between items-center md:items-start my-8 px-16 md:px-4 lg:px-6 lg:my-8 md:flex-col-reverse max-w-[1535px] w-full">
                    <div className="max-w-[50rem] text-darkest dark:text-white lg:max-w-[30rem] md:max-w-full md:mt-8">
                        <h2 className="text-4xl capitalize">
                            {t('my_focus')}
                        </h2>
                        <p className={`py-3 ${dm_sans.className} whitespace-pre-line text-justify word-spacing`}>
                            {t('focus_text')}

                            <span className="flex flex-wrap py-2">
                                {
                                    focus.map((element: any, idx: number)=> {
                                        return(
                                            <span className="mr-3 my-2 px-6 py-1 capitalize rounded-full bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl" key={idx}>
                                                {t(element)}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </p>
                    </div>
                    
                    <div className="mx-8 lg:mx-6"></div>

                    <span>
                        
                    <Image 
                        src={"/geek_apple_memoji.svg"} 
                        alt={'geek memoji'}
                        width={345.55}
                        height={281.77}
                        />
                    </span>


                </div>
            </div>

        </section>
    )
}