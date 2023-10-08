import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import DripEffect from "./abstractDrop";
import BubbleEffect from "./abstractDrop";

export default function Cover(props: any){
    const {t} = useTranslation('common')
    return(
        <section className="relative h-[calc(100vh+7rem)] md:h-[39rem] flex justify-center w-full bg-white dark:bg-darkest bg-cover-bg bg-no-repeat bg-right-top bg-contain z-0 max-h-[1114px]" id="home">
            <div className="absolute h-full w-full bg-cover-glow bg-no-repeat bg-center">
            </div>

            <div className="absolute h-full w-full bg-cover-noise bg-no-repeat bg-cover mix-blend-overlay dark:mix-blend-normal">
            </div>
            

            <div className="absolute h-full sm:h-[60vh] w-full mix-blend-normal">
                <BubbleEffect/>
            </div>
            
            <div className="absolute h-full w-full flex items-center md:items-end px-16 pb-16 md:pb-32 max-w-[1535px] md:px-4 lg:px-8">
                <div className="flex flex-col items-start justify-start">
                    
                    <div className="pb-8 lg:pb-0">
                        <h1 className="flex flex-col dark:mix-blend-difference">
                            <span className="text-4xl md:text-2xl leading-normal text-darkest dark:text-white block">{t("hi")}&nbsp;😃,</span>
                            <span className="text-8xl md:text-5xl text-primary">{t('iam')}&nbsp;</span>
                            <span className="text-8xl md:text-5xl text-primary ">Lewis TINA</span>
                            <span className="text-4xl md:text-2xl leading-normal text-darkest dark:text-white block">Web & Mobile Dev <br/> Graphic & UI Designer</span>
                        </h1>
                    </div>

                    <CustomButton 
                        rightIcon={
                            <span className="material-symbols-outlined pl-4">arrow_outward</span>
                        }
                        bgColor={"bg-primary"} 
                        color={"text-white"} 
                        label={t("hire_me")} 
                        action={undefined}/>

                    <a href="/cvfile_aboutou_review2023.pdf" download="CV ABOUTOU TINA Pierre Lewis Review 2023 FS DEV.pdf">
                        <CustomButton 
                            leftIcon={
                                <span className="material-symbols-outlined pr-4">arrow_downward</span>
                            }
                            bgColor={"bg-deep-purple"} 
                            color={"text-white"} 
                            label={t("download_resume")} 
                            action={undefined}/>
                    </a>
                </div>
            </div>
        </section>
    )
}