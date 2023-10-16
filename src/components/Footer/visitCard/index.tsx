import useTranslation from 'next-translate/useTranslation'
import style from '../../projects/index.module.scss'
import Link from 'next/link'
import CustomButton from '@/components/button'

export default function VisitCard(props: any) {
    const {t} = useTranslation('common')
    const {className} = props
    return (
        <div className="group md:-right-2 duration-300 md:h-[unset] md:w-[calc(100%-1rem)] md:max-w-[420px] md:m-4 bg-gradient-to-r animate-gradient-xy from-light-grey/5 via-deep-purple to-light-grey/25 p-[1px] aspect-[1.75/1] h-60 rounded-2xl overflow-hidden hover:shadow-2xl shadow-black absolute right-16 lg:right-8 -translate-y-full md:-translate-y-80">
                
                <div className="relative w-full h-full  bg-white dark:bg-darkest rounded-[15px] overflow-hidden ">
                <div className="z-[1] absolute w-full h-full">
                    <div className={`flex w-full flex-wrap overflow-hidden ${style.gradient_mask_3}`}>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square group-hover:bg-primary/20"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square group-hover:bg-primary/20"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square group-hover:bg-primary/70"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square group-hover:bg-primary/20"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square"></div>
                        <div className="transition duration-700 hover:duration-100 border-l-[1px] border-b-[1px] border-light-grey/25 hover:bg-primary/50 w-1/6 aspect-square group-hover:bg-primary/50"></div>
                    </div>  
                </div>

                <div className="z-0 absolute right-0 h-20 w-20 group-hover:bg-primary blur-3xl duration-500 transition-all">

                </div>
                
                <div className={`z-10 ${className} relative flex flex-col w-min justify-center items-start h-full p-2 px-4`}>
                    <a href="tel:+330767914587">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4 text-lg">phone</span>
                        }
                        bgColor={"bg-transparent"} 
                        color={"text-deep-purple"} 
                        className={"font-bold my-1 border-2 border-deep-purple hover:shadow-xl duration-150"}
                        label={t("call_me")} 
                        action={undefined}/>
                    </a>

                    <a href="sms:+330767914587?body=Hey20%Lewis">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4 text-lg">sms</span>
                        }
                        bgColor={"bg-[#35DB00]"} 
                        color={"text-white"} 
                        className={"font-bold my-1 hover:shadow-xl duration-150"}
                        label={t("drop_message")} 
                        action={undefined}/>
                    </a>

                    <a href="mailto:contact@lewistina.com">
                    <CustomButton 
                        leftIcon={
                            <span className="material-symbols-outlined pr-4 text-lg">email</span>
                        }
                        bgColor={"bg-transparent"} 
                        color={"text-primary"} 
                        className={"font-bold my-1 border-2 border-primary hover:shadow-xl duration-150"}
                        label={t("email_me")} 
                        action={undefined}/>
                    </a>
                </div>
                </div>
        </div>
    )
}