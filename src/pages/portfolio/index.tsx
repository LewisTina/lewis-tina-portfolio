import Layout from "@/components/Layout";
import PortfolioCover from "../../components/projects/Cover";
import Navbar from "@/components/NavBar";
import Listing from "../../components/projects/listing";
import Footer from "@/components/Footer";

export default function FullPortfolio() {
    return(
    <Layout>
        <Navbar/>
        <PortfolioCover/>
        <Listing/>
        <Footer/>
    </Layout>
    )
}