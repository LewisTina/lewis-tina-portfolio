import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import CustomButton from "../button"
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['500']
    }
  )


export default function Projects(props: any){
    const {t} = useTranslation('common')
    const [activeSkills, setActiveSkills] = useState<any>("app")

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
        <section className="flex flex-col items-center justify-start w-full" id='projects'>
            <div className="flex flex-col justify-start items-start max-w-[1535px] w-full rounded-3xl py-16 px-16 text-darkest dark:text-white">
                <h1 className="text-4xl capitalize">
                    {t('my_skills')}
                </h1>

                <div className={`${dm_sans.className} w-full flex-col justify-start items-start`}>
                    <div className="flex">
                        <div className="relative self-start rounded-full h-10 my-4 bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl">
                            <div className={`absolute rounded-full h-full transition-all duration-300 bg-primary -z-10`} id='indicator'>
                            </div>

                            <div className="flex h-full px-6 items-center rounded-full cursor-pointer" id='app_toggle' onClick={()=>{setActiveSkills("app")}}>
                                <span className={`
                                    capitalize transition-all duration-300 text-ellipsis inline-block whitespace-nowrap overflow-hidden
                                    ${activeSkills == "app" ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                                    App & Websites
                                </span>
                            </div>
                            
                            <div className="flex h-full px-6 items-center rounded-full cursor-pointer" id="design_toggle" onClick={()=>{setActiveSkills("design")}}>
                                <span className={`
                                    capitalize transition-all duration-300 text-ellipsis inline-block whitespace-nowrap overflow-hidden
                                    ${activeSkills == "design" ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                                    Graphic Design & Branding
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <div className="flex h-[30rem] w-full my-2">
                            <div className="flex rounded-2xl h-full w-[55%] bg-white border-2 border-light-grey/25 mr-4"></div>
                            <div className="flex rounded-2xl h-full w-[45%] bg-light-grey/25 border-2 border-light-grey/25"></div>
                        </div>
                        <div className="flex h-[30rem] w-full my-2">
                            <div className="flex rounded-2xl h-full w-[45%] bg-light-grey/25 border-2 border-light-grey/25 mr-4"></div>
                            <div className="flex rounded-2xl h-full w-[55%] bg-light-grey/25 border-2 border-light-grey/25"></div>
                        </div>
                        <div className="flex h-48 w-full my-2">
                            <div className="flex rounded-2xl h-full w-3/12 bg-light-grey/25 border-2 border-light-grey/25 mr-4"></div>
                            <div className="flex rounded-2xl h-full w-3/12 bg-light-grey/25 border-2 border-light-grey/25 mr-4"></div>
                            <div className="flex rounded-2xl h-full w-3/12 bg-light-grey/25 border-2 border-light-grey/25 mr-4"></div>
                            <div className="flex rounded-2xl h-full w-3/12 bg-light-grey/25 border-2 border-light-grey/25"></div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <CustomButton 
                            bgColor={"bg-primary"} 
                            color={"text-white"} 
                            label="see_more" 
                            action={undefined}/>
                    </div>
                </div>
            </div>
        </section>
    )
}