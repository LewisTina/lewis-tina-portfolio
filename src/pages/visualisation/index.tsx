import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";
import projects from '../../../project.json'
import { ProjectProps } from "@/components/types";
import Content from "../../components/elementContent";
import VisualisationLayout from "@/components/visualisationLayout";

export default function Visualisation(props: any){
    const router = useRouter()
    const forcedId = router.asPath.match(new RegExp(`[&?]id=(.*)(&|$)`));

    const query = router.query
    const projectId = query.id as string || forcedId![1]
    const data = projects as any
    const ProjectData = data[projectId] as ProjectProps
    const locale = router.locale as "en" | "fr"

    console.log(projectId)

    return (
        <VisualisationLayout 
            cover={ProjectData?.cover?.link} 
            resume={ProjectData?.resume[locale]} 
            projectTitle={ProjectData?.title}>
            <main className={`min-h-screen w-full flex flex-col relative items-center`}>
                <Navbar/>
                
                {
                    !!ProjectData ?
                    <>
                    <Content data={ProjectData}/>
                    <Footer/>
                    </>
                    : <></>
                }
            </main>
        </VisualisationLayout>
    )
}