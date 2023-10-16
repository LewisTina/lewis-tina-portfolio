import style from "./index.module.scss"
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400', '500', '600', '700', '800', '900']
    }
  )

export default function PortfolioCover(){
    return(
        <div className={`h-screen w-screen relative flex items-center justify-center snap-proximity snap-y`}>
            <div className="flex items-center px-16 md:pb-28 max-w-[1535px] w-full h-full bg-portfolio-cover-bg bg-no-repeat bg-contain bg-right md:px-4 lg:px-8 overflow-hidden">
            <div className={`${style.content} ${dm_sans.className} overflow-hidden whitespace-pre-line bg-white/25 dark:bg-black/25 border-2 w-1/2 border-light-grey/50 flex flex-col items-start justify-between backdrop-blur-xl rounded-3xl mx-8 p-16  h-4/5`}>
                {/* <div className="-z-10 opacity-50 top-0 absolute h-full w-full bg-cover-noise bg-no-repeat bg-content mix-blend-multiply dark:mix-blend-normal">
                </div> */}
                <div className=""></div>

                <div className={`${style.title} flex flex-col items-start`}>
                    <span className="text-9xl text-white leading-[0.70] flex mx-2 before:block before:absolute before:-z-10 before:-inset-4 before:-skew-y-3 before:bg-deep-purple relative">
                        {"Lewis Tina's"}
                    </span>

                    <h2 className="uppercase leading-[0.75] text-[24rem] bg-gradient-to-t from-darkest to-secondary">{"Portfolio"}</h2>
                    
                    <div className={`w-full flex items-center ${style.welcome} text-gray-700 dark:text-gray-400`}>
                                <div className="">
                                    <span className="text-6xl uppercase">
                                        {"Welcome to my wonderful word"}
                                    </span>
                                </div>
                                <div className="flex-1 h-1 bg-gray-700 dark:bg-gray-400 my-10 mx-4"></div>
                                <div className="">
                                    <span className="text-6xl">
                                        2023
                                    </span>
                                </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <div className="w-32 aspect-square border-2 border-secondary rounded-full flex flex-col items-center justify-center animate-bounce duration-700 cursor-pointer">
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