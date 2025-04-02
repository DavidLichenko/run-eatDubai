import React from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion"
import {AiOutlineTeam} from "react-icons/ai";

import {HandshakeIcon, HeartHandshakeIcon, HelpingHand} from "lucide-react";
import {TbShoe} from "react-icons/tb";
const Features = () => {
  const features = [
    {
      icon: TbShoe,
      title: "ABOUT THE RACE",
    },
    {
      icon: AiOutlineTeam,
      title: "CORPORATE TEAM",
    },
    {
      icon: HandshakeIcon,
      title: "BECOME A PARTNER",
    },
    {
      icon: HeartHandshakeIcon,
      title: "BECOME A VOLUNTEER",
    },
  ];

  return (
      <section className="container mx-auto px-4 transition-colors duration-200 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex flex-col float-end gap-8">
              {features.map((feature, index) => (
                  <motion.div
                      initial={{opacity: 0, x: 30}}
                      whileInView={{opacity: 1, x: 0}}
                      whileHover={{scale: 1.2}}
                      whileTap={{scale: 0.8}}
                      exit={{opacity: 0, x: 30}}
                      transition={{duration: 0.2, delay: 0.01, ease: "backInOut"}}

                  >
                    <FeatureCard key={index} {...feature} />
                  </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>
  );
};

export default Features;
