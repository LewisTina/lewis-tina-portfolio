import useTranslation from "next-translate/useTranslation"
import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import CustomButton from "../button"
import Image from "next/image"

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['500']
    }
  )

const focus = ["web_dev", "mobile_dev", "graphic_design", "branding", "ui_design", "seo"]

export default function About(props: any){
    const {t} = useTranslation('common')
    const actualYear = parseFloat((new Date().getFullYear()).toString())
    return(
        <section className="w-full relative overflow-hidden -top-32" id="about">
            <div className="bg-primary py-4 px-16 mt-20 relative -left-8 w-[calc(100%+4rem)] rotate-[-3.15deg] flex text-white">
                <div className="px-20 flex">
                    <p className="px-4 py-1 border-r-2 border-white">
                        <span className="block text-base leading-4 capitalize">
                            {t('since')}
                        </span>

                        <span className="block text-2xl leading-6">
                            2020
                        </span>
                    </p>
                    <p className={`px-4 py-1 ${dm_sans.className}`}>
                        <span className="block text-base capitalize">
                            {actualYear - 2020} {t('years')}<br />
                            {"Experience"}
                        </span>
                    </p>
                </div>

                <div className="overflow-hidden flex items-center">
                    <ul className={`marquee capitalize text-xl ${style.aboutMarquee}`}>
                        <li>creative</li>
                        <li className="mx-10">·</li>
                        <li>rigorous</li>
                        <li className="mx-10">·</li>
                        <li>attentive </li>
                        <li className="mx-10">·</li>
                        <li>demanding</li>
                        <li className="mx-10">·</li>
                        <li>professional </li>
                        <li className="mx-10">·</li>
                        <li>concerned</li>
                    </ul>
                    <ul className={`marquee capitalize text-xl ${style.aboutMarquee}`}>
                        <li>creative</li>
                        <li className="mx-10">·</li>
                        <li>rigorous</li>
                        <li className="mx-10">·</li>
                        <li>attentive </li>
                        <li className="mx-10">·</li>
                        <li>demanding</li>
                        <li className="mx-10">·</li>
                        <li>professional </li>
                        <li className="mx-10">·</li>
                        <li>concerned</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex justify-between items-end  px-16 max-w-[1535px] w-full">
                    <div className="w-96 select-none after:block after:absolute after:-inset-1 after:bg-gradient-white after:dark:bg-gradient-darkest relative -z-10">
                        <span className="text-8xl block text-light-grey dark:text-light-grey/25">Web & Mobile</span>  
                        <span className="text-8xl block text-secondary">Dev</span>  
                    </div>

                    <div className="mx-8"></div>

                    <div className="text-darkest dark:text-white">
                        <h1 className="text-4xl capitalize">
                            {t('about_me')}
                        </h1>
                        <p className={`py-2 ${dm_sans.className} whitespace-pre-line`}>
                            {t('about_lewis')}
                        </p>

                        <CustomButton 
                            rightIcon={
                                <span className="material-symbols-outlined pl-4">arrow_outward</span>
                            }
                            bgColor={"bg-secondary"} 
                            color={"text-white"} 
                            label="try_factauto" 
                            action={undefined}/>
                    </div>
                </div>

                <div className="flex justify-between items-center my-8 px-16 max-w-[1535px] w-full">
                    <div className="max-w-[50rem] text-darkest dark:text-white">
                        <h1 className="text-4xl capitalize">
                            {t('my_focus')}
                        </h1>
                        <p className={`py-3 ${dm_sans.className} whitespace-pre-line`}>
                            {t('focus_text')}

                            <span className="flex flex-wrap py-2">
                                {
                                    focus.map((element: any, idx: number)=> {
                                        return(
                                            <span className="mr-4 my-2 px-6 py-1 capitalize rounded-full bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl" key={idx}>
                                                {t(element)}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </p>
                    </div>
                    
                    <div className="mx-8"></div>

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