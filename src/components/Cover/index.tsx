import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from './cover.module.scss'

export default function Cover(props: any){
    const {t} = useTranslation('common')
    const router = useRouter()
    return(
        <section className={`${styles.frame} dela-gothic-one bg-white dark:bg-darkest`} id="home">
            <div className={styles.colorSplash}>
            </div>

            <div className={`${styles.noise} mix-blend-overlay dark:mix-blend-normal`}>
            </div>
            
            <div className="relative h-full w-full flex flex-col justify-center md:items-start max-w-[1535px]">
                <div className="flex flex-col items-start justify-start">
                    <div className="pb-8">
                        <h1 className="flex flex-col gap-4 dark:mix-blend-difference">
                            <span className={`text-darkest dark:text-white ${styles['title-medium']}`}>{t("hi")}&nbsp;😃,</span>
                            <span className={styles['title-large']}>{`${t('iam')}\nLewis TINA`}</span>
                            <span className={`text-darkest dark:text-white ${styles['title-medium']}`}>Web & Mobile Dev <br/> Graphic & UI Designer</span>
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
            </div>
            

            <div className="absolute h-full flex items-center justify-center lg:h-[50vh] transition-all w-full pointer-events-none">
                <div className="h-auto lg:w-3/5 w-[30rem] mr-[5rem] lg:mr-0 aspect-square animate-float">
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