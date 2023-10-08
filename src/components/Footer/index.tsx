import useTranslation from "next-translate/useTranslation";
import CustomButton from "../button";
import { DM_Sans } from 'next/font/google'
import style from './index.module.scss'
import Image from "next/image"
import Link from "next/link";

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700']
    }
  )


export default function Footer(props: any) {
    const {t} = useTranslation('common')
    return(
        <footer className="w-full flex justify-center bg-primary dark:bg-black/70 text-white" id="hire_me">
            <div className="px-16 py-8 max-w-[1535px] w-full h-auto">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4">arrow_downward</span>
                        }
                        bgColor={"bg-white dark:bg-deep-purple"} 
                        color={"text-deep-purple dark:text-white"} 
                        label="download_resume" 
                        action={undefined}/>


                <div className="flex justify-between py-10 items-end border-b-2 border-white/25">
                    <div className="max-w-[45%]">
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <circle cx="16.7887" cy="16.2113" r="15.7113" stroke="white"/>
                            <circle cx="16.7887" cy="16.2112" r="12.2999" stroke="white"/>
                        </svg>

                        <span className="text-4xl flex mx-2">
                            Lewis Tina
                        </span>
                        </div>

                        <p className={`${dm_sans.className} py-4`}>
                            {t('conclusion')}
                        </p>
                    </div>

                    
                    <div className="max-w-[55%] flex items-start">
                        <div className="">
                            <h1 className="capitalize mx-4">
                                {t("hire_me")}
                            </h1>

                            <div className={`${dm_sans.className} flex flex-col my-3`}>
                                <Link href="mailto:contact@lewistina.com" className="rounded-full mt-1 px-4 py-1 hover:bg-white hover:text-primary hover:dark:text-black ">
                                    contact@lewistina.com
                                </Link>
                                <Link href="tel:+330767914587" className="rounded-full mt-1 px-4 py-1 flex hover:bg-white hover:text-primary hover:dark:text-black ">
                                    +33 07 67 91 45 87
                                </Link>
                            </div>
                        </div>
                        <div className="mx-10"></div>
                        <div className="">
                            <h1 className="capitalize">
                                {t("social_media")}
                            </h1>

                            <div className="flex my-3">
                                <Link href="https://www.facebook.com/" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-xl fa fa-linkedin transition"></i>
                                </Link>
                                
                                <Link href="https://www.instagram.com/" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-xl fa fa-behance transition"></i>
                                </Link>

                                <Link href="https://twitter.com/" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-3xl fa fa-github transition"></i>
                                </Link>
                                
                                <Link href="https://www.whatsapp.com/" className="bg-white/25 rounded-full my-4 mr-4 flex justify-center items-center h-10 aspect-square hover:bg-white hover:text-primary hover:dark:text-black ">
                                    <i className="text-2xl fa fa-instagram transition"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${dm_sans.className} flex items-center justify-between py-10`}>

                    <div className="flex">
                        <span className="">Designed and powered with love and water by</span>
                        <span className="text-white font-bold dark:text-secondary">&nbsp; {t('Lewis TINA')}</span>
                    </div>

                    <div className="flex">
                        <Link href="https://www.facebook.com/" className="rounded-full my-1 px-4 py-1 hover:bg-white hover:text-primary hover:dark:text-black ">
                            {t("terms_and_services")}
                        </Link>
                        <Link href="tel:+330767914587" className="rounded-full my-1 px-4 py-1 flex hover:bg-white hover:text-primary hover:dark:text-black ">
                            {t("privacy")}
                        </Link>
                        <Link href="tel:+330767914587" className="rounded-full my-1 px-4 py-1 flex hover:bg-white hover:text-primary hover:dark:text-black ">
                            {t("cookies")}
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}