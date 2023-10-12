import { useRouter } from "next/router"
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";

interface linkProps {
    path: string
    label: string
    action: () => void
}

export default function SideBarLink(props: linkProps) {
    const {t} = useTranslation('common')
    const {path, label, action} = props
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const activePath = router.asPath

    useEffect(()=>{
        if(activePath == (path)){
            setIsActive(true)
            action()
        }
        else{
            setIsActive(false)
        }
    },[activePath, path, action])

    return (
            <Link href={path} onClick={action} id={label + 'Link'} className="z-20 w-full flex">
                <div className={`flex w-full px-4 py-3 lg:px-6 items-center border-l-2`}>
                    <span className={`
                    capitalize transition-all duration-300
                    text-ellipsis inline-block whitespace-nowrap overflow-hidden
                    hover:text-secondary
                    ${isActive ? "font-bold text-darkest dark:text-light-grey" : "font-semibold text-gray-500"}`}>
                        {t(label)}
                    </span>
                </div>
            </Link>
    )
}