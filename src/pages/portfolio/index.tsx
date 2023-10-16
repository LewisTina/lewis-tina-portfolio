import Layout from "@/components/Layout";
import PortfolioCover from "./Cover";
import Navbar from "@/components/NavBar";
import Listing from "./listing";

export default function FullPortfolio() {
    return(
    <Layout>
      <main className="min-h-screen w-screen relative flex flex-col items-center">
        <Navbar/>
        <PortfolioCover/>
        <Listing/>
      </main>
    </Layout>
    )
}