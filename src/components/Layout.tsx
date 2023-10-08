
import { Dela_Gothic_One } from 'next/font/google'
import Head from 'next/head'

const dela_gothic = Dela_Gothic_One(
  {
    subsets: ['latin'],
    weight: ['400']
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
                <title>Lewis Tina · Portfolio</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width,"/>
            </Head>
                  {children}
        </main>
  );
}

export default Layout
