import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SwitchToggle(props: {activeSkills: string; setActiveSkills: any}){
    const {activeSkills, setActiveSkills} = props
    const router = useRouter()
    const tab = router.query.tab as "app" | "design"

    useEffect(()=> {
        if(!!tab) {
            setActiveSkills(tab)
        }
    }, [tab, setActiveSkills])

    useEffect(() => {
        const id: any = {app: "app_toggle", design: "design_toggle"}
        var activeIndicator = document.getElementById(id[activeSkills]);
        var activeIndicatorWidth = activeIndicator?.offsetWidth;
        var activeIndicatorLeft = activeIndicator?.offsetLeft;

        var indicator = document.getElementById("indicator");
        indicator!.style.width = `${activeIndicatorWidth}` + "px"
        indicator!.style.left = `${activeIndicatorLeft}` + "px"

    }, [activeSkills])

    return(
        <div className="flex">
        <div className="relative self-start rounded-full h-10 my-4 bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl max-w-full sm:w-full">
            <div className={`absolute rounded-full h-full transition-all duration-300 bg-primary -z-10`} id='indicator'>
            </div>

            <div className="flex h-full px-6 items-center rounded-full cursor-pointer sm:w-1/2 sm:px-4" id='app_toggle' 
                    onClick={()=> setActiveSkills("app")}>
                <span className={`
                    capitalize transition-all duration-300 text-ellipsis inline-block whitespace-nowrap overflow-hidden
                    ${activeSkills == "app" ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                    App & Websites
                </span>
            </div>
            
            <div className="flex h-full px-6 items-center rounded-full cursor-pointer sm:w-1/2 sm:px-4" id="design_toggle" 
                    onClick={()=> setActiveSkills("design")}>
                <span className={`
                    capitalize transition-all duration-300 text-ellipsis inline-block whitespace-nowrap overflow-hidden
                    ${activeSkills == "design" ? "text-white" : "text-darkest dark:text-light-grey"}`}>
                    Design & Branding
                </span>
            </div>
        </div>
    </div>
    )
}