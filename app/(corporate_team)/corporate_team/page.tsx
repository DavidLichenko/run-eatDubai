'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import {Button} from 'components/components/ui/button'
import { Users, Trophy, Award, Building, Mail, Phone, Target, Star, Heart } from 'lucide-react';

const Page = () => {
    return (
        <>
            <Header/>
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Corporate Teams
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Build team spirit, promote wellness, and create unforgettable memories with your 
                            colleagues in Dubai's most delicious corporate running event.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Corporate Teams */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Join as a Corporate Team?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover the benefits of participating as a corporate team in RUN & EAT Dubai
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Team Building",
                                description: "Strengthen bonds and build camaraderie among colleagues in a fun, active environment",
                                color: "text-blue-600"
                            },
                            {
                                icon: Heart,
                                title: "Health & Wellness",
                                description: "Promote a healthy lifestyle and encourage physical activity in your organization",
                                color: "text-green-600"
                            },
                            {
                                icon: Trophy,
                                title: "Competition",
                                description: "Compete with other corporate teams and win exclusive awards and recognition",
                                color: "text-yellow-600"
                            },
                            {
                                icon: Star,
                                title: "Brand Visibility",
                                description: "Showcase your company's commitment to community and employee wellness",
                                color: "text-purple-600"
                            },
                            {
                                icon: Award,
                                title: "Corporate Awards",
                                description: "Special categories and prizes for corporate teams and individual achievements",
                                color: "text-orange-600"
                            },
                            {
                                icon: Building,
                                title: "Networking",
                                description: "Connect with other businesses and professionals in a unique setting",
                                color: "text-red-600"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mb-6 shadow-lg`}>
                                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Categories */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Corporate Team Categories
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Choose the perfect category for your corporate team
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Small Teams */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Small Teams
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">5-10 participants</p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Perfect for departments or small companies</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Flexible team composition</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Special small team awards</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Large Teams */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Large Teams
                                </h3>
                                <p className="text-purple-100">11+ participants</p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">Ideal for large organizations</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">Multiple team divisions possible</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">Premium corporate benefits</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Registration Process */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Corporate Team Registration
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Ready to register your corporate team? Our dedicated corporate team coordinator 
                                will guide you through the entire process and ensure your team has the best 
                                experience possible.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Step 1: Contact Us
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Reach out to our corporate team coordinator to discuss your team's needs.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Step 2: Team Setup
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            We'll help you organize your team and choose the best category.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Step 3: Registration
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Complete the registration process with special corporate benefits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white"
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Our Corporate Coordinator</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-green-100">Email</p>
                                        <p className="font-semibold">diana@runeatdubai.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-green-100">Phone</p>
                                        <p className="font-semibold">+971 50 123 4567</p>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-white/20">
                                    <p className="text-green-100 mb-4">
                                        Diana Menibaeva<br/>
                                        Corporate Team Coordinator
                                    </p>
                                    <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold py-3 rounded-xl">
                                        Schedule a Call
                                    </Button>
                                </div>
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
                            Corporate Team Information
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Everything you need to know about corporate team participation
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="py-4"
                        >
                            <img src="/corporate/Part1-1.png" alt="Corporate Team Information" className="w-full rounded-2xl shadow-lg"/>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="py-4"
                        >
                            <img src="/corporate/Part2-1.png" alt="Corporate Team Details" className="w-full rounded-2xl shadow-lg"/>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Ready to Register Your Corporate Team?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Contact Diana Menibaeva for corporate team registration and special arrangements
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-6 h-6" />
                                    <span className="font-semibold">diana@runeatdubai.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-6 h-6" />
                                    <span className="font-semibold">+971 50 123 4567</span>
                                </div>
                            </div>
                        </div>
                        
                        <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-xl">
                            Contact Corporate Coordinator
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Page;