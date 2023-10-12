import { useEffect, useState } from "react";
import SwitchLang from "../core/SwitchLang";
import SwitchTheme from "../core/SwitchTheme";
import NavBarLink from "./NavBarLink";
import { DM_Sans } from 'next/font/google'
import Link from "next/link";

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700']
    }
  )

export default function Navbar(props: any){
    const [active, setActive] = useState(99)

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

                <Link href='/' className={`rounded-full h-10 bg-white border-2 border-light-grey/50 flex items-center p-1 backdrop-blur-xl ${dm_sans.className}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none" className='h-full'>
                            <circle cx="16.7887" cy="16.2113" r="15.7113" className='stroke-primary'/>
                            <circle cx="16.7887" cy="16.2112" r="12.2999" className='stroke-primary'/>
                        </svg>
                </Link>

                <div className="relative rounded-full h-10 bg-light-grey/25 border-2 border-light-grey/25 flex backdrop-blur-xl sm:hidden">
                    <div className={`absolute rounded-full h-full transition-all duration-300 bg-primary z-10`} id='selector'></div>
                    <NavBarLink path={"/"} label={"home"} action={()=> {setActive(0)}}/>
                    <NavBarLink path={"/#about"} label={"about"} action={()=> {setActive(1)}}/>
                    <NavBarLink path={"/#skills"} label={"skills"} action={()=> {setActive(2)}}/>
                    <NavBarLink path={"/#projects"} label={"projects"} action={()=> {setActive(3)}}/>
                    <NavBarLink path={"/#hire_me"} label={"hire_me"} action={()=> {setActive(4)}}/>
                </div>

                <div className={`rounded-full h-10 bg-light-grey/25 flex items-center px-1 backdrop-blur-xl border-2 border-light-grey/25 font-semibold ${dm_sans.className}`}>
                    <SwitchLang></SwitchLang>
                    <SwitchTheme></SwitchTheme>
                </div>
            </div>
        </header>
    )
}