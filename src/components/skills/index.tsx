import styles from './skills.module.scss'
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'

 const hardSkills =  ["NextJs", "ReactJs", "HTML", "NodeJs", "Typescript", "Javascript", "SQL", "Java", "C#", "Dart", "flutter", "Python", "Sass/Scss", "CSS", "PHP", "Docker", "UML", "Merise", "Swagger", "github", "Tailwind Css", "PostgreSQL", "Angular Js", "Adobe Illustrator", "Figma", "Adobe Photoshop", "Adobe Xd"]

 const tech1 = ["git", "typescript", "react", "next", "node", "angular", "python", "sass", "figma", "tailwind"]
 const tech2 = ["docker", "swagger", "html", "c_sharp", "adobe_xd", "adobe_ai", "adobe_ps", "javascript"]


export default function Skills(props: any) {
    const {t} = useTranslation('common')

    return (
        <section className="flex flex-col items-center justify-start w-full" id='skills'>
            <div className="max-w-[1535px] w-full -mx-10">
                <div className="flex flex-col 3xl:rounded-3xl bg-dark-grey py-16 mxl:py-32 text-white">
                    <div className="px-10 md:px-4 lg:px-6 pb-16">
                        <div className="w-full max-w-7xl mx-auto flex flex-col gap-4">
                            <div>
                                <h2 className="text-title capitalize">
                                    {t('my_skills')}
                                </h2>
                                <p className={`py-2  whitespace-pre-line`}>
                                    {t('lewis_skills')}
                                </p>
                            </div>

                            <ul className={`w-full flex flex-wrap gap-3`}>
                                {
                                    hardSkills.map((element: any, idx: number)=> {
                                        return(
                                            <li className="bubbleSpan" key={idx}>
                                                {t(element)}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    
                    <div className={`overflow-hidden flex items-center my-10 md:my-6 ${styles.skillsMarquee}`}>
                        <div className={`flex gap-20 w-fit items-center marquee`}>
                            {
                                Array.from(new Array(3),(e, i) => {
                                    return (
                                        <ul className='flex gap-20 w-fit' key={`marquee-skills${i}`}>
                                            {
                                                tech1.map((e, i) => {
                                                    return (
                                                        <li key={`tech-1-${i}`}>
                                                            <Image  
                                                                src={`/${e}.svg`}
                                                                alt = {`${e} logo`}
                                                                draggable='false'
                                                                height={500}
                                                                width={500}
                                                                className='h-14 w-auto max-w-none'/>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    <div className={`overflow-hidden flex items-center my-10 md:my-6 ${styles.skillsMarquee}`}>
                        <div className={` gap-20 w-fit items-center marquee reverse`}>
                            {
                                Array.from(new Array(3),(e, i) => {
                                    return (
                                        <ul className='flex gap-20 w-fit' key={`marquee-skills-2-${i}`}>
                                            {
                                                tech2.map((e, i) => {
                                                    return (
                                                        <li key={`tech-2-${i}`}>
                                                            <Image  
                                                                src={`/${e}.svg`}
                                                                alt = {`${e} logo`}
                                                                draggable='false'
                                                                height={500}
                                                                width={500}
                                                                className='h-14 w-auto max-w-none'/>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
            </div>
        </section>
    )
}