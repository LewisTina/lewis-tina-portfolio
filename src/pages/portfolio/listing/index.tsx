import { DM_Sans } from "next/font/google"
import projects from '../../../../project.json'
import ProjectPreview from "@/components/projects/projectPreview"
import Image from "next/image"
import { useRouter } from "next/router"
import SwitchToggle from "@/components/projects/toogle"
import { useState } from "react"
import CustomButton from "@/components/button"
import useTranslation from "next-translate/useTranslation"

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400','500','600', '700','800','900']
    }
  )

export default function Listing(){
    const finalProject = projects as any
    const {t} = useTranslation('common')
    const [activeSkills, setActiveSkills] = useState<"app" | "design">("app")
    const router = useRouter()
    const locale = router.locale as "en" | "fr"

    return(
        <section className={`flex flex-col items-center justify-start py-20 pb-52`} id="my_project">
            <div className={`${dm_sans.className} flex flex-col justify-start relative items-start max-w-[1535px] w-full rounded-3xl px-16 md:px-4 lg:px-8 text-darkest dark:text-white`}>
                {/* <SwitchToggle activeSkills={activeSkills} setActiveSkills={setActiveSkills}/> */}
                <div className={`w-full flex flex-wrap justify-start relative items-start`}>
                    {
                            Object.keys(projects).map((keyName: any, i) => {
                                return (
                                    <>
                                    <div className="w-full h-auto border-2 border-light-grey/50 lg:h-[unset] sm:w-full lg:w-[cal(50%-0.5rem)] relative mt-4 mr-4 sm:mr-0 overflow-hidden cursor-pointer group" onClick={()=>{router.push(`visualisation?id=${keyName}`)}}>
                                        <div className="flex w-full relative md:flex-col">
                                        <div className="p-4 border-r-2 border-light-grey/50 md:border-r-0 md:border-b-2 w-full max-w-md md:max-w-none h-auto flex">
                                            <div className="h-full w-full relative">
                                                <Image  
                                                    src={finalProject[keyName]?.cover?.link}
                                                    alt = {finalProject[keyName]?.cover?.alt}
                                                    width={500}
                                                    height={500}
                                                    sizes="100vw"
                                                    className={"min-h-full h-full w-auto sm:w-full sm:h-auto object-cover object-left"}/>

                                                    <div className="z-90 absolute transition-all group-hover:h-full group-hover:opacity-100 opacity-0 h-0 flex items-center justify-center w-full bg-white dark:bg-darkest bottom-0 p-2">
                                                        <h4 className=''>
                                                            <CustomButton 
                                                                rightIcon={
                                                                    <span className="material-symbols-outlined pl-4">arrow_outward</span>
                                                                }
                                                                bgColor={"dark:bg-white bg-dark-grey"} 
                                                                color={"dark:text-darkest text-white"} 
                                                                className={"my-0"}
                                                                label={t('more_details')} 
                                                                action={undefined}/>
                                                        </h4> 
                                                    </div>

                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between w-full">
                                            <div className="p-4">
                                                <h2 className=" text-7xl coolvetica">
                                                    {finalProject[keyName]?.title} 
                                                </h2>

                                                <span className="py-1 px-4 inline-block text-white rounded-full bg-secondary mt-4">
                                                    {finalProject[keyName]?.projectCategories}
                                                </span>

                                                <p className="py-4  text-justify hyphens-auto spacing word-spacing">
                                                    {finalProject[keyName]?.resume[locale]}
                                                </p>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}