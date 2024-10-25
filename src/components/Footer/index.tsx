import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import Link from "next/link";
import styles from './footer.module.scss'
import VisitCard from "./visitCard";

export default function Footer(props: any) {
    const {t} = useTranslation('common')
    return(
        <footer className="w-full flex flex-col justify-center bg-primary dark:bg-black text-white px-10 md:px-4 lg:px-6 relative">
            <div className={`${styles.contactFrame} bg-primary dark:bg-black before:bg-custom-light-gray before:dark:bg-dark-grey after:bg-custom-light-gray after:dark:bg-dark-grey`}>
                <div className={`${styles.fakeBand} bg-primary dark:bg-black`}></div>
                <VisitCard/>
            </div>
            <div className="pt-16 max-w-[1535px] w-full h-auto relative flex flex-col gap-10 md:gap-8">

                <div className="flex justify-between items-end gap-6 md:gap-10 md:flex-col md:justify-start md:items-start lg:items-start">
                    <div className="max-w-[45%] md:max-w-full lg:max-w-[65%] flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <circle cx="16.7887" cy="16.2113" r="15.7113" stroke="white"/>
                                <circle cx="16.7887" cy="16.2112" r="12.2999" stroke="white"/>
                            </svg>

                            <h2 className="text-4xl flex">
                                Lewis Tina
                            </h2>
                        </div>

                        <p className={`text-sm`}>
                            {t('conclusion')}
                        </p>
                    </div>

                    
                    <div className="max-w-[55%] md:max-w-full lg:max-w-[35%] flex items-start lg:flex-col md:justify-start md:items-start">
                        <div className="flex flex-col items-end md:items-start gap-6">
                            <h2 className="capitalize">
                                {t("social_media")}
                            </h2>

                            <div className="flex gap-4">
                                <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pierre-lewis-aboutou-tina-113810234/" className="bg-white/25 rounded-full flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-xl fa fa-linkedin transition"></i>
                                </Link>

                                <Link target="_blank" rel="noreferrer" href="https://www.behance.net/lewistinaab" className="bg-white/25 rounded-full flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-xl fa fa-behance transition"></i>
                                </Link>
                                
                                <Link target="_blank" rel="noreferrer" href="https://github.com/LewisTina" className="bg-white/25 rounded-full flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-3xl fa fa-github transition"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                <a href="/cvfile_aboutou_review2023.pdf" download="CV ABOUTOU TINA Pierre Lewis Review 2023 FS DEV.pdf" className={"flex max-w-max dela-gothic-one"}>
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4">&#xe5db;</span>
                        }
                        bgColor={"bg-white dark:bg-deep-purple"} 
                        color={"text-deep-purple dark:text-white"} 
                        label={t("download_resume")} 
                        action={undefined}/>
                </a>

                <div className={`flex gap-6 text-sm items-center justify-between py-8 lg:pt-0 lg:pb-6 lg:flex-col-reverse lg:items-start lg:text-start lg:justify-start border-t-2 border-white/25`}>

                    <div className="block">
                        <span className="">Designed and powered with love and fresh water by</span>
                        <span className="text-white font-bold dark:text-secondary">&nbsp; {'Lewis TINA'}</span>
                    </div>

                    <div className="flex capitalize lg:w-full lg:py-4 gap-4 sm:flex-col lg:border-b-2 border-white/25">
                        <Link href="/legal" className="flex py-2 px-1 border-transparent hover:border-b-white border-b">
                            {t("legal")}
                        </Link>
                        <Link href="/legal#cgu" className="flex py-2 px-1 border-transparent hover:border-b-white border-b">
                            {t("terms_and_services")}
                        </Link>
                        <Link href="/legal#privacy" className="flex py-2 px-1 border-transparent hover:border-b-white border-b">
                            {t("privacy")}
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}