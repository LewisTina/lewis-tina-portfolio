import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from "next/image"
import ProjectPreview from './projectPreview';
import projects from '../../../project.json'
import styles from './index.module.scss'

interface ParallaxEffectProps { 
  isAppOrDesign: "app" | "design", 
  frameRef: HTMLElement
}

export const ParallaxEffectApp = (props: ParallaxEffectProps ) => {
    const { isAppOrDesign, frameRef } = props
    const finalProject = projects as any
    const a = useRef<HTMLDivElement>(null)
    const b = useRef<HTMLDivElement>(null)
    const c = useRef<HTMLDivElement>(null)
    const d = useRef<HTMLDivElement>(null)
    const e = useRef<HTMLDivElement>(null)

    useGSAP(() => {
      const scrollTriggerFirstLigne = {
        trigger: frameRef,
        start: "-50%",
        end: "top top",
        scrub: 2,
      }

      const scrollTriggerSecondLigne = {
        trigger: frameRef,
        start: "-25%",
        end: "35%",
        scrub: 2,
      }

      const scrollTriggerLastLigne = {
        trigger: frameRef,
        start: "35%",
        end: "50%",
        scrub: 2,
      }

      const tl = gsap.timeline({scrollTrigger: scrollTriggerFirstLigne});
      const tl2 = gsap.timeline({scrollTrigger: scrollTriggerFirstLigne});
      const tl3 = gsap.timeline({scrollTrigger: scrollTriggerSecondLigne});
      const tl4 = gsap.timeline({scrollTrigger: scrollTriggerSecondLigne});
      const tl5 = gsap.timeline({scrollTrigger: scrollTriggerLastLigne});

      tl.from(a.current, { y: "100%", x: "-100%", rotate: "20deg" });
      tl2.from(b.current, { y: "100%", x: "100%", rotate: "-20deg" });
      tl3.from(c.current, { y: "100%", x: "-100%", rotate: "-20deg" });
      tl4.from(d.current, { y: "100%", x: "100%", rotate: "20deg" });
      tl5.from(e.current, { y: "300%"});
  });

  return (
    <div className={`w-full flex-none flex flex-col gap-4 justify-start items-start transition-all duration-300 transform-gpu ${isAppOrDesign == "app" ? " translate-x-0" : "-translate-x-[100vw]"}`}>
        <div className="flex gap-4 aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full sm:flex-col">
            <div ref={a}  className={`${styles.cardStyle} rounded-xl md:rounded-lg w-1/2 sm:aspect-[1/0.85]`}>
              <ProjectPreview data={finalProject["factauto"]} id={'factauto'}/>
            </div>
            <div ref={b} className={`${styles.cardStyle} rounded-xl md:rounded-lg w-1/2 sm:aspect-[1/0.85]`}>
                <ProjectPreview data={finalProject["pkarenov"]} id={'pkarenov'}/>
            </div>
        </div>
        <div className="flex gap-4 aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full sm:flex-col">
            <div ref={c} className={`${styles.cardStyle} rounded-xl md:rounded-lg w-2/5`}>
                <ProjectPreview data={finalProject["lienou"]} id={'lienou'}/>
            </div>
            <div ref={d} className={`${styles.cardStyle} rounded-xl md:rounded-lg w-3/5`}>
                <ProjectPreview data={finalProject["acc"]} id={'acc'}/>
              </div>
        </div>
        <div ref={e} className="flex gap-4 h-48 w-full md:flex-wrap md:h-[unset]">
            <div className={`${styles.cardStyle2} rounded-lg`}>
                <Image  
                    src="/sayit.png"
                    alt = "Say IT project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div className={`${styles.cardStyle2} rounded-lg`}>
                <Image  
                    src="/cadys/cadys_dashboard-0.png"
                    alt = "Cadys project visual"
                    className='object-cover'
                    fill/>
            </div>
            <div className={`${styles.cardStyle2} rounded-lg`}>
                <Image  
                    src="/factauto.png"
                    alt = "Factauto project visual"
                    className='object-cover object-right-top'
                    fill/>
            </div>
            <div className={`${styles.cardStyle2} rounded-lg`}>
                <Image  
                    src="/abri_solidaire.png"
                    alt = "abri solidaire project visual"
                    className='object-cover'
                    fill/>
            </div>
        </div>
    </div>
  );
};


export const ParallaxEffectDesign = (props: ParallaxEffectProps ) => {
    const { isAppOrDesign, frameRef } = props
    const [isHidden, setIsHidden] = useState(false)
    const finalProject = projects as any
    const a = useRef<HTMLDivElement>(null)
    const b = useRef<HTMLDivElement>(null)
    const c = useRef<HTMLDivElement>(null)
    const d = useRef<HTMLDivElement>(null)
    const e = useRef<HTMLDivElement>(null)

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

    useGSAP(() => {
      const scrollTriggerFirstLigne = {
        trigger: frameRef,
        start: "-50%",
        end: "top top",
        scrub: 2,
      }

      const scrollTriggerSecondLigne = {
        trigger: frameRef,
        start: "-25%",
        end: "35%",
        scrub: 2,
      }

      const scrollTriggerLastLigne = {
        trigger: frameRef,
        start: "35%",
        end: "50%",
        scrub: 2,
      }

      const tl = gsap.timeline({scrollTrigger: scrollTriggerFirstLigne});
      const tl2 = gsap.timeline({scrollTrigger: scrollTriggerFirstLigne});
      const tl3 = gsap.timeline({scrollTrigger: scrollTriggerSecondLigne});
      const tl4 = gsap.timeline({scrollTrigger: scrollTriggerSecondLigne});
      const tl5 = gsap.timeline({scrollTrigger: scrollTriggerLastLigne});

      tl.from(a.current, { y: "100%", x: "-100%", rotate: "20deg" });
      tl2.from(b.current, { y: "100%", x: "100%", rotate: "-20deg" });
      tl3.from(c.current, { y: "100%", x: "-100%", rotate: "-20deg" });
      tl4.from(d.current, { y: "100%", x: "100%", rotate: "20deg" });
      tl5.from(e.current, { y: "300%"});
    });

    return (
      <div className={`w-full flex-none flex flex-col gap-4 justify-start items-start transition-all duration-300 transform-gpu ${isHidden ? "" : ""} ${isAppOrDesign == "design" ? "-translate-x-full" : "translate-x-[100vw]"}`}>
          <div className="flex gap-4 aspect-[1/0.41] md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full sm:flex-col">
            <div ref={b}  className={`${styles.cardStyle} w-1/2 sm:aspect-[1/0.85]`}>
              <ProjectPreview
                    id={"back_to_school"} data={finalProject["back_to_school"]} 
                />
            </div>
            <div ref={a}  className={`${styles.cardStyle} w-1/2 sm:aspect-[1/0.85]`}>
              <ProjectPreview
                      id={"business_card"} data={finalProject["business_card"]}/>
            </div>
          </div>
          <div className="flex aspect-[1/0.41] gap-4 md:aspect-[auto] md:h-[18rem] sm:h-[unset] w-full sm:flex-col">
              <div ref={d} className={`${styles.cardStyle} w-3/5`}>
                  <ProjectPreview
                      id={"la_jirafa"} data={finalProject["la_jirafa"]}/>
              </div>
              <div ref={c} className={`${styles.cardStyle} w-2/5`}>
                <ProjectPreview
                      id={"premier_mai"} data={finalProject["premier_mai"]}/>
              </div>
          </div>
          <div ref={e} className="flex gap-4 h-48 w-full md:flex-wrap md:h-[unset]">
              <div className={styles.cardStyle2}>
                  <Image  
                      src="/abri_solidaire.png"
                      alt = "Say IT project visual"
                      className='object-cover'
                      fill/>
              </div>
              <div className={styles.cardStyle2}>
                  <Image  
                      src="/cadys_login.png"
                      alt = "Say IT project visual"
                      className='object-cover'
                      fill/>
              </div>
              <div className={styles.cardStyle2}>
                  <Image  
                      src="/ticket.png"
                      alt = "Say IT project visual"
                      className='object-cover object-right-top'
                      fill/>
              </div>
              <div className={styles.cardStyle2}>
                  <Image  
                      src="/Mockup-CP-Dash-06.png"
                      alt = "Say IT project visual"
                      className='object-cover'
                      fill/>
              </div>
          </div>
      </div>
    );
};