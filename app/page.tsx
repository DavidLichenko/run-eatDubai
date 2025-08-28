"use client";
import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import { useTheme } from "next-themes";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import {Button} from 'components/components/ui/button'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {useEffect, useState, useRef} from "react";
import SlotCounter from 'react-slot-counter';
import { Calendar, MapPin, Users, Trophy, Clock, Star } from 'lucide-react';

export default function Page() {
    const targetRef = useRef(null);
    const { theme, setTheme } = useTheme();
    const [loading,setLoading] = useState<boolean>(true);
    const { scrollYProgress } = useScroll({ target: targetRef });
    
    useEffect(() => {
        setLoading(false);
    }, [theme]);
    
    const x = useTransform(scrollYProgress, [0,1], ['60%','-5%'])
    const minus_x = useTransform(scrollYProgress, [1,0], ['0%','-20%'])
    const x_x = useTransform(scrollYProgress, [0,1], ['70%','-10%'])
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(x, physics)
    const springX = useSpring(minus_x, physics)
    const springX2 = useSpring(x_x, physics)
    const containerRef = useRef(null);

    return (
        <div className="flex flex-col min-h-full bg-background">
            {loading && (
                <div className="flex items-center justify-center top-0 bottom-0 left-0 right-0 sticky z-[9999] h-dvh w-full overflow-hidden bg-background">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            
            <div className="w-full fixed z-[9990] top-0">
                <Header/>
            </div>
            
            <Hero/>
            
            {/* Event Highlights Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            The Most Delicious Race
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Experience the perfect blend of fitness and gastronomy. RUN & EAT Dubai combines 
                            the thrill of running with the rich flavors of Arabian cuisine at every pit stop.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: Calendar, title: "Event Date", value: "Fall 2025", color: "text-blue-600" },
                            { icon: MapPin, title: "Location", value: "Dubai, UAE", color: "text-green-600" },
                            { icon: Users, title: "Expected Participants", value: "1000+", color: "text-purple-600" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4 mx-auto`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Section 
                leftHalf={<Features/>}
                rightHalf={
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        className="flex flex-col justify-center h-full"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Gastronomic Pit Stops
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Every kilometer brings a new culinary adventure. Our pit stops feature authentic 
                            Arabian cuisine, from traditional mezze to modern fusion dishes. Recharge your 
                            energy while experiencing the rich gastronomic heritage of the UAE.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            {['Traditional Mezze', 'Fresh Dates', 'Arabic Coffee', 'Falafel', 'Shawarma', 'Baklava'].map((item, index) => (
                                <span key={index} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                }
            />

            {/* Race Distances Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Choose Your Challenge
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            From beginners to experienced runners, we have the perfect distance for everyone
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* 5KM Race */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-3xl font-bold">
                                            <SlotCounter value={5} animateOnVisible={true}/>
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold">Kilometers</h3>
                                        <p className="text-green-100">Perfect for beginners</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-green-100">
                                    <li className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Estimated time: 25-45 minutes</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Trophy className="w-4 h-4" />
                                        <span>3 gastronomic pit stops</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        <span>Perfect for families</span>
                                    </li>
                                </ul>
                                <Button className="mt-6 bg-white text-green-600 hover:bg-green-50 font-semibold">
                                    Register for 5KM
                                </Button>
                            </div>
                        </motion.div>

                        {/* 10KM Race */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-3xl font-bold">
                                            <SlotCounter value={10} animateOnVisible={true}/>
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold">Kilometers</h3>
                                        <p className="text-yellow-100">For experienced runners</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-yellow-100">
                                    <li className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Estimated time: 45-90 minutes</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Trophy className="w-4 h-4" />
                                        <span>6 gastronomic pit stops</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        <span>Competitive timing</span>
                                    </li>
                                </ul>
                                <Button className="mt-6 bg-white text-orange-600 hover:bg-orange-50 font-semibold">
                                    Register for 10KM
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Kids Race */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                        className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center"
                    >
                        <h3 className="text-3xl font-bold mb-4">Kids Race</h3>
                        <p className="text-xl mb-6">Special distances for our youngest participants</p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">500m</span>
                                <span className="text-purple-100">(Ages 4-8)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">1km</span>
                                <span className="text-purple-100">(Ages 9-12)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.div
                initial={{opacity: 0.5, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.1}}
            >
                <Customers/>
            </motion.div>

            {/* What You Get Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Your Race Package
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Every participant receives an exclusive package with premium items
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Official Race T-Shirt",
                                description: "Premium quality, moisture-wicking fabric with unique design",
                                icon: "👕"
                            },
                            {
                                title: "Exclusive Medal",
                                description: "Beautifully crafted medal to commemorate your achievement",
                                icon: "🏅"
                            },
                            {
                                title: "Partner Gifts",
                                description: "Special gifts and vouchers from our amazing partners",
                                icon: "🎁"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="text-6xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Runner's Village Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Runner's Village
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                After crossing the finish line, join us in the vibrant Runner's Village for a 
                                celebration of achievement and community.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Live music and entertainment",
                                    "Cooking masterclasses with top chefs",
                                    "Food tastings and demonstrations",
                                    "Interactive contests and games",
                                    "Photo opportunities and social media zones"
                                ].map((activity, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 text-white">
                                        <h3 className="font-bold text-lg mb-2">Live Music</h3>
                                        <p className="text-green-100">Local and international artists</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
                                        <h3 className="font-bold text-lg mb-2">Masterclasses</h3>
                                        <p className="text-yellow-100">Learn from top chefs</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-8">
                                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 text-white">
                                        <h3 className="font-bold text-lg mb-2">Tastings</h3>
                                        <p className="text-purple-100">Sample local delicacies</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white">
                                        <h3 className="font-bold text-lg mb-2">Activities</h3>
                                        <p className="text-blue-100">Fun for the whole family</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <div className="h-full mb-24 md:mb-12 md:h-screen flex flex-col gap-6">
                <div className="flex flex-col items-end justify-center scroll-smooth overflow-x-hidden pt-20">
                    <motion.div
                        whileHover={{scale: 1.2}}
                        transition={{duration: 0.2, ease: "backInOut"}}
                        className="overflow-y-hidden"
                    >
                        <Button className="m-6 border-text border-2 text-sm font-bold">VIEW GALLERY</Button>
                    </motion.div>
                    <motion.div className="overflow-y-hidden flex w-[350vw] md:w-[120vw] gap-4 px-4" style={{x: spring}}>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Race event" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Participants running" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Food pit stop" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Finish line celebration" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Runner's village" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Award ceremony" className="image rounded-lg shadow-lg"/>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center scroll-smooth overflow-x-hidden">
                    <motion.div className="overflow-y-hidden flex w-[350vw] md:w-[120vw] gap-4 px-4" style={{x: springX}}>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Race event" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Participants running" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Food pit stop" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Finish line celebration" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Runner's village" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Award ceremony" className="image rounded-lg shadow-lg"/>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center scroll-smooth overflow-x-hidden">
                    <motion.div className="overflow-y-hidden flex w-[350vw] md:w-[120vw] gap-4 px-4" style={{x: springX2}}>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Race event" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Participants running" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Food pit stop" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Finish line celebration" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/1.jpg"} alt="Runner's village" className="image rounded-lg shadow-lg"/>
                        </div>
                        <div>
                            <img src={"/carousel/2.jpg"} alt="Award ceremony" className="image rounded-lg shadow-lg"/>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Call to Action Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{y: 30, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Run & Eat?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 text-green-100">
                            Join thousands of runners in the most delicious race experience in Dubai
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4">
                                Register Now
                            </Button>
                            <Button variant="outline" className="bg-white text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
