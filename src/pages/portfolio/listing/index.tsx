import { DM_Sans } from "next/font/google"

const dm_sans = DM_Sans(
    {
      subsets: ['latin'],
      weight: ['400','500','600', '700','800','900']
    }
  )

export default function Listing(){
    return(
        <section className="flex flex-col items-center justify-start">
            <div className={`flex flex-col justify-start relative items-start max-w-[1535px] w-full rounded-3xl px-16 md:px-4 lg:px-8 text-darkest dark:text-white`}>
                <div className={`${dm_sans.className} w-full flex-col justify-start relative items-start`}>
                    <div className="flex"></div>
                    <div className="flex w-full justify-start flex-nowrap">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}