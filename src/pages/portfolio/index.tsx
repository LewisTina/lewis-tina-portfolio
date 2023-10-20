import Layout from "@/components/Layout";
import PortfolioCover from "../../components/projects/Cover";
import Navbar from "@/components/NavBar";
import Listing from "../../components/projects/listing";
import Footer from "@/components/Footer";

export default function FullPortfolio() {
    return(
    <Layout>
      <main className="min-h-screen w-full relative flex flex-col items-center">
        <Navbar/>
        <PortfolioCover/>
        <Listing/>
        <Footer/>
      </main>
    </Layout>
    )
}