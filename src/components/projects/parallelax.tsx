import React, { useEffect, useState } from 'react';
import { ParallaxProvider, useParallax} from 'react-scroll-parallax';
import style from './index.module.scss'
import Image from "next/image"
import ProjectPreview from './projectPreview';
import projects from '../../../project.json'

const ParallaxEffect = (props: { isAppOrDesign: "app" | "design" } ) => {
    const [startAndEnd, setStartAndEnd] = useState({startScroll: 0, endScroll: 2700})
    const [startFirstAndEnd, setStartFirstAndEnd] = useState({startScroll: 0, endScroll: 2700})
    const [startSecondAndEnd, setStartSecondAndEnd] = useState({startScroll: 0, endScroll: 3100})
    const [startThirdAndEnd, setStartThirdAndEnd] = useState({startScroll: 0, endScroll: 3300})
    const { isAppOrDesign } = props
    const finalProject = projects as any

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

  const cardStyle = "flex overflow-hidden rounded-2xl h-full sm:w-full sm:aspect-square bg-white/20 border-2 border-light-grey/25"

  return (
    <>
    <div className={`w-full flex-none flex flex-col gap-4 justify-start items-start transition-all duration-300 transform-gpu ${isAppOrDesign == "app" ? " translate-x-0" : "-translate-x-[100vw]"}`}>
        <div className="flex gap-4 aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full sm:flex-col" id="portfolio-first">
            <div ref={a.ref}  className={`${cardStyle} w-1/2 sm:aspect-[1/0.85]`}>
              <ProjectPreview data={finalProject["factauto"]} id={'factauto'}/>
            </div>
            <div ref={b.ref} className={`${cardStyle} w-1/2 sm:aspect-[1/0.85]`}>
                <ProjectPreview data={finalProject["pkarenov"]} id={'pkarenov'}/>
            </div>
        </div>
        <div className="flex gap-4 aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full sm:flex-col" id="portfolio-second">
            <div ref={c.ref} className={`${cardStyle} w-2/5`}>
                <ProjectPreview data={finalProject["lienou"]} id={'lienou'}/>
            </div>
            <div ref={d.ref} className={`${cardStyle} w-3/5`}>
                <ProjectPreview data={finalProject["acc"]} id={'acc'}/>
              </div>
        </div>
        <div className="flex gap-4 h-48 w-full md:flex-wrap md:h-[unset]" id="portfolio-third">
            <div ref={e.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25">
                <Image  
                    src="/sayit.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div ref={f.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25">
                <Image  
                    src="/cadys/cadys_dashboard-0.png"
                    alt = "Cadys project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div ref={g.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25">
                <Image  
                    src="/factauto.png"
                    alt = "Factauto project visual"
                    className='object-cover object-right-top'
                    fill/>
            </div>
            <div ref={h.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/5.5)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25">
                <Image  
                    src="/abri_solidaire.png"
                    alt = "abri solidaire project visual"
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
