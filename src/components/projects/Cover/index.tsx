import { useRouter } from "next/router"
import style from "./index.module.scss"
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700', '800', '900'],
      display: 'swap',
    }
  )

export default function PortfolioCover(){
    const router = useRouter()
    return(
        <div className={`relative h-screen min-h-[700px] sm:h-[45rem] flex justify-center w-full z-0 snap-y max-h-[1114px]`}>
            <div className="flex items-center px-16 md:pb-28 max-w-[1535px] w-full h-full bg-portfolio-cover-bg bg-no-repeat bg-contain sm:bg-cover bg-right md:px-4 lg:px-8 overflow-hidden">
            <div className={`${style.content}  ${style.gradient_mask} ${dm_sans.className} overflow-hidden whitespace-pre-line bg-white/25 dark:bg-black/25 border-2 border-light-grey/50 flex flex-col items-start justify-between backdrop-blur-xl rounded-3xl w-2/5 min-w-[500px] sm:w-full lg:w-full lg:min-w-[unset] mx-8 md:mx-0 p-[4%] md:p-6 mt-32 md:mt-40 h-[calc(100%-7rem)] md:h-full`}>
                {/* <div className="-z-10 opacity-50 top-0 absolute h-full w-full bg-cover-noise bg-no-repeat bg-content mix-blend-multiply dark:mix-blend-normal">
                </div> */}
                <div className=""></div>

                <div className={`${style.title} flex flex-col items-start w-full mb-10`}>
                    <span className="text-7xl text-white leading-[0.70] flex mx-2 before:block before:absolute before:-z-10 before:-inset-4 xl:before:-inset-2 before:-skew-y-3 before:bg-deep-purple relative">
                        {"Lewis Tina's"}
                    </span>
                    {/* 
                    <h2 className="uppercase leading-[0.75] text-[24rem] xl:text-[8rem] bg-gradient-to-t from-darkest to-secondary">{"Portfolio"}</h2>
                     */}
                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 567.1626 269.51635" className="w-full my-8 md:mb-0">
                        <defs>
                            <linearGradient id="Dégradé_sans_nom_17559" data-name="Dégradé sans nom 17559" x1="283.5813" y1="268.2843" x2="283.5813" y2="1.23205" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#121212">
                                    <animate attributeName="stop-color" values="#0004ff; #121212; #007aff; #121212; #0004ff" dur="5s" repeatCount="indefinite"></animate>
                                </stop>
                                <stop offset="1" stop-color="#007aff">
                                    <animate attributeName="stop-color" values="#121212; #007aff; #0004ff; #007aff; #121212" dur="5s" repeatCount="indefinite"></animate>
                                </stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path d="M22.3208,163.8551V267.0885H0V2.42785H37.4668q13.94751,0,19.73,7.374,5.77295,7.37988,5.77929,20.12841v106.8208q0,12.761-5.77929,19.9292-5.78247,7.17481-19.73,7.17481Zm0-19.53076H32.68359q9.16481,0,9.16748-11.16065V32.3219q0-9.56618-9.16748-9.56641H22.3208Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M134.31689,234.80285q0,33.4812-31.48779,33.48145-32.28588,0-32.28564-33.87989V35.90881q0-16.74024,8.37011-25.7085,8.37085-8.9685,23.51661-8.96826,15.14355,0,23.5166,9.16748,8.37012,9.17358,8.37011,25.90821ZM112.395,34.31457q0-12.34937-9.96484-12.356-9.96753,0-9.96436,11.95752V235.99865q0,11.95752,9.96436,11.95752,9.95874,0,9.96484-11.95752Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M143.48486,267.0885V2.42785h37.4668q13.94751,0,19.73,7.17432,5.77295,7.1748,5.7793,20.32812v84.89844q0,17.54444-13.55176,20.72656v1.59424a17.84975,17.84975,0,0,1,10.36328,6.17822q3.5874,4.58716,3.5874,14.94678v108.814H185.33594V156.28186q0-9.95874-9.16748-9.96485H165.40674V267.0885ZM184.9375,32.3219q0-9.56618-9.16748-9.56641H165.40674V128.381H175.77q9.16479,0,9.16748-11.16065Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M231.97168,267.0885V22.75549H211.64355V2.42785H275.019V22.75549H254.29248v244.333Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M282.98584,267.0885V2.42785h49.82324V22.75549H305.30615V121.6051h23.11817v19.9292H305.30615V267.0885Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M403.75342,234.80285q0,33.4812-31.48828,33.48145-32.28516,0-32.28516-33.87989V35.90881q0-16.74024,8.37012-25.7085,8.37012-8.9685,23.5166-8.96826,15.1421,0,23.5166,9.16748,8.37012,9.17358,8.37012,25.90821ZM381.83057,34.31457q0-12.34937-9.96387-12.356-9.96827,0-9.96484,11.95752V235.99865q0,11.95752,9.96484,11.95752,9.958,0,9.96387-11.95752Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M412.92041,267.0885V2.42785h22.32031v244.333H464.3374V267.0885Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M472.3042,267.0885V2.42785h22.32031V267.0885Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                            <path d="M567.1626,234.80285q0,33.4812-31.48828,33.48145-32.28516,0-32.28516-33.87989V35.90881q0-16.74024,8.37012-25.7085,8.37012-8.9685,23.5166-8.96826,15.1421,0,23.5166,9.16748,8.37012,9.17358,8.37012,25.90821ZM545.23975,34.31457q0-12.34937-9.96387-12.356-9.96827,0-9.96484,11.95752V235.99865q0,11.95752,9.96484,11.95752,9.958,0,9.96387-11.95752Z" style={{fill: "url(#Dégradé_sans_nom_17559)"}}/>
                        </g>
                    </svg>
                    
                    <div className={`w-full flex items-center ${style.welcome} text-gray-700 dark:text-gray-400 text-5xl leading-[0.5] md:text-4xl`}>
                                <div className="">
                                    <span className="uppercase leading-[0.75]">
                                        {"Welcome to my wonderful word"}
                                    </span>
                                </div>
                                <div className="flex-1 h-[2px] bg-gray-700 dark:bg-gray-400 mx-4"></div>
                                <div className="">
                                    <span className="leading-[0.75]">
                                        2023
                                    </span>
                                </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <div className="w-28 md:w-20 aspect-square border-2 border-secondary rounded-full flex flex-col items-center justify-center duration-700 animate-float cursor-pointer" onClick={() => router.push("#my_project")}>
                        <svg className="w-6 h-6 stroke-secondary" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}