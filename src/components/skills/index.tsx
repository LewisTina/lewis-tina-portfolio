import style from './index.module.scss'
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'

 const hardSkills =  ["NextJs", "ReactJs", "HTML", "NodeJs", "Typescript", "Javascript", "SQL", "Java", "C#", "Dart", "flutter", "Python", "Sass/Scss", "CSS", "PHP", "Docker", "UML", "Merise", "Swagger", "github", "Tailwind Css", "PostgreSQL", "Angular Js", "Adobe Illustrator", "Figma", "Adobe Photoshop", "Adobe Xd"]


export default function Skills(props: any) {
    const {t} = useTranslation('common')
    return (
        <section className="flex flex-col items-center justify-start w-full px-16 md:px-0 lg:px-6" id='skills'>
            <div className="max-w-[1535px] w-full">
                <div className="flex flex-col rounded-3xl md:rounded-none bg-dark-grey py-16 md:pt-5 text-white">
                    <div className="px-16 md:px-4">
                        <h2 className="text-4xl capitalize mb-8">
                            {t('my_skills')}
                        </h2>
                        <p className={`py-2  whitespace-pre-line`}>
                            {t('lewis_skills')}
                        </p>
                    </div>

                    <p className={`w-full flex flex-wrap pl-16 pr-7 md:pl-4 md:pr-0 mb-6 `}>
                        {
                            hardSkills.map((element: any, idx: number)=> {
                                return(
                                    <span className="mr-3 mt-3 px-3 py-1 capitalize rounded-full bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl" key={idx}>
                                        {t(element)}
                                    </span>
                                )
                            })
                        }
                    </p>

                    
                    <div className="overflow-hidden flex items-center my-10 md:my-6">
                        <ul className={`marquee capitalize text-xl ${style.skillsMarqueeLeft}`}>
                            <li>
                            <Image  
                                src="/git.svg"
                                alt = "git logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>

                            <li>
                            <Image  
                                src="/typescript.svg"
                                alt = "typescript logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>

                            <li>
                            <Image  
                                src="/react.svg"
                                alt = "react logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/next.svg"
                                alt = "next logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/node.svg"
                                alt = "node logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/angular.svg"
                                alt = "angular logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/python.svg"
                                alt = "python logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/sass.svg"
                                alt = "sass logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/figma.svg"
                                alt = "figma logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/tailwind.svg"
                                alt = "tailwind logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                        </ul>
                        
                        <ul className={`marquee capitalize text-xl md:hidden ${style.skillsMarqueeLeft}`}>
                            <li>
                            <Image  
                                src="/git.svg"
                                alt = "git logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>

                            <li>
                            <Image  
                                src="/typescript.svg"
                                alt = "typescript logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>

                            <li>
                            <Image  
                                src="/react.svg"
                                alt = "react logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/next.svg"
                                alt = "next logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/node.svg"
                                alt = "node logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/angular.svg"
                                alt = "angular logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/python.svg"
                                alt = "python logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/sass.svg"
                                alt = "sass logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/figma.svg"
                                alt = "figma logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                            
                            <li>
                            <Image  
                                src="/tailwind.svg"
                                alt = "tailwind logo"
                                height={500}
                                width={500}
                                className='mr-20 h-14 md:mr-10'
                                style={{
                                    width: 'auto',
                                }}/>
                            </li>
                        </ul>
                    </div>

                    <div className="overflow-hidden flex items-center my-10 md:my-6">
                    <ul className={`marquee capitalize text-xl ${style.skillsMarqueeRight}`}>
                        <li>
                        <Image  
                            src="/flutter.svg"
                            alt = "flutter logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/docker.svg"
                            alt = "docker logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/swagger.svg"
                            alt = "swagger logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/html.svg"
                            alt = "html logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/c_sharp.svg"
                            alt = "c_sharp logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/adobe_xd.svg"
                            alt = "adobe_xd logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/adobe_ai.svg"
                            alt = "adobe_ai logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/adobe_ps.svg"
                            alt = "adobe_ps logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/javascript.svg"
                            alt = "javascript logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                    </ul>

                    <ul className={`marquee capitalize text-xl md:hidden ${style.skillsMarqueeRight}`}>
                        <li>
                        <Image  
                            src="/flutter.svg"
                            alt = "flutter logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/docker.svg"
                            alt = "docker logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/swagger.svg"
                            alt = "swagger logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/html.svg"
                            alt = "html logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/c_sharp.svg"
                            alt = "c_sharp logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/adobe_xd.svg"
                            alt = "adobe_xd logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/adobe_ai.svg"
                            alt = "adobe_ai logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/adobe_ps.svg"
                            alt = "adobe_ps logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                        <li>
                        <Image  
                            src="/javascript.svg"
                            alt = "javascript logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}