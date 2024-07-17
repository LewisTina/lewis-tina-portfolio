import useTranslation from "next-translate/useTranslation"
import styles from './about.module.scss'
import CustomButton from "../button"
import Image from "next/image"
import { useMarquee } from "../hooks/use_marquee"

const focus = ["web_dev", "ui_design", "mobile_dev", "branding", "seo", "graphic_design"]

export default function About(){
    const {t} = useTranslation('common')
    const actualYear = parseFloat((new Date().getFullYear()).toString())
    const {ref, count} = useMarquee(2000)

    return(
        <section className="w-full relative overflow-x-clip-overflow-y-visible -top-10" id="about">
            <div className={`bg-primary text-white shadow-[0px_7px_29px_0px] shadow-[rgba(0,0,0,0.3)] relative flex py-4 pl-10 -left-8 w-[calc(100%+4rem)] rotate-[3.15deg]`}>
               <div className="flex w-full items-center max-w-[1536px] mx-auto divide-x-2">
                    <p className="px-5 py-1 capitalize dela-gothic-one text-title leading-none">
                        {t('since')} 2020
                    </p>
                    <p className={`px-5 py-1 text-base whitespace-pre-line`}>
                        {t('experience_count', {counter: (actualYear - 2020)})}
                    </p>
               </div>
            </div>

            <div ref={ref} className="bg-primary shadow-[0px_7px_29px_0px] shadow-[rgba(0,0,0,0.3)] py-4 relative -left-4 w-[calc(100%+2rem)] rotate-[-3.15deg] flex justify-start text-white">
                <div className={`overflow-hidden flex md:my-4 dela-gothic-one text-title ${styles.marqueeFrame}`}>
                    <div className={`flex gap-12 w-fit items-center marquee`}>
                        {
                             Array.from(new Array(count),(e, i) => {
                                return (
                                    <ul className={`uppercase ${styles.aboutMarquee}`} key={`marquee${i}`}>
                                        <li>{t('creative')}</li>
                                        <li>{t('rigorous')}</li>
                                        <li>{t('attentive')} </li>
                                        <li>{t('demanding')}</li>
                                        <li>{t('professional')} </li>
                                        <li>{t('concerned')}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="flex gap-16 flex-col items-center justify-start w-full px-10 md:px-4 lg:px-6">
                <div className="flex gap-16 justify-between lg:items-start md:my-0 md:flex-col max-w-[1535px] w-full">
                    <div className="dela-gothic-one text-[max(4rem,min(6.5vw,7rem))] leading-none flex flex-col select-none after:block after:absolute after:-inset-1 after:bg-gradient-white after:dark:bg-gradient-darkest relative -z-10">
                        <span className="block text-light-grey dark:text-light-grey/25">Web & <br/> Mobile</span>  
                        <span className="block text-secondary">Dev</span>  
                    </div>

                    <div className="text-darkest dark:text-white">
                        <h2 className="text-title capitalize mt-10 mb-4 md:mt-0">
                            {t('about_me')}
                        </h2>
                        <p className={`py-2 whitespace-pre-line text-justify word-spacing`}>
                            {t('about_lewis')}
                        </p>

                        <a href="https://www.factauto.com/" target="_blank" className="dela-gothic-one w-fit flex">
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

                <div className="flex justify-between items-center md:items-start md:flex-col-reverse max-w-[1535px] w-full">
                    <div className="max-w-[50rem] text-darkest dark:text-white lg:max-w-[30rem] md:max-w-full md:mt-8">
                        <h2 className="text-title capitalize">
                            {t('my_focus')}
                        </h2>
                        <p className={`py-3  whitespace-pre-line text-justify word-spacing`}>
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