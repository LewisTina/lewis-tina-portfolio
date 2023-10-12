import { useEffect, useState } from "react";
import SwitchLang from "../core/SwitchLang";
import SwitchTheme from "../core/SwitchTheme";
import SideBarLink from "./SideBarLink";
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700']
    }
  )

export default function Sidebar(props: any){
    const [active, setActive] = useState(99)

    useEffect(() => {
        const id = ["legalLink", "terms_and_servicesLink", "privacy_policy_titleLink"]
        var activeSelector = document.getElementById(id[active]);
        var activeSelectorTop = activeSelector?.offsetTop;
        var activeSelectorHeight = activeSelector?.offsetHeight;

        var selector = document.getElementById("side-selector");
        selector!.style.top = `${activeSelectorTop! + ((activeSelectorHeight! - 12) / 2)}` + "px"

    }, [active])
    
    return(
        <div className={`w-72 relative p-4 z-50 md:p-4 lg:p-6  ${dm_sans.className} lg:hidden`}>
            <div className="w-full flex-col justify-between relative">

                <div className="fixed pl-10 pr-2 flex flex-col w-72">
                    <div className={`absolute rounded-full h-3 w-3 transition-all duration-300 bg-secondary z-50 left-9`} id='side-selector'></div>
                    <SideBarLink path={"#legal"} label={"legal"} action={()=> {setActive(0)}}/>
                    <SideBarLink path={"#cgu"} label={"terms_and_services"} action={()=> {setActive(1)}}/>
                    <SideBarLink path={"#privacy"} label={"privacy_policy_title"} action={()=> {setActive(2)}}/>
                </div>

            </div>
        </div>
    )
}