import { useRouter } from "next/router"
import { ProjectProps } from '@/components/types'
import CustomButton from "@/components/button"
import useTranslation from "next-translate/useTranslation"
import Link from 'next/link'
import projects from '../../../../project.json'
import Image from "next/image"

export default function Listing(){
    const finalProject = projects
    type projectKey = keyof (typeof projects)
    const {t} = useTranslation('common')
    const router = useRouter()
    const locale = router.locale as "en" | "fr"

    return(
        <section className={`flex flex-col items-center justify-start pt-40 pb-52 px-10 md:px-0 lg:px-6`} id="my_project">
            <div className={`flex flex-col justify-start relative items-start max-w-[1535px] w-full rounded-3xl text-darkest dark:text-white`}>
                <div className={`w-full flex flex-col justify-start relative items-start gap-10 md:gap-32`}>
                    {
                        Object.keys(projects).map((_keyName) => {
                            const keyName = _keyName as projectKey
                            const project = finalProject[keyName] as ProjectProps
                            const {
                                title,
                                cover,
                                resume,
                                projectCategories,
                                behanceLink,
                                githubLink,
                                projectLink
                            } = project
                            return (
                                <>
                                <div 
                                    className="w-full h-auto border-2 md:border-0 border-light-grey/25 lg:h-[unset] sm:w-full relative overflow-hidden">
                                    <div className="grid grid-cols-[1fr,1.25fr] w-full relative lg:grid-cols-[1fr,1fr] md:grid-cols-1">
                                        <div 
                                            className="border-r-2 border-light-grey/25 md:border-r-0 md:border-b-2 w-full h-auto flex group cursor-pointer"
                                            onClick={()=>{router.push(`visualisation?id=${keyName}`)}}>
                                            <div className="h-full w-full relative">
                                                <Image  
                                                    src={cover?.link}
                                                    alt = {cover?.alt}
                                                    className='h-full w-full object-cover object-left-top'
                                                    width={1000}
                                                    height={1000}/>

                                                    <div className="z-90 absolute transition-all mlg:group-hover:h-full mlg:group-hover:opacity-100 opacity-0 h-0 flex items-center justify-center w-full bg-white dark:bg-darkest bottom-0 p-2">
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

                                        <div className="flex flex-col w-full">
                                            <div 
                                                className="p-12 lg:p-4 flex flex-col gap-4 justify-center items-start self-stretch flex-1 cursor-pointer"
                                                onClick={()=>{router.push(`visualisation?id=${keyName}`)}}>
                                                <h2 className=" text-7xl coolvetica">
                                                    {title} 
                                                </h2>

                                                <span className="projectCategoryPuce">
                                                    {projectCategories}
                                                </span>

                                                <p className="md:text-justify md:hyphens-auto text-base">
                                                    {resume?.[locale]}
                                                </p>
                                            </div>
                                            {
                                                !behanceLink && !githubLink && !projectLink ?
                                                <></>
                                                :
                                                <div className="px-12 lg:p-4 py-4 lg:py-1 w-full border-t-2 border-light-grey/25 flex flex-wrap justify-start items-center">
                                                    {
                                                        behanceLink &&
                                                        <Link target="_blank" rel="noreferrer" href={behanceLink} className="dark:bg-white bg-dark-grey dark:text-darkest text-white rounded-full mr-4 flex justify-center items-center h-10 aspect-square">
                                                            <i className="text-xl fa fa-behance transition"></i>
                                                        </Link>
                                                    }
                                                    
                                                    {
                                                        githubLink &&
                                                        <Link target="_blank" rel="noreferrer" href={githubLink} className="dark:bg-white bg-dark-grey dark:text-darkest text-white rounded-full mr-4 flex justify-center items-center h-10 aspect-square">
                                                            <i className="text-3xl fa fa-github transition"></i>
                                                        </Link>
                                                    }

                                                    {
                                                        projectLink &&
                                                        <a href={projectLink} target="_blank">
                                                            <CustomButton 
                                                                rightIcon={
                                                                    <span className="material-symbols-outlined pl-4">&#xf8ce;</span>
                                                                }
                                                                bgColor={"dark:bg-white bg-dark-grey"} 
                                                                color={"dark:text-darkest text-white"} 
                                                                className={"my-0"}
                                                                label={t("go_to", {project_name: title})} 
                                                                action={undefined}/>
                                                        </a>
                                                    }
                                                </div>
                                            }

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