"use client"
import Link from "next/link";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"
import {useEffect, useState} from "react";
gsap.registerPlugin(ScrollTrigger)
export default function Hero() {
    const [loading,setLoading] = useState<boolean>(true);
    useGSAP(() => {
        gsap.set('#heroSection', {
            clipPath: 'polygon(15% 0, 100% 0%, 88% 100%, 0% 100%)',
            // borderRadius: '0 0 40% 10%'
        })
        gsap.from("#heroSection", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#heroSection',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }

        })
    })
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {loading &&
                <div className="flex items-center justify-center absolute z-[9999] h-dvh w-full overflow-hidden bg-background">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            }
            <div className="relative z-20 bg-foreground">
                <section
                    className="flex items-center w-full h-screen bg-background z-10 text-center justify-between"
                    id='heroSection'>
                    <div className={'flex items-center justify-center'}>
                        <div className={'flex items-center justify-center w-[768px] '}>
                            <motion.div initial={{x: -300}} whileInView={{x: 0}} className={'z-10'}
                                        transition={{duration: 0.7, delay: 0.1, ease: "backInOut"}} exit={{x: 500}}>
                                <img className={'h-full '} src="/bg.png" alt="bg"/>
                            </motion.div>
                        </div>
                    </div>


                    <h1 className="font-sans text-text absolute top-52 z-50 right-32  text-3xl sm:text-5xl md:text-6xl lg:text-8xl w-1/3 mb-6">
                        <motion.div initial={{opacity: 0.3, x: 50}} animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.4, delay: 0.1, ease: "circIn"}} className={'text-end'}>
                            RUN & EAT




                            <span className={'relative font-black w-full h-full'}>
                                   <svg viewBox="0 0 194 11" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={'w-96  absolute -bottom-2 -right-2 z-50'}>
                                <motion.path initial={{pathLength: 0, opacity: 0.4}}
                                             animate={{pathLength: 1, opacity: 1}}
                                             transition={{duration: 0.45, delay: 0.6, ease: "easeInOut"}}
                                             d="M28.5 3.32516C102 2.32516 234.9 0.925164 178.5 3.32516C122.1 5.72516 36.6667 7.99185 1 8.8252"
                                             stroke="#4DB92D" strokeWidth="3"/>
                            </svg>
                                DUBAI
                            </span>

                        </motion.div>
                    </h1>
                    <h2 className="text-5xl absolute text-end text-secondary_text bottom-32 z-20 right-32 w-[32rem] ">
                    <motion.div initial={{opacity: 0.3, x: 50}} animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.4, delay: 0.1, ease: "circIn"}} className={'text-end'}>
                            The first gastronomic race RUN & EATDubai will be held already this fall
                        </motion.div>
                    </h2>


                </section>
                <h2 className="text-5xl absolute text-background text-end -z-10 bottom-32 right-32 w-[32rem] ">
                    The first gastronomic race RUN & EATDubai will be held already this fall
                </h2>
            </div>
        </>
    )
        ;
}
