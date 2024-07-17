import style from './index.module.scss'
import CustomButton from "../button"
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import ParallaxApp from './parallelax'
import ParallaxDesign from './parallelax-design'
import { useRouter } from 'next/router'
import SwitchToggle from './toogle'

export default function Projects(){
    const {t} = useTranslation('common')
    const [activeSkills, setActiveSkills] = useState<"app" | "design">("app")
    const router = useRouter()

    return(
        <section className="flex py-16 flex-col items-center justify-start w-full relative overflow-hidden" id='projects'>
            <div className={`flex justify-center ${style.gradient_mask}`}>
            
                <div className={`flex flex-col justify-start relative items-start max-w-[1535px] w-full rounded-3xl mx-10 md:mx-4 lg:mx-6 text-darkest dark:text-white`}>
                    <h2 className="text-4xl capitalize">
                        Portfolio
                    </h2>

                    <div className={` w-full flex-col justify-start relative items-start`}>
                        <SwitchToggle activeSkills={activeSkills} setActiveSkills={setActiveSkills}/>

                        <div className="flex w-full justify-start flex-nowrap">
                            <ParallaxApp isAppOrDesign= {activeSkills}/>
                            <ParallaxDesign isAppOrDesign= {activeSkills}/>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className={`absolute bottom-16 flex justify-center `}>
                <CustomButton 
                    bgColor={"bg-primary"} 
                    color={"text-white"} 
                    label={t("see_more")} 
                    action={()=> {router.push('/portfolio')}}/>
            </div>
        </section>
    )
}