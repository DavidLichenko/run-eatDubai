import React, {useRef} from "react";
import {
  AiOutlineDiscord,
  AiTwotoneBug,
  AiTwotoneExperiment,
  AiOutlineTaobao,
  AiOutlineSpotify,
  AiOutlineCode,
  AiOutlineCiCircle,
} from "react-icons/ai";
import { motion } from "framer-motion"
import One from '/public/elements/9.png'
import Two from '/public/elements/7.png'
import Image from "next/image";
const icons = [
  { Icon: AiTwotoneBug },
  { Icon: AiOutlineDiscord },
  { Icon: AiTwotoneExperiment },
  { Icon: AiOutlineTaobao },
  { Icon: AiOutlineSpotify },
  { Icon: AiOutlineCode },
  { Icon: AiOutlineCiCircle },
];

const Customers: React.FC = () => {
  const containerRef = useRef(null);
  return (
      <div className="w-full py-12 bg-background min-h-screen flex justify-center items-center">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row w-full">
              <h2 className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-0 text-black dark:text-white text-center md:text-left md:w-1/3">
                RUN & EAT — this is not just a slogan, but a philosophy that combines sports and gastronomy in one
                exciting event.
              </h2>
              <div className="flex justify-center md:justify-end gap-6 md:w-2/3 relative" ref={containerRef}>
                <div>
                  {/*<Image src={'/elements/9.png'} width={128} height={64} alt="element"/>*/}
                  <motion.img src={'/elements/9.png'} initial={{left: 150, top: 60, scale: 0.4}}
                              whileInView={{scale: 1}}
                              animate={{
                                translateZ: '32px',
                                translateY: "-12px",
                                transition: {
                                  duration: 2.2,
                                  delay: 0,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                  repeatType: "mirror"
                                }
                              }}
                              whileHover={{scale: 1.2, transition: {delay: 0}}}
                              transition={{duration: 0.4, delay: 0.3, ease: 'backInOut'}}
                              className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                              dragConstraints={containerRef}/>
                </div>
                <div>
                  {/*<Image src={'/elements/9.png'} width={128} height={64} alt="element"/>*/}
                  <motion.img src={'/elements/3.png'} initial={{left: 270, top: 10, scale: 0.4}}
                              whileInView={{scale: 1}}
                              animate={{
                                translateZ: '32px',
                                translateY: "-18px",
                                transition: {
                                  duration: 2.2,
                                  delay: 0,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                  repeatType: "mirror"
                                }
                              }}
                              whileHover={{scale: 1.2, transition: {delay: 0}}}
                              transition={{duration: 0.4, delay: 0.3, ease: 'backInOut'}}
                              className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                              dragConstraints={containerRef}/>
                </div>
                <div>
                  {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                  <motion.img src={'/elements/7.png'} initial={{right: 300, bottom: 10, scale: 0.4}}
                              whileInView={{scale: 1}}
                              animate={{
                                translateZ: '32px',
                                translateY: "-10px",
                                transition: {
                                  duration: 2.2,
                                  delay: 0,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                  repeatType: "mirror"
                                }
                              }}
                              whileHover={{scale: 1.2, transition: {delay: 0}}}
                              transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                              className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                              dragConstraints={containerRef}/>
                </div>
                <div>
                  {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                  <motion.img src={'/elements/2.png'} initial={{right: 15, bottom: 100, scale: 0.4}}
                              whileInView={{scale: 1}}
                              animate={{
                                translateZ: '32px',
                                translateY: "-19px",
                                transition: {
                                  duration: 2.2,
                                  delay: 0,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                  repeatType: "mirror"
                                }
                              }}
                              whileHover={{scale: 1.2, transition: {delay: 0}}}
                              transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                              className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                              dragConstraints={containerRef}/>
                </div>
                <div>
                  {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                  <motion.img src={'/elements/4.png'} initial={{right: 140, bottom: 34, scale: 0.4}}
                              whileInView={{scale: 0.8}}
                              animate={{
                                translateZ: '32px',
                                translateY: "-14px",
                                transition: {
                                  duration: 2.2,
                                  delay: 0,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                  repeatType: "mirror"
                                }
                              }}
                              whileHover={{scale: 1.2, transition: {delay: 0}}}
                              transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                              className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                              dragConstraints={containerRef}/>
                </div>
                <div>
                  {/*<Image src={'/elements/7.png'} width={128} height={32} alt="element"/>*/}
                  <motion.img src={'/elements/8.png'} initial={{right: 0, bottom: 0, scale: 0.4}}
                              whileInView={{scale: 0.9}}
                              animate={{
                                translateZ: '32px',
                                translateY: "-11px",
                                transition: {
                                  duration: 2.2,
                                  delay: 0,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                  repeatType: "mirror"
                                }
                              }}
                              whileHover={{scale: 1.2, transition: {delay: 0}}}
                              transition={{duration: 0.4, delay: 0.4, ease: 'backInOut'}}
                              className="w-36 absolute hover:scale-125 hover:cursor-pointer"
                              dragConstraints={containerRef}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Customers;
