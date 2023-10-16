import Layout from "@/components/Layout";
import PortfolioCover from "./Cover";
import Navbar from "@/components/NavBar";

export default function FullPortfolio() {
    return(
    <Layout>
      <main className="min-h-screen w-full relative flex flex-col items-center">
        <Navbar/>
        <PortfolioCover/>
      </main>
    </Layout>
    )
}