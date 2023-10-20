import CustomButton from "@/components/button";
import { ProjectProps, imageProps } from "@/components/types";
import useTranslation from "next-translate/useTranslation";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['500', '600', '700', '800', '900']
    }
  )


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
    
    return(
        <div className={`px-16 py-8 max-w-[1535px] w-full min-h-screen h-auto md:px-4 lg:px-8 relative mt-20 mb-40 md:mt-10  ${dm_sans.className}`}>
            <div className="my-6 flex w-full items-center">
                    {
                        !!logo && 
                        <div className="h-16 aspect-square mr-4 relative">
                            <Image  
                            src={logo.link}
                            alt = {logo.alt}
                            className={"object-contain object-left"}
                            quality={75}
                            fill/>
                        </div>

                    }
                <div className="font-bold">
                    <span className=""> {title} </span> <br />
                    <span className=""> {activities} </span> <br />
                    <span className=""> {owner} </span>
                </div>
            </div>
            <div className="border-2 border-light-grey/50 text-dark-grey dark:text-light-grey whitespace-pre-line w-full">

                <div className="flex w-full relative lg:flex-col">
                    <div className="p-4 border-r-2 border-light-grey/50 lg:border-r-0 lg:border-b-2 w-full max-w-md lg:max-w-none h-auto flex">
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
                        <div className="p-4">
                            <h2 className=" text-7xl coolvetica">
                                {title}
                            </h2>

                            <span className="py-1 px-4 inline-block text-white rounded-full bg-secondary mt-4">
                                {projectCategories}
                            </span>

                            <p className="py-4  text-justify hyphens-auto spacing word-spacing">
                                {introduction[locale]}
                            </p>
                        </div>

                        <div className="p-4 w-full border-t-2 border-light-grey/50 flex flex-wrap justify-start items-center">
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
                                            <span className="material-symbols-outlined pl-4">arrow_outward</span>
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
                </div>

                <div className="flex w-full lg:flex-wrap border-t-2 border-light-grey/50">
                    <div className="w-20 lg:w-1/5 md:w-full p-4 border-r-2 md:border-r-0 md:pb-0 border-light-grey/50 flex justify-center md:justify-start">
                            <h2 className=" text-7xl coolvetica">
                                01
                            </h2>  
                    </div>

                    <div className="p-4 w-2/5 lg:w-4/5 md:w-full lg:border-r-0 border-r-2 md:pt-0 border-light-grey/50 text-justify hyphens-auto word-spacing">
                        <div className="w-full relative ">
                            <h2 className=" text-7xl coolvetica capitalize">
                                {t('my_contributions')}
                            </h2> 
                            <p className="py-4">
                                {contribution[locale]}
                            </p>

                        </div>

                        <div className="">
                            {
                                projectLink &&
                                <a href={projectLink} target="_blank">
                                    <CustomButton 
                                        rightIcon={
                                            <span className="material-symbols-outlined pl-4">arrow_outward</span>
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

                    <div className="flex-1 sm:flex-col lg:flex-row xl:flex-col lg:w-full lg:border-t-2 border-light-grey/50 flex p-2">
                        <div className="flex flex-col">
                        {
                            contributionBlocImg.slice(0, -1).map((value: imageProps, idx) => {
                                return (
                                    <>
                                    <div className="w-auto relative p-2">
                                        <Image  
                                            src={value.link}
                                            alt = {value.alt}
                                            width={1000}
                                            height={1000}
                                            className={"h-auto w-full object-contain"}/>

                                    </div>
                                    </>
                                )
                            })
                        }
                        </div>
                        <div className="flex flex-col">
                        {
                            contributionBlocImg.slice(-1).map((value: imageProps, idx) => {
                                return (
                                    <>
                                    <div className="w-auto relative p-2">
                                        <Image  
                                            src={value.link}
                                            alt = {value.alt}
                                            width={1000}
                                            height={1000}
                                            className={"h-auto w-full object-contain"}/>

                                    </div>
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>

                <div className="flex w-full lg:flex-wrap border-t-2 border-light-grey/50">
                    <div className="w-20 lg:w-1/5 md:w-full p-4 border-r-2 md:border-r-0 md:pb-0 border-light-grey/50 flex justify-center md:justify-start">
                            <h2 className=" text-7xl coolvetica">
                                02
                            </h2>  
                    </div>

                    <div className="p-4 w-3/5 lg:w-4/5 md:w-full lg:border-r-0 border-r-2 md:pt-0 border-light-grey/50 text-justify hyphens-auto word-spacing">
                        <div className="w-full relative ">
                            <h2 className=" text-7xl coolvetica capitalize">
                                {t('tools_tech')}
                            </h2> 
                            <p className="pt-4 flex flex-wrap">
                                {
                                    technos.map((value: string, idx) => {
                                        return (
                                            <>
                                            <span className="mr-2 my-2 px-6 md:px-4 py-1 capitalize rounded-full bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl" key={idx}>
                                                {value}
                                            </span> 
                                            &nbsp;
                                            </>
                                        )
                                    })
                                }
                            </p>

                        </div>
                    </div>

                    <div className="flex-1 sm:flex-col lg:flex xl:flex-col lg:w-full lg:border-t-2 border-light-grey/50 flex p-2">
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
    )

}