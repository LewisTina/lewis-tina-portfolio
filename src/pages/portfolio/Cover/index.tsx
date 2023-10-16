import style from "./index.module.scss"

export default function PortfolioCover(){
    return(
        <div className={`h-screen w-screen bg-portfolio-cover-bg bg-no-repeat bg-contain bg-right relative flex items-center justify-center bg-gray-900`}>
            <div className="flex items-center px-16 md:pb-28 max-w-[1535px] w-full h-full md:px-4 lg:px-8 overflow-hidden">
            <div className={`${style.content} overflow-hidden whitespace-pre-line border-2 w-1/2 border-light-grey/50 flex flex-col items-center justify-between backdrop-blur-xl rounded-3xl mx-8 p-16  h-4/5`}>
                <div className="-z-10 opacity-50 top-0 absolute h-full w-full bg-cover-noise bg-no-repeat bg-content mix-blend-overlay dark:mix-blend-normal">
                </div>

                <div className=""></div>
                <div className="relative">
                    <h2 className="uppercase text-9xl -z-10">{"Port\nfolio"}</h2>
                    <h2 className="uppercase text-9xl">{"Port\nfolio"}</h2>
                </div>

                <div className="w-full">
                    <div className="w-full h-1 bg-light-grey/50 mt-20 mb-10"></div>

                    <div className="w-full flex justify-between items-center">
                        <span className="text-white">
                            Lewis TINA
                        </span>

                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <circle cx="16.7887" cy="16.2113" r="15.7113" stroke="white"/>
                                <circle cx="16.7887" cy="16.2112" r="12.2999" stroke="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}