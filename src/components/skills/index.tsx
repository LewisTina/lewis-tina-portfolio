import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import Image from "next/image"
import useTranslation from 'next-translate/useTranslation'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['500']
    }
  )

export default function Skills(props: any) {
    const {t} = useTranslation('common')
    return (
        <section className="flex flex-col items-center justify-start w-full" id='skills'>
            <div className="px-16 md:px-4 lg:px-6 max-w-[1535px] w-full ">
                <div className="flex flex-col rounded-3xl bg-dark-grey py-8 text-white">
                <div className="px-10">
                        <h2 className="text-4xl capitalize">
                            {t('my_skills')}
                        </h2>
                        <p className={`py-2 ${dm_sans.className} whitespace-pre-line`}>
                            {t('lewis_skills')}
                        </p>
                </div>

                
                <div className="overflow-hidden flex items-center my-10 md:my-6">
                    <ul className={`marquee capitalize text-xl ${style.skillsMarqueeLeft}`}>
                        <li>
                        <Image  
                            src="/git.svg"
                            alt = "git logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                    </ul>
                    
                    <ul className={`marquee capitalize text-xl ${style.skillsMarqueeLeft}`}>
                        <li>
                        <Image  
                            src="/git.svg"
                            alt = "git logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
                            style={{
                                width: 'auto',
                              }}/>
                        </li>
                        
                    </ul>

                    <ul className={`marquee capitalize text-xl ${style.skillsMarqueeRight}`}>
                        <li>
                        <Image  
                            src="/flutter.svg"
                            alt = "flutter logo"
                            height={500}
                            width={500}
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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
                            className='mr-20 h-14 md:h-10 md:mr-10'
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