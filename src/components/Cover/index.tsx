import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import DripEffect from "./abstractDrop";
import BubbleEffect from "./abstractDrop";
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Cover(props: any){
    const {t} = useTranslation('common')
    const router = useRouter()
    return(
        <section className="relative h-[calc(100vh+7rem)] sm:h-screen md:min-h-[45rem] flex justify-center w-full bg-white dark:bg-darkest bg-cover-bg bg-no-repeat bg-right-top bg-contain z-0 max-h-[1114px]" id="home">
            <div className="absolute h-full w-full bg-cover-glow bg-no-repeat bg-center  md:hidden">
            </div>

            <div className="absolute h-full w-full bg-cover-noise bg-no-repeat bg-cover mix-blend-overlay dark:mix-blend-normal">
            </div>
            
            <div className="absolute h-full w-full flex flex-col justify-center md:items-start px-16 pb-16 md:pb-4 max-w-[1535px] md:px-4 lg:px-8">
                <div className="my-4"></div>
                
                <div className="flex flex-col items-start justify-start">
                    
                    <div className="pb-8 md:pb-4 lg:pb-0">
                        <h1 className="flex flex-col dark:mix-blend-difference">
                            <span className="text-4xl md:text-2xl leading-normal text-darkest dark:text-white block">{t("hi")}&nbsp;😃,</span>
                            <span className="text-8xl md:text-5xl text-primary">{t('iam')}&nbsp;</span>
                            <span className="text-8xl md:text-5xl text-primary ">Lewis TINA</span>
                            <span className="text-4xl md:text-2xl leading-normal text-darkest dark:text-white block">Web & Mobile Dev <br/> Graphic & UI Designer</span>
                        </h1>
                    </div>

                    <CustomButton 
                        rightIcon={
                            <span className="material-symbols-outlined pl-4">&#xf8ce;</span>
                        }
                        bgColor={"bg-primary"} 
                        color={"text-white"} 
                        label={t("hire_me")} 
                        action={() => {router.push("#hire_me")}}/>

                    <a href="/cvfile_aboutou_review2023.pdf" download="CV ABOUTOU TINA Pierre Lewis Review 2023 FS DEV.pdf">
                        <CustomButton 
                            leftIcon={
                                <span className="material-symbols-outlined pr-4">&#xe5db;</span>
                            }
                            bgColor={"bg-deep-purple"} 
                            color={"text-white"} 
                            label={t("download_resume")} 
                            action={undefined}/>
                    </a>
                </div>
                    
                    <div className="flex items-center justify-end md:mt-10 w-full mb-10 md:mb-0">
                    <div className="w-32 aspect-square border-2 border-secondary rounded-full flex flex-col items-center justify-center duration-700 cursor-pointer animate-pulse delay-1000" onClick={() => router.push("/portfolio")} style={{animationDelay: "3s"}}>
                        <span className="coolvetica text-5xl">
                            Portfolio
                        </span>
                        <svg className="w-6 h-6 stroke-secondary -rotate-90" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>
            

            <div className="absolute h-full flex items-center justify-center sm:h-[50vh] transition-all w-full pointer-events-none">
                <div className="h-auto lg:w-1/2 sm:w-3/5 w-[35rem] aspect-square animate-float">
                    {/* <BubbleEffect/> */}
                    <div className="w-full h-full relative">
                        <Image  
                            src={"/static_bubble.png"}
                            alt = {"static abstract bubble"}
                            width={500}
                            height={500}
                            sizes="100vw"
                            draggable="false"
                            priority={true}
                            className={"min-h-full h-full md:min-h-[unset] md:h-auto md:w-full w-auto object-cover object-left"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}