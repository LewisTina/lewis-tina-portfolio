
import { Dela_Gothic_One } from 'next/font/google'
import Head from 'next/head'

const dela_gothic = Dela_Gothic_One(
  {
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  }
)

interface LayoutProps {
    title?: string,
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    const {title, children} = props

    return (
        <main className={dela_gothic.className}>
            <Head>
                <title>{title ? title : "Lewis Tina · Portfolio"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width,"/>
                <meta property="og:image" content="https://www.lewistina.com/geek_apple_memoji.png"/>
                <meta property="twitter:image" content="https://www.lewistina.com/geek_apple_memoji.png"/>
                <meta name="google" content="notranslate"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content="Lewis Tina's Portfolio"></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Lewis Tina's Portfolio" />
                <meta property="og:url" content="https://www.lewistina.com/"></meta>
                <meta property="og:site_name" content="www.lewistina.com"></meta>
                <meta property="og:description" content="Lewis tina's presentation website and portfolio" />
                <meta property="twitter:description" content="Lewis tina's presentation website and portfolio"></meta>
                <meta name="description" content="Lewis tina's presentation site and portfolio" />
                <meta name="keywords" content="lewis - tina - Lewis TINA - ABOUTOU - Pierre - Pierre Lewis - Pierre TINA - ABOUTOU TINA - lewistina - portfolio - ternay - lyon - developer - développeur - fullstack - frontend - backend - mobile - dev - designer - graphic - design - designer - skills"></meta> 
            </Head>
                  {children}
        </main>
  );
}

export default Layout
