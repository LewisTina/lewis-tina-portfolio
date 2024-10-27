import CustomButton from "@/components/button";
import { ProjectProps, imageProps } from "@/components/types";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Content (props: {data: ProjectProps}) {
    const {data} = props
    const {t} = useTranslation('common')
    const router = useRouter()
    const locale = router.locale as "en" | "fr"
    const {
        logo,
        activities,
        owner,
        title,
        cover,
        introduction,
        contribution,
        technos,
        contributionBlocImg,
        technosBlocImg,
        githubLink,
        behanceLink,
        projectLink,
        projectCategories,
    } = data

    const ProjectMeta = (props: {value: string}) => {
        return (
            <span className="pl-2 pr-6 py-1">
                {props.value}
            </span>
        )
    }
    
    return(
        <div className="px-10 py-8 mt-32 md:px-0 lg:px-6 mb-40 md:mt-20">
            <div className={`max-w-[1535px] mx-auto w-full min-h-screen h-auto relative`}>
                <div className="flex w-fit h-fit items-center border-2 md:border border-b-0 md:border-l-0 border-light-grey/25 divide-x-2 md:divide-x divide-light-grey/25">
                        {
                            !!logo && 
                            <div className="h-24 flex items-center aspect-square p-2 relative bg-white">
                                <Image  
                                src={logo.link}
                                alt = {logo.alt}
                                className={"object-contain object-left rounded-md"}
                                height={100}
                                width={100}/>
                            </div>

                        }
                    <div className="flex flex-col self-stretch justify-center min-w-[15rem] font-medium text-sm divide-y-2 md:divide-y divide-light-grey/25">
                        <ProjectMeta value={title}/>
                        <ProjectMeta value={activities}/>
                        <ProjectMeta value={owner}/>
                    </div>
                </div>
                <div className="border-2 md:border-0 border-light-grey/25 text-dark-grey dark:text-light-grey whitespace-pre-line w-full bg-white dark:bg-darkest">

                    <div className="grid grid-cols-[1fr,1.25fr] w-full relative lg:grid-cols-[1fr,1fr] md:grid-cols-1">
                        <div className="border-r-2 border-light-grey/25 md:border-r-0 md:border-b-2 w-full h-auto flex">
                            <div className="h-full w-full relative">
                                <Image  
                                    src={cover.link}
                                    alt = {cover.alt}
                                    width={500}
                                    height={500}
                                    sizes="100vw"
                                    className={"min-h-full h-full md:min-h-[unset] md:h-auto md:w-full w-auto object-cover object-left"}/>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between w-full">
                            <div className="p-12 lg:p-4 flex flex-col gap-4 justify-center items-start self-stretch flex-1">
                                <h2 className=" text-7xl coolvetica dark:text-white">
                                    {title}
                                </h2>

                                <span className="projectCategoryPuce">
                                    {projectCategories}
                                </span>

                                <p className="whitespace-pre-line text-base leading-7 md:text-justify md:hyphens-auto">
                                    {introduction[locale]}
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

                    <div className="grid grid-cols-[1fr,8.5fr,9.5fr] lg:grid-cols-[1fr,8.5fr] md:grid-cols-1 w-full border-t-2 border-light-grey/25">
                        <div className="w-20 p-4 py-12 lg:p-4 md:w-full border-r-2 md:border-r-0 md:pb-0 border-light-grey/25 flex justify-center md:justify-start">
                            <h2 className=" text-7xl coolvetica dark:text-white">
                                01
                            </h2>  
                        </div>

                        <div className="p-12 lg:p-4 md:w-full lg:border-r-0 border-r-2 md:pt-0 border-light-grey/25 md:text-justify md:hyphens-auto">
                            <div className="w-full relative ">
                                <h2 className=" text-7xl coolvetica capitalize dark:text-white">
                                    {t('my_contributions')}
                                </h2> 
                                <p className="py-4 whitespace-pre-line text-base leading-7">
                                    {contribution[locale]}
                                </p>

                            </div>

                            <div className="">
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
                        </div>

                        <div className="lg:col-span-2 md:col-span-1 sm:flex-col lg:flex-row xl:flex-col lg:w-full lg:border-t-2 border-light-grey/25 flex p-4 md:p-0">
                            <div className={`${contributionBlocImg.length > 2 ? "columns-3xs" : "columns-1xs"} gap-4 space-y-4`}>
                                {
                                    contributionBlocImg.map((value: imageProps, idx) => {
                                        return (
                                            <div className="w-auto relative" key={idx}>
                                                <Image  
                                                    src={value.link}
                                                    alt = {value.alt}
                                                    width={1000}
                                                    height={1000}
                                                    className={"h-auto w-full object-contain"}/>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr,12fr,6fr] lg:grid-cols-[1fr,12fr] md:grid-cols-1 w-full border-t-2 md:border-t-0 border-light-grey/25">
                        <div className="w-20 p-4 py-12 lg:p-4 md:w-full border-r-2 md:border-r-0 md:pb-0 border-light-grey/25 flex justify-center md:justify-start">
                                <h2 className=" text-7xl coolvetica dark:text-white">
                                    02
                                </h2>  
                        </div>

                        <div className="p-12 lg:p-4 md:w-full lg:border-r-0 border-r-2 md:pt-0 border-light-grey/25 text-justify hyphens-auto word-spacing">
                            <div className="w-full relative ">
                                <h2 className=" text-7xl coolvetica capitalize dark:text-white">
                                    {t('tools_tech')}
                                </h2> 
                                <ul className="pt-4 flex flex-wrap gap-3">
                                    {
                                        technos.map((value: string, idx) => 
                                            <li className="bubbleSpan" key={idx}>
                                                {value}
                                            </li> 
                                        )
                                    }
                                </ul>

                            </div>
                        </div>

                        <div className="lg:col-span-2 md:col-span-1 sm:flex-col lg:flex xl:flex-col lg:w-full lg:border-t-2 border-light-grey/25 flex p-2">
                        {
                                technosBlocImg.map((value: imageProps, idx) => {
                                    return (
                                        <>
                                        <div className="w-auto relative p-2">
                                            <Image  
                                                src={value.link}
                                                alt = {value.alt}
                                                width={500}
                                                height={500}
                                                className={"h-auto w-full object-contain"}/>

                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}