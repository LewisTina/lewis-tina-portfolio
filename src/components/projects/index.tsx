import style from './index.module.scss'
import CustomButton from "../button"
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { ParallaxEffectApp, ParallaxEffectDesign } from './parallelax'
import SwitchToggle from './toogle'

export default function Projects(){
    const {t} = useTranslation('common')
    const router = useRouter()
    const [activeSkills, setActiveSkills] = useState<"app" | "design">("app")
    const [frameRef, setFrameRef] = useState<HTMLElement | null>(null)
    const _frameRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if(_frameRef.current){
            setFrameRef(_frameRef.current)
        }
    }, [_frameRef])

    return(
        <section className="flex pt-40 md:pt-16 pb-16 flex-col items-center justify-start w-full relative overflow-hidden" id='projects' ref={_frameRef}>
            <div className={`flex justify-center ${style.gradient_mask}`}>
            
                <div className={`flex flex-col gap-8 justify-start relative items-start max-w-[1535px] w-full rounded-3xl mx-10 md:mx-4 lg:mx-6 text-darkest dark:text-white`}>
                    <div className="w-full max-w-7xl mx-auto flex flex-col gap-4">
                        <h2 className="text-4xl capitalize">
                            Portfolio
                        </h2>
                        <SwitchToggle activeSkills={activeSkills} setActiveSkills={setActiveSkills}/>
                    </div>

                    <div className={`w-full flex-col justify-start relative items-start`}>
                        <div className="flex w-full justify-start flex-nowrap">
                            {
                                frameRef &&
                                <>
                                    <ParallaxEffectApp isAppOrDesign={activeSkills} frameRef={frameRef}/>
                                    <ParallaxEffectDesign isAppOrDesign={activeSkills} frameRef={frameRef}/>
                                </>
                            }
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