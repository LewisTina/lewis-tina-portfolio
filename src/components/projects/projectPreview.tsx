import Link from "next/link"
import CustomButton from "../button"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import { ProjectProps } from "../types"

export default function ProjectPreview(props: {data: ProjectProps, id:string}) {
    const {data, id} = props
    const {t} = useTranslation('common')
    const router = useRouter()
    const locale = router.locale as "en" | "fr"
    const {
        logo,
        activities,
        owner,
        title,
        cover,
        technos,
        githubLink,
        behanceLink,
        projectLink,
        projectCategories,
        resume
    } = data

    return(
        <>
                <Image  
                    src={cover.link}
                    alt = {cover.alt}
                    className={"object-cover"}
                    quality={75}
                    fill/>

                <div 
                    className="
                    text-white
                    absolute
                    flex flex-col justify-end
                    opacity-0 hover:opacity-100 
                    transition-all duration-300
                    h-full w-full
                    p-6
                    pb-3
                    bg-gradient-to-tr from-black from-35% to-black/0
                    ">
                
                <div className="flex items-center lg:flex-col lg:items-start">
                    <h4 className='text-2xl font-black'>
                        {title}
                    </h4>
                    <span className="py-1 px-4 rounded-full bg-secondary mx-4 lg:mx-0">
                        {projectCategories}
                    </span>
                </div>
                
                <div className="mt-2">
                    <p className="word-space lg:text-xs">
                        {resume[locale]}
                    </p>
                    
                    <span className="my-2 text-xl flex font-extrabold lg:hidden">
                        Technologies
                    </span>
                    <p className="flex flex-wrap lg:hidden">
                        {
                            technos.map((value: string, idx) => {
                                return (
                                    <span className="mr-4 my-2 px-6 py-1 capitalize rounded-full bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl" key={idx}>
                                        {value}
                                    </span>
                                )
                            })
                        }
                    </p>
                </div>
                
                <div className="flex items-center justify-between">

                    <div className="flex">
                            <CustomButton 
                                bgColor={"bg-white"} 
                                color={"text-black"} 
                                label={t("more_details")} 
                                action={()=>{router.push(`visualisation?id=${id}`)}}/>
                    </div>

                    <div className="flex items-center lg:hidden">
                    {
                        !!behanceLink &&
                        <Link target="_blank" rel="noreferrer" href={behanceLink} className="bg-white/100 text-black rounded-full mr-4 flex justify-center items-center h-10 aspect-square">
                            <i className="text-xl fa fa-behance transition"></i>
                        </Link>
                    }
                    
                    {
                        !!githubLink &&
                        <Link target="_blank" rel="noreferrer" href={githubLink} className="bg-white/100 text-black rounded-full mr-4 flex justify-center items-center h-10 aspect-square">
                            <i className="text-3xl fa fa-github transition"></i>
                        </Link>
                    }

                    {
                        !!projectLink &&
                        <a href={projectLink} target="_blank">
                            <CustomButton 
                                rightIcon={
                                    <span className="material-symbols-outlined pl-4">&#xf8ce;</span>
                                }
                                bgColor={"bg-white"} 
                                color={"text-black"} 
                                className={"my-0"}
                                label={t("go_to", {project_name: title})} 
                                action={undefined}/>
                        </a>
                    }
                    </div>
                
                    </div>
                </div>
            </>
    )
}