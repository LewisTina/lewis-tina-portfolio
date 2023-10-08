import { useEffect, useState } from "react";
import SwitchLang from "../core/SwitchLang";
import SwitchTheme from "../core/SwitchTheme";
import NavBarLink from "./NavBarLink";
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700']
    }
  )

export default function Navbar(props: any){
    const [active, setActive] = useState(0)

    useEffect(() => {
        const id = ["homeLink", "aboutLink", "skillsLink", "projectsLink", "hire_meLink"]
        var activeSelector = document.getElementById(id[active]);
        var activeSelectorWidth = activeSelector?.offsetWidth;
        var activeSelectorLeft = activeSelector?.offsetLeft;

        var selector = document.getElementById("selector");
        selector!.style.width = `${activeSelectorWidth}` + "px"
        selector!.style.left = `${activeSelectorLeft}` + "px"

    }, [active])
    
    return(
        <header className="w-full fixed p-10 flex justify-center z-50 md:p-4 lg:p-6">
            <div className="max-w-[1535px] w-full flex justify-between">
                <div className="">
                </div>

                <div className="relative rounded-full h-10 bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl sm:hidden">
                    <div className={`absolute rounded-full h-full transition-all duration-300 bg-primary z-10`} id='selector'></div>
                    <NavBarLink path={"/"} label={"home"} action={()=> {setActive(0)}}/>
                    <NavBarLink path={"/#about"} label={"about"} action={()=> {setActive(1)}}/>
                    <NavBarLink path={"/#skills"} label={"skills"} action={()=> {setActive(2)}}/>
                    <NavBarLink path={"/#projects"} label={"projects"} action={()=> {setActive(3)}}/>
                    <NavBarLink path={"/#hire_me"} label={"hire_me"} action={()=> {setActive(4)}}/>
                </div>

                <div className={`rounded-full h-10 bg-light-grey/25 flex items-center px-1 backdrop-blur-xl border-2 border-light-grey/25 ${dm_sans.className}`}>
                    <SwitchLang></SwitchLang>
                    <SwitchTheme></SwitchTheme>
                </div>
            </div>
        </header>
    )
}