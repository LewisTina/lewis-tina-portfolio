import useTranslation from 'next-translate/useTranslation'
import CustomButton from '@/components/button'

export default function VisitCard() {
    const {t} = useTranslation('common')
    return (
        <>
            <a href="tel:+330767914587">
            <CustomButton 
                leftIcon={
                    <span className="material-symbols-outlined text-lg leading-none">&#xe0b0;</span>
                }
                bgColor={"bg-white dark:bg-darkest"} 
                color={"text-deep-purple"} 
                className={"font-medium text-sm !my-0 !px-4 hover:shadow-lg duration-150"}
                label={t("call_me")} 
                action={undefined}/>
            </a>

            <a href="sms:+330767914587?body=Hey Lewis, je vous contacte depuis votre site web, seriez vous disponible pour que nous puissions échanger ?">
            <CustomButton 
                leftIcon={
                    <span className="material-symbols-outlined text-lg leading-none">&#xe625;</span>
                }
                bgColor={"bg-white dark:bg-darkest"} 
                color={"text-[#34bf00]"} 
                className={"font-medium text-sm !my-0 !px-4 hover:shadow-lg duration-150"}
                label={t("drop_message")} 
                action={undefined}/>
            </a>

            <a href="mailto:contact@lewistina.com">
            <CustomButton 
                leftIcon={
                    <span className="material-symbols-outlined text-lg leading-none">&#xe158;</span>
                }
                bgColor={"bg-white dark:bg-darkest"} 
                color={"text-primary"} 
                className={"font-medium text-sm !my-0 !px-4 hover:shadow-lg duration-150"}
                label={t("email_me")} 
                action={undefined}/>
            </a>
        </>
    )
}