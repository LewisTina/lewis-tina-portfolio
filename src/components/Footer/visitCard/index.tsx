import useTranslation from 'next-translate/useTranslation'
import style from '../../portfolio/index.module.scss'
import Link from 'next/link'
import CustomButton from '@/components/button'

export default function VisitCard(props: any) {
    const {t} = useTranslation('common')
    const {className} = props
    return (
        <div className="md:-left-2 md:h-[unset] md:w-[calc(100%-1rem)] md:m-4 md:rel bg-gradient-to-r animate-gradient-xy from-light-grey/5 via-deep-purple to-light-grey/25 p-[1px] aspect-[1.75/1] h-60 rounded-2xl overflow-hidden hover:shadow-2xl shadow-black absolute right-16 -translate-y-full md:-translate-y-80">
                
                <div className="relative w-full h-full  bg-white dark:bg-darkest rounded-[15px] overflow-hidden ">
                <div className="-z-10 absolute w-full h-full">
                    <div className={`flex w-full flex-wrap overflow-hidden ${style.gradient_mask_3}`}>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] hover:bg-primary/50 w-1/5 aspect-square"></div>
                    </div>  
                </div>
                
                <div className={`${className} flex flex-col justify-center items-center h-full p-2 px-4`}>
                    <a href="tel:+330767914587">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4">phone</span>
                        }
                        bgColor={"bg-deep-purple/25"} 
                        color={"text-deep-purple"} 
                        className={"font-bold"}
                        label={t("call_me")} 
                        action={undefined}/>
                    </a>

                    <a href="sms:+330767914587?body=Hey%Lewis">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4">sms</span>
                        }
                        bgColor={"bg-[#35DB00]"} 
                        color={"text-white"} 
                        className={"font-bold"}
                        label={t("drop_message")} 
                        action={undefined}/>
                    </a>

                    <a href="mailto:contact@lewistina.com">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4">email</span>
                        }
                        bgColor={"bg-primary/25"} 
                        color={"text-primary"} 
                        className={"font-bold"}
                        label={t("email_me")} 
                        action={undefined}/>
                    </a>
                </div>
                </div>
        </div>
    )
}