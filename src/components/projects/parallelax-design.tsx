import React, { useEffect, useState } from 'react';
import { ParallaxProvider, useParallax} from 'react-scroll-parallax';
import style from './index.module.scss'
import Image from "next/image"
import ProjectPreview from './projectPreview';

const ParallaxEffect = (props: { isAppOrDesign: "app" | "design" } ) => {
    const [startAndEnd, setStartAndEnd] = useState({startScroll: 0, endScroll: 2700})
    const [startFirstAndEnd, setStartFirstAndEnd] = useState({startScroll: 0, endScroll: 2700})
    const [startSecondAndEnd, setStartSecondAndEnd] = useState({startScroll: 0, endScroll: 3100})
    const [startThirdAndEnd, setStartThirdAndEnd] = useState({startScroll: 0, endScroll: 3300})
    const { isAppOrDesign } = props
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
      if (isAppOrDesign == "app") {
          const finishTimeout = setTimeout(() => {
            setIsHidden(true);
          }, 400);
  
          return () => {
              clearTimeout(finishTimeout);
          };
      }

      else{
        const finishTimeout = setTimeout(() => {
          setIsHidden(false);
        }, 0);

        return () => {
            clearTimeout(finishTimeout);
        };
      }
    }, [isAppOrDesign])

    useEffect(() => {
        const maProjectDiv = document.getElementById('projects');
        const rectProject = maProjectDiv!.getBoundingClientRect();

        const maFirstDiv = document.getElementById('portfolio-first');
        const maSecondDiv = document.getElementById('portfolio-second');
        const maThirdDiv = document.getElementById('portfolio-third');
        const rectFirst = maFirstDiv!.getBoundingClientRect();
        const rectSecond= maSecondDiv!.getBoundingClientRect();
        const rectThird= maThirdDiv!.getBoundingClientRect();

        setStartFirstAndEnd({
          startScroll: 0,
          endScroll: rectProject.top - 184
        });

        setStartSecondAndEnd({
            startScroll: 0,
            endScroll: rectFirst.bottom - 368
          });

          setStartThirdAndEnd({
            startScroll: 0,
            endScroll: rectSecond.top - 184
          });

      }, []);
    
      // Each image is initially translated away from its starting position
      const a = useParallax<HTMLDivElement>({
        ...startFirstAndEnd,
        translateX: ["-100%", "0%"],
        translateY: ["100%", "0%"],
        rotate: [20, 0]
      });
      const b = useParallax<HTMLDivElement>({
        ...startFirstAndEnd,
        translateX: ["100%", "0%"],
        translateY: ["100%", "0%"],
        rotate: [-20, 0]
      });
      const c = useParallax<HTMLDivElement>({
        ...startSecondAndEnd,
        translateX: ["-100%", "0%"],
        translateY: ["100%", "0%"],
        rotate: [-20, 0]
      });
      const d = useParallax<HTMLDivElement>({
        ...startSecondAndEnd,
        translateX: ["100%", "0%"],
        translateY: ["50%", "0%"],
        rotate: [20, 0]
      });
      const e = useParallax<HTMLDivElement>({
        ...startThirdAndEnd,
        translateX: ["0%", "0%"],
        translateY: ["300%", "0%"],
      });
      const f = useParallax<HTMLDivElement>({
        ...startThirdAndEnd,
        translateX: ["0%", "0%"],
        translateY: ["300%", "0%"],
      });
      const g = useParallax<HTMLDivElement>({
        ...startThirdAndEnd,
        translateX: ["0%", "0%"],
        translateY: ["300%", "0%"],
      });
      const h = useParallax<HTMLDivElement>({
        ...startThirdAndEnd,
        translateX: ["0%", "0%"],
        translateY: ["300%", "0%"],
      });

  return (
    <>
    <div className={`w-full flex-none flex flex-col justify-start items-start transition-all duration-300 transform-gpu ${isHidden ? "" : ""} ${isAppOrDesign == "design" ? "-translate-x-full" : "translate-x-[100vw]"}`}>
      <div className="flex aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full my-2 sm:my-0 sm:flex-col" id="portfolio-first">
            <div ref={b.ref}  className="flex overflow-hidden h-full w-[50%] sm:w-full sm:aspect-[1/0.85] sm:mb-4 bg-white/20 border-2 border-light-grey/25 mr-4">
              <ProjectPreview 
                  title={'TinArt Back To scool'} 
                  technologies={["Adobe Illustrator", "Adobe Photoshop"]}
                  description={'back_to_schoom_description'} 
                  image={{
                    link: '/branding.png',
                    alt: 'TinArt Back To scool project visual'
                  }}
                  behanceLink='https://www.behance.net/gallery/139347065/Flyers-carte-de-visite-mockup'
                  projectCategories='Banding & Graphic design'
                  objectFit={'object-cover object-right-top'}
              />
            </div>
            <div ref={a.ref} className="flex overflow-hidden h-full w-[50%] sm:w-full sm:aspect-[1/0.83] sm:mb-4 bg-light-grey/25 border-2 border-light-grey/25">
                <ProjectPreview 
                    title={'Business Card Pro Deco'} 
                    technologies={["Adobe Illustrator", "Adobe Photoshop"]}
                    description={'business_card_description'} 
                    image={{
                      link: '/visit_card.png',
                      alt: 'Business Card Pro Deco project visual'
                    }}
                    behanceLink='https://www.behance.net/gallery/139345885/Carte-de-Visite'
                    projectCategories='Banding & Graphic design'
                    objectFit={'object-cover'}/>
            </div>
        </div>
        <div className="flex aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full my-2 sm:my-0 sm:flex-col" id="portfolio-second">
            <div ref={d.ref} className="flex h-full w-[59%] sm:w-full sm:aspect-square sm:mb-4 bg-light-grey/25 border-2 border-light-grey/25 mr-4 overflow-hidden">
                <ProjectPreview 
                    title={'La Jirafa'} 
                    technologies={["Adobe Illustrator", "Adobe Photoshop"]}
                    description={'jirafa_description'} 
                    quality={20}
                    image={{
                      link: '/logo_jirafa.png',
                      alt: 'Jirafa project visual'
                    }}
                    behanceLink='https://www.behance.net/gallery/140823237/Illustration-adobe-vector'
                    projectCategories='Branding'
                    objectFit={'object-cover object-right'}/>
            </div>
            <div ref={c.ref} className="flex h-full w-[42%] sm:w-full sm:aspect-square sm:mb-4 bg-light-grey/25 border-2 border-light-grey/25 overflow-hidden">
                <ProjectPreview 
                    title={'Flyers 1er Mai'} 
                    technologies={["Adobe Illustrator"]}
                    description={'flyers_description'} 
                    image={{
                      link: '/tinart_premier_mai.png',
                      alt: 'Flyers 1er Mai project visual'
                    }}
                    projectCategories='Graphic Design'
                    objectFit={'object-contain'}/>
            </div>
        </div>
        <div className="flex h-48 w-full my-2 md:flex-wrap md:h-[unset]" id="portfolio-third">
            <div ref={e.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25 mr-2 md:mb-4">
                <Image  
                    src="/abri_solidaire.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div ref={f.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25 mr-2 md:mb-4 md:mr-0">
                <Image  
                    src="/cadys_login.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div ref={g.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25 mr-2 md:mb-4">
                <Image  
                    src="/Clay_Mockup___10_.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div ref={h.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/5.5)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25 md:mb-4">
                <Image  
                    src="/Mockup-CP-Dash-06.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
        </div>
    </div>
    </>
  );
};

const ParallaxEffectProvider = (props: { isAppOrDesign: "app" | "design" } ) => {
  const { isAppOrDesign } = props

  return (
    <ParallaxProvider>
        <ParallaxEffect isAppOrDesign= {isAppOrDesign}/>
    </ParallaxProvider>
  );
};

export default ParallaxEffectProvider;
