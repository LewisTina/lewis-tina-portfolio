import { useRouter } from "next/router"
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";

interface linkProps {
    path: string
    label: string
    action: () => void
}

export default function NavBarLink(props: linkProps) {
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
            <Link href={path} onClick={action} id={label + 'Link'} className="z-20">
                <div className={`flex text-xs h-full px-10 lg:px-6 items-center`}>
                    <span className={`
                    capitalize transition-all duration-300
                    ${isActive ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                        {t(label)}
                    </span>
                </div>
            </Link>
    )
}