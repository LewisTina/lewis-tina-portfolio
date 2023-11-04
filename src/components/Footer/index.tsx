import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import style from './index.module.scss'
import Image from "next/image"
import Link from "next/link";
import { DM_Sans } from 'next/font/google'
import VisitCard from "./visitCard";

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700'],
      display: 'swap',
    }
  )


export default function Footer(props: any) {
    const {t} = useTranslation('common')
    return(
        <footer className="w-full flex justify-center bg-primary dark:bg-black/70 text-white">
            <div className="px-16 py-8 max-w-[1535px] w-full h-auto md:px-4 lg:px-8 relative">
                    <a href="/cvfile_aboutou_review2023.pdf" download="CV ABOUTOU TINA Pierre Lewis Review 2023 FS DEV.pdf" className={"md:mt-32 flex max-w-max"}>
                        <CustomButton 
                            leftIcon={
                                <span className="material-symbols-outlined pr-4">&#xe5db;</span>
                            }
                            bgColor={"bg-white dark:bg-deep-purple"} 
                            color={"text-deep-purple dark:text-white"} 
                            label={t("download_resume")} 
                            action={undefined}/>
                    </a>

                <VisitCard className={`${dm_sans.className} `}/>

                <div className="flex justify-between py-10 items-end border-b-2 border-white/25 md:flex-col md:justify-start md:items-start lg:items-start">
                    <div className="max-w-[45%] md:max-w-full lg:max-w-[65%]">
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <circle cx="16.7887" cy="16.2113" r="15.7113" stroke="white"/>
                            <circle cx="16.7887" cy="16.2112" r="12.2999" stroke="white"/>
                        </svg>

                        <span className="text-4xl flex mx-2">
                            Lewis Tina
                        </span>
                        </div>

                        <p className={`${dm_sans.className} py-4  text-justify word-spacing`}>
                            {t('conclusion')}
                        </p>
                    </div>

                    
                    <div className="max-w-[55%] lg:max-w-[35%] flex items-start lg:flex-col md:justify-start md:items-start md:mt-10">
                        <div className="mx-10 md:my-2"></div>
                        <div className="">
                            <h2 className="capitalize">
                                {t("social_media")}
                            </h2>

                            <div className="flex my-3">
                                <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pierre-lewis-aboutou-tina-113810234/" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-xl fa fa-linkedin transition"></i>
                                </Link>
                                &nbsp;

                                <Link target="_blank" rel="noreferrer" href="https://www.behance.net/lewistinaab" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-xl fa fa-behance transition"></i>
                                </Link>
                                &nbsp;
                                
                                <Link target="_blank" rel="noreferrer" href="https://github.com/LewisTina" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-3xl fa fa-github transition"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${dm_sans.className} flex items-center justify-between py-10 sm:pt-0 lg:flex-col-reverse lg:items-start md:text-start md:justify-start`}>

                    <div className="block">
                        <span className="">Designed and powered with love and fresh water by</span>
                        <span className="text-white font-bold dark:text-secondary">&nbsp; {'Lewis TINA'}</span>
                    </div>

                    <div className="flex capitalize md:w-full lg:my-4 lg:pb-4 sm:flex-col md:border-b-2 border-white/25">
                        <Link href="/legal" className="ml-4 lg:ml-0 lg:mr-4 flex mt-1 py-1 hover:border-b-white hover:border-b">
                            {t("legal")}
                        </Link>
                        &nbsp;
                        <Link href="/legal#cgu" className="ml-4 lg:ml-0 lg:mr-4 flex mt-1 py-1 hover:border-b-white hover:border-b">
                            {t("terms_and_services")}
                        </Link>
                        &nbsp;
                        <Link href="/legal#privacy" className="ml-4 lg:ml-0 lg:mr-4 flex mt-1 py-1 hover:border-b-white hover:border-b">
                            {t("privacy")}
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}