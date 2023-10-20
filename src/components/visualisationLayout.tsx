import { Dela_Gothic_One } from 'next/font/google'
import Head from 'next/head'
import { VisualisationLayoutProps } from './types'

const dela_gothic = Dela_Gothic_One(
  {
    subsets: ['latin'],
    weight: ['400']
  }
)

const VisualisationLayout = (props: VisualisationLayoutProps) => {
    const {cover, resume, projectTitle, children} = props

    return (
        <main className={dela_gothic.className}>
            <Head>
                <title>{`${projectTitle} | Lewis Tina's Portfolio`}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width,"/>
                <meta property="og:image" content={`https://www.lewistina.com${cover}`}/>
                <meta property="twitter:image" content={`https://www.lewistina.com${cover}`}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={`${projectTitle} | Lewis Tina's Portfolio`}></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${projectTitle} | Lewis Tina's Portfolio`} />
                <meta property="og:url" content="https://www.lewistina.com/"></meta>
                <meta property="og:site_name" content="www.lewistina.com"></meta>
                <meta property="og:description" content={`${resume}`} />
                <meta property="twitter:description" content={`${resume}`}></meta>
                <meta name="description" content={`${resume}`} />
                <meta name="keywords" content="lewis - tina - lewistina - profolio - ternay - lyon - developper - développeur - fullstack - frontend - backend - mobile - dev - designer - graphic - design - designer - skills"></meta> 
            </Head>

                  {children}
        </main>
  );
}

export default VisualisationLayout
