import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import DripEffect from "./abstractDrop";
import BubbleEffect from "./abstractDrop";

export default function Cover(props: any){
    const {t} = useTranslation('common')
    return(
        <section className="relative h-[calc(100vh+7rem)] flex justify-center w-full bg-white dark:bg-darkest bg-cover-bg bg-no-repeat bg-right-top bg-contain z-0 max-h-[1114px]" id="home">
            <div className="absolute h-full w-full bg-cover-glow bg-no-repeat bg-center">
            </div>

            <div className="absolute h-full w-full bg-cover-noise bg-no-repeat bg-cover mix-blend-overlay dark:mix-blend-normal">
            </div>
            
            <div className="absolute h-full w-full flex items-center px-16 pb-16 max-w-[1535px]">
                <div className="flex flex-col items-start justify-start">
                    
                    <div className="pb-8">
                        <p className="flex flex-col">
                            <span className="text-4xl leading-normal text-darkest dark:text-white block">{t("hi")}&nbsp;😃,</span>
                            <span className="text-8xl text-secondary">{t('iam')}</span>
                            <span className="text-8xl text-secondary ">Lewis TINA</span>
                            <span className="text-4xl leading-normal text-darkest dark:text-white block">Web & Mobile Dev <br/> Graphic & UI Designer</span>
                        </p>
                    </div>

                    <CustomButton 
                        rightIcon={
                            <span className="material-symbols-outlined pl-4">arrow_outward</span>
                        }
                        bgColor={"bg-secondary"} 
                        color={"text-white"} 
                        label="hire_me" 
                        action={undefined}/>
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4">arrow_downward</span>
                        }
                        bgColor={"bg-deep-purple"} 
                        color={"text-white"} 
                        label="download_resume" 
                        action={undefined}/>
                </div>
            </div>

            <div className="absolute h-full w-full mix-blend-darken dark:mix-blend-difference">
                <BubbleEffect/>
            </div>
        </section>
    )
}