import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import CustomButton from "../button"
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import ParallaxApp from './parallelax'
import ParallaxDesign from './parallelax-design'
import { useRouter } from 'next/router'
import SwitchToggle from './toogle'

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

    return(
        <section className="flex py-16 flex-col items-center justify-start w-full relative overflow-hidden" id='projects'>
            <div className={`flex justify-center ${style.gradient_mask}`}>
            
                <div className={`flex flex-col justify-start relative items-start max-w-[1535px] w-full rounded-3xl px-16 md:px-4 lg:px-8 text-darkest dark:text-white`}>
                    <h2 className="text-4xl capitalize">
                        Portfolio
                    </h2>

                    <div className={`${dm_sans.className} w-full flex-col justify-start relative items-start`}>
                        <SwitchToggle activeSkills={activeSkills} setActiveSkills={setActiveSkills}/>

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