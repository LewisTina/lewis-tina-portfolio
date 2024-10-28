import Head from 'next/head'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
interface LayoutProps {
    title?: string,
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    const {title, children} = props

    return (
        <>
            <Head>
                <title>{title ? title : "Lewis Tina · Portfolio"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width,"/>
                <meta property="og:image" content="https://www.lewistina.com/geek_apple_memoji.png"/>
                <meta property="twitter:image" content="https://www.lewistina.com/geek_apple_memoji.png"/>
                <meta name="google" content="notranslate"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content="Lewis Tina's Portfolio"/>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Lewis Tina's Portfolio"/>
                <meta property="og:url" content="https://www.lewistina.com/"/>
                <meta property="og:site_name" content="www.lewistina.com"/>
                <meta property="og:description" content="Lewis tina's presentation website and portfolio" />
                <meta property="twitter:description" content="Lewis tina's presentation website and portfolio"/>
                <meta name="description" content="Lewis tina's presentation site and portfolio" />
                <meta name="keywords" content="lewis - tina - Lewis TINA - ABOUTOU - Pierre - Pierre Lewis - Pierre TINA - ABOUTOU TINA - lewistina - portfolio - ternay - lyon - developer - développeur - fullstack - frontend - backend - mobile - dev - designer - graphic - design - designer - skills"/> 
            </Head>
            <main className="min-h-screen w-full relative flex flex-col items-center overflow-x-hidden scroll-pl-32 snap-y">
                {children}
            </main>
        </>
  );
}

export default Layout
