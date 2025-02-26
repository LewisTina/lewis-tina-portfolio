import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import projects from '../../../../project.json'
import { ProjectProps } from "@/components/types";
import Content from "../../../components/elementContent";
import VisualisationLayout from "@/components/visualisationLayout";
import { withRouter, NextRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

export function Visualisation({ router}: WithRouterProps){
    let projectId = router.query.id as string;
    const data = projects as any
    const ProjectData = data[projectId] as ProjectProps
    const locale = router.locale as "en" | "fr"
    console.log(router.query)

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

Visualisation.getInitialProps = async ({ query, router }: { query: any; router: NextRouter }) => {
    const { param } = query;
  
    return { param };
  };

export default withRouter(Visualisation);