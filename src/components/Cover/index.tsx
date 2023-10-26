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
        <section className="relative h-[calc(100vh+7rem)] md:h-[calc(100vh-7rem)] lg:h-[calc(70vh)] min-h-[700px] md:min-h-[45rem] flex justify-center w-full bg-white dark:bg-darkest bg-cover-bg bg-no-repeat bg-right-top bg-contain z-0 max-h-[1114px]" id="home">
            <div className="absolute h-full w-full flex items-center justify-center lg:h-[50vh] bg-cover-glow lg:bg-contain bg-no-repeat bg-center">
            </div>

            <div className="absolute h-full w-full bg-cover-noise bg-no-repeat bg-cover mix-blend-overlay dark:mix-blend-normal">
            </div>
            
            <div className="absolute h-full w-full flex flex-col justify-center md:items-start px-16 pb-16 md:pb-4 max-w-[1535px] md:px-4 lg:px-8">
                <div className="my-4"></div>
                
                <div className="flex flex-col items-start justify-start">
                    
                    <div className="pb-8 md:pb-4 lg:pb-0">
                        <h1 className="flex flex-col dark:mix-blend-difference">
                            <span className="text-4xl xl:text-3xl md:text-2xl leading-normal text-darkest dark:text-white block">{t("hi")}&nbsp;😃,</span>
                            <span className="text-8xl xl:text-7xl md:text-5xl text-secondary">{t('iam')}&nbsp;</span>
                            <span className="text-8xl xl:text-7xl md:text-5xl text-secondary ">Lewis TINA</span>
                            <span className="hidden">&nbsp;</span>
                            <span className="text-4xl xl:text-3xl md:text-2xl leading-normal text-darkest dark:text-white block">Web & Mobile Dev <br/> Graphic & UI Designer</span>
                        </h1>
                    </div>

                    <CustomButton 
                        rightIcon={
                            <span className="material-symbols-outlined pl-4">&#xf8ce;</span>
                        }
                        bgColor={"bg-secondary"} 
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
            </div>
            

            <div className="absolute h-full flex items-center justify-center lg:h-[50vh] transition-all w-full pointer-events-none">
                <div className="h-auto lg:w-2/6 sm:w-3/5 w-[30rem] mr-[5rem] lg:mr-0 aspect-square animate-float">
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