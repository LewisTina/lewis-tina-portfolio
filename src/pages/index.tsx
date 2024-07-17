import Cover from '@/components/Cover'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/NavBar'
import About from '@/components/about'
import HireMe from '@/components/hire_me'
import Projects from '@/components/projects'
import Skills from '@/components/skills'


export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen w-full relative flex flex-col items-center overflow-x-hidden">
        <Navbar/>
        <Cover/>
        <About/>
        <Skills/>
        <Projects/>
        <HireMe/>
        <Footer/>
      </main>
    </Layout>
  )
}
