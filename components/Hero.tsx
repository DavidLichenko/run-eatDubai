"use client"
import Link from "next/link";
import Image from "next/image";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {Button} from 'components/components/ui/button'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
            </div>

            {/* Header Section */}
            <div className="relative z-20 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4">
                    {/* <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="flex items-center gap-4 mb-6 md:mb-0"
                        >
                            <img className="w-16 h-16 md:w-20 md:h-20" src="logo2.png" alt="logo"/>
                            <div className="border-l-4 border-green-600 pl-4">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                                    Gastronomic Race
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Dubai's Premier Event</p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="flex items-center gap-4"
                        >
                            <motion.a
                                href="https://www.instagram.com/run.eat.dubai/"
                                target="_blank"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <AiOutlineInstagram className="w-6 h-6 text-pink-600" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <AiOutlineWhatsApp className="w-6 h-6 text-green-600" />
                            </motion.a>
                        </motion.div>
                    </div> */}
                </div>
            </div>

            {/* Main Hero Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.5}}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Fall 2025</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
                                <span className="text-green-600">RUN</span>
                                <br />
                                <span className="text-yellow-600">& EAT</span>
                                <br />
                                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 dark:text-gray-300">
                                    Dubai
                                </span>
                            </h1>
                        </div>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.7}}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            The first gastronomic race in Dubai, combining the thrill of running with
                            the rich flavors of Arabian cuisine at every pit stop.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.9}}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Register Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-lg px-8 py-4 rounded-xl">
                                Learn More
                            </Button>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 1.1}}
                            className="grid grid-cols-3 gap-6 pt-8"
                        >
                            {[
                                { icon: Users, value: "1000+", label: "Participants" },
                                { icon: MapPin, value: "5-10km", label: "Distances" },
                                { icon: Calendar, value: "6", label: "Pit Stops" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <stat.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Banner Image */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="relative h-full mt-24 flex flex-col gap-16"
                    >
                        <div className="relative h-fit flex flex-col gap-4 mb-12 md:mb-0 md:gap-16">
                            <motion.div
                                initial={{scale: 0.8, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{duration: 1, delay: 0.6}}
                                className="relative z-10"
                            >
                                <img
                                    src="/Banner.jpg"
                                    alt="RUN & EAT Dubai Race"
                                    className="w-full rounded-2xl shadow-2xl"
                                />
                            </motion.div>

                            {/* Floating Elements */}
                            <div className="w-full md:w-1/2 flex items-baseline mt-6 md:mt-12 mx-auto gap-12">
                                <motion.div
                                    initial={{y: 20, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{duration: 0.8, delay: 1.2}}
                                    className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
                                >
                                    <div className="text-center whitespace-nowrap">
                                        <div className="text-2xl font-bold text-green-600">🏃‍♂️</div>
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Ready <br/> to Run?
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{y: 20, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{duration: 0.8, delay: 1.4}}
                                    className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-600">🎁</div>
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Partner Gifts</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{y: 20, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{duration: 0.8, delay: 1.4}}
                                    className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-600">🍽️</div>
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Delicious
                                            Food
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.6}}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{y: [0, 12, 0]}}
                        transition={{duration: 2, repeat: Infinity}}
                        className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
