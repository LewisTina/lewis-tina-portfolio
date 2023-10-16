import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import CustomButton from "../button"
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import ParallaxApp from './parallelax'
import ParallaxDesign from './parallelax-design'
import { useRouter } from 'next/router'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400','500','600', '700','800','900']
    }
  )


export default function Projects(props: any){
    const {t} = useTranslation('common')
    const [activeSkills, setActiveSkills] = useState<"app" | "design">("app")
    const router = useRouter()

    useEffect(() => {
        const id: any = {app: "app_toggle", design: "design_toggle"}
        var activeIndicator = document.getElementById(id[activeSkills]);
        var activeIndicatorWidth = activeIndicator?.offsetWidth;
        var activeIndicatorLeft = activeIndicator?.offsetLeft;

        var indicator = document.getElementById("indicator");
        indicator!.style.width = `${activeIndicatorWidth}` + "px"
        indicator!.style.left = `${activeIndicatorLeft}` + "px"

    }, [activeSkills])
    return(
        <section className="flex py-16 flex-col items-center justify-start w-full relative overflow-hidden" id='projects'>
            <div className={`flex justify-center ${style.gradient_mask}`}>
            
                <div className={`flex flex-col justify-start relative items-start max-w-[1535px] w-full rounded-3xl px-16 md:px-4 lg:px-8 text-darkest dark:text-white`}>
                    <h2 className="text-4xl capitalize">
                        Portfolio
                    </h2>

                    <div className={`${dm_sans.className} w-full flex-col justify-start relative items-start`}>
                        <div className="flex">
                            <div className="relative self-start rounded-full h-10 my-4 bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl max-w-full sm:w-full">
                                <div className={`absolute rounded-full h-full transition-all duration-300 bg-primary -z-10`} id='indicator'>
                                </div>

                                <div className="flex h-full px-6 items-center rounded-full cursor-pointer sm:w-1/2 sm:px-4" id='app_toggle' onClick={()=>{setActiveSkills("app")}}>
                                    <span className={`
                                        capitalize transition-all duration-300 text-ellipsis inline-block whitespace-nowrap overflow-hidden
                                        ${activeSkills == "app" ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                                        App & Websites
                                    </span>
                                </div>
                                
                                <div className="flex h-full px-6 items-center rounded-full cursor-pointer sm:w-1/2 sm:px-4" id="design_toggle" onClick={()=>{setActiveSkills("design")}}>
                                    <span className={`
                                        capitalize transition-all duration-300 text-ellipsis inline-block whitespace-nowrap overflow-hidden
                                        ${activeSkills == "design" ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                                        Design & Branding
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full justify-start flex-nowrap">
                            <ParallaxApp isAppOrDesign= {activeSkills}/>
                            <ParallaxDesign isAppOrDesign= {activeSkills}/>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className={`absolute bottom-16 flex justify-center ${dm_sans.className}`}>
                <CustomButton 
                    bgColor={"bg-primary"} 
                    color={"text-white"} 
                    label={t("see_more")} 
                    action={()=> {router.push('/portfolio')}}/>
            </div>
        </section>
    )
}