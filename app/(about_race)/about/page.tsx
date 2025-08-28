'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import {Button} from 'components/components/ui/button'
import { Trophy, Users, MapPin, Clock, Star, Heart, Award, Target } from 'lucide-react';

const Page = () => {
    return (
        <>
            <Header/>
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            About the Race
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Discover the story behind Dubai's first gastronomic race - where fitness meets 
                            flavor in the most delicious running experience ever created.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                RUN & EAT Dubai was born from a simple yet revolutionary idea: what if we could 
                                combine the thrill of running with the rich culinary heritage of the UAE? 
                                We believe that fitness and gastronomy are not mutually exclusive - they're 
                                perfect partners in creating unforgettable experiences.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our mission is to create the most delicious race experience in the world, 
                                where every kilometer brings a new culinary adventure and every participant 
                                becomes part of a unique celebration of health, culture, and community.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Community First</h3>
                                            <p className="text-green-100">Bringing people together through shared experiences</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Excellence</h3>
                                            <p className="text-green-100">Delivering world-class events and experiences</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                            <Star className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Innovation</h3>
                                            <p className="text-green-100">Creating unique and memorable experiences</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Race Concept */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            The Race Concept
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Experience running like never before with our innovative gastronomic pit stops
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Strategic Pit Stops",
                                description: "Carefully placed gastronomic stations along the route offering authentic Arabian cuisine",
                                color: "text-blue-600"
                            },
                            {
                                icon: Clock,
                                title: "Perfect Timing",
                                description: "Pit stops designed to provide optimal nutrition and energy for runners",
                                color: "text-green-600"
                            },
                            {
                                icon: Users,
                                title: "Community Experience",
                                description: "Share the joy of running and eating with fellow participants and supporters",
                                color: "text-purple-600"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center mb-6 mx-auto`}>
                                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Race Details */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Race Details
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Race Distances
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Choose between 5km and 10km routes, each with strategically placed 
                                            gastronomic pit stops. Kids can participate in special 500m and 1km races.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Route & Venue
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            The race will take place in a stunning location in Dubai, with the 
                                            exact venue to be announced soon. The route will showcase the city's 
                                            beauty while providing the perfect setting for our gastronomic experience.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Awards & Recognition
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            All participants receive exclusive race packages including official 
                                            T-shirts, medals, and partner gifts. Special awards for top finishers 
                                            and team categories.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">What Makes Us Special</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <span className="text-2xl">🍽️</span>
                                        <span>Authentic Arabian cuisine at every pit stop</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-2xl">🏃‍♂️</span>
                                        <span>Professional race organization and timing</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-2xl">🎉</span>
                                        <span>Vibrant post-race celebration and activities</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-2xl">🤝</span>
                                        <span>Strong community and partner support</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Event Images */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Event Highlights
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Get a glimpse of what awaits you at RUN & EAT Dubai
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="py-4"
                        >
                            <img src="/about/Part1-1.png" alt="Race Overview" className="w-full rounded-2xl shadow-lg"/>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="py-4"
                        >
                            <img src="/about/Part2-1.png" alt="Race Details" className="w-full rounded-2xl shadow-lg"/>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="py-4"
                        >
                            <img src="/about/Part3-1.png" alt="Race Information" className="w-full rounded-2xl shadow-lg"/>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Experience the Most Delicious Race?
                        </h2>
                        <p className="text-xl mb-8 text-green-100">
                            Join thousands of runners in Dubai's premier gastronomic running event
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Register Now
                            </Button>
                            <Button variant="outline" className="bg-white text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Page;