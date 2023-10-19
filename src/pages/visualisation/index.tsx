import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";
import projects from '../../../project.json'
import { ProjectProps } from "@/components/types";
import Content from "./elementContent";
import VisualisationLayout from "@/components/visualisationLayout";

export default function Visualisation(props: any){
    const router = useRouter()
    const query = router.query
    const projectId = query.id as string
    const data = projects as any
    const ProjectData = data[projectId] as ProjectProps

    return (
        <VisualisationLayout 
            cover={ProjectData?.cover?.link} 
            resume={ProjectData?.resume} 
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