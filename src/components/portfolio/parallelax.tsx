import React, { useEffect, useState } from 'react';
import { ParallaxProvider, useParallax} from 'react-scroll-parallax';
import style from './index.module.scss'
import Image from "next/image"

const ParallaxEffect = () => {
    const [startAndEnd, setStartAndEnd] = useState({startScroll: 0, endScroll: 2700})
    const [startFirstAndEnd, setStartFirstAndEnd] = useState({startScroll: 0, endScroll: 2700})
    const [startSecondAndEnd, setStartSecondAndEnd] = useState({startScroll: 0, endScroll: 3100})
    const [startThirdAndEnd, setStartThirdAndEnd] = useState({startScroll: 0, endScroll: 3300})

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
    <div className={`w-full max-w-[1158px] flex flex-col justify-start items-start`}>
        <div className="flex aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full my-2 sm:my-0 sm:flex-col" id="portfolio-first">
            <div ref={a.ref}  className="flex overflow-hidden rounded-2xl h-full w-[50%] sm:w-full sm:aspect-[1/0.85] sm:mb-4 bg-white border-2 border-light-grey/25 mr-4">
                <Image  
                    src="/factauto.png"
                    alt = "FactAuto project visual"
                    className='object-contain'
                    fill/>
            </div>
            <div ref={b.ref} className="flex overflow-hidden rounded-2xl h-full w-[50%] sm:w-full sm:aspect-[1/0.83] sm:mb-4 bg-light-grey/25 border-2 border-light-grey/25">
                <Image  
                    src="/bedrinegame.png"
                    alt = "BedrineGame project visual"
                    className='object-contain'
                    fill/>
            </div>
        </div>
        <div className="flex aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full my-2 sm:my-0 sm:flex-col" id="portfolio-second">
            <div ref={c.ref} className="flex rounded-2xl h-full w-[41%] sm:w-full sm:aspect-square sm:mb-4 bg-light-grey/25 border-2 border-light-grey/25 mr-4 overflow-hidden">
                <Image  
                    src="/sayit.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div ref={d.ref} className="flex rounded-2xl h-full w-[59%] sm:w-full sm:aspect-square sm:mb-4 bg-light-grey/25 border-2 border-light-grey/25 overflow-hidden">
                <Image  
                    src="/abri_solidaire.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
        </div>
        <div className="flex h-48 w-full my-2 md:flex-wrap md:h-[unset]" id="portfolio-third">
            <div ref={e.ref} className="flex overflow-hidden rounded-lg h-full md:h-[unset] w-[calc(100%/3.6)] md:w-[calc(50%-0.5rem)] md:aspect-square bg-light-grey/25 border-2 border-light-grey/25 mr-2 md:mb-4">
                <Image  
                    src="/cadys_dashboard.png"
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

const ParallaxEffectProvider = () => {

  return (
    <ParallaxProvider>
        <ParallaxEffect/>
    </ParallaxProvider>
  );
};

export default ParallaxEffectProvider;
