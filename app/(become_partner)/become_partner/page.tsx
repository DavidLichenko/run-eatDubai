'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import {Button} from 'components/components/ui/button'
import { Handshake, Star, Award, Users, Target, Mail, Phone, Building, TrendingUp, Heart } from 'lucide-react';

const Page = () => {
    return (
        <>
            <Header/>
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Become a Partner
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Join Dubai's most exciting gastronomic race as a partner and connect with thousands 
                            of health-conscious, food-loving participants.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Partner With Us?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover the unique opportunities that RUN & EAT Dubai offers to our partners
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Large Audience",
                                description: "Connect with 1000+ health-conscious participants and their families",
                                color: "text-blue-600"
                            },
                            {
                                icon: Target,
                                title: "Targeted Marketing",
                                description: "Reach your ideal demographic in a unique, engaging environment",
                                color: "text-green-600"
                            },
                            {
                                icon: Star,
                                title: "Brand Exposure",
                                description: "Maximum visibility through multiple touchpoints during the event",
                                color: "text-yellow-600"
                            },
                            {
                                icon: TrendingUp,
                                title: "Business Growth",
                                description: "Generate leads and increase brand awareness in the UAE market",
                                color: "text-purple-600"
                            },
                            {
                                icon: Heart,
                                title: "Community Impact",
                                description: "Showcase your commitment to health, wellness, and community",
                                color: "text-red-600"
                            },
                            {
                                icon: Award,
                                title: "Exclusive Benefits",
                                description: "Special partner perks and recognition throughout the event",
                                color: "text-orange-600"
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

            {/* Partnership Tiers */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Partnership Tiers
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Choose the partnership level that best fits your business goals
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Bronze Partner */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Bronze Partner
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">Perfect for small businesses</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Logo on event materials</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Social media mentions</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Booth space at event</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Participant discounts</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl">
                                Learn More
                            </Button>
                        </motion.div>

                        {/* Silver Partner */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white relative"
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Popular
                                </span>
                            </div>
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Silver Partner
                                </h3>
                                <p className="text-gray-200">Ideal for growing businesses</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-100">All Bronze benefits</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-100">Premium booth location</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-100">Event website presence</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-100">Product sampling opportunities</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-100">Press release inclusion</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-white text-gray-700 hover:bg-gray-100 font-semibold py-3 rounded-xl">
                                Learn More
                            </Button>
                        </motion.div>

                        {/* Gold Partner */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                        >
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Gold Partner
                                </h3>
                                <p className="text-yellow-100">For major brands</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-yellow-100">All Silver benefits</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-yellow-100">Exclusive pit stop sponsorship</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-yellow-100">VIP event access</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-yellow-100">Custom marketing materials</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-yellow-100">Dedicated account manager</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-yellow-100">Post-event analytics</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-white text-yellow-600 hover:bg-yellow-50 font-semibold py-3 rounded-xl">
                                Learn More
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Partnership Application Process
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Ready to become a partner? Our partnership team will guide you through the 
                                application process and help you choose the best partnership option for your business.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Handshake className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Step 1: Initial Consultation
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Schedule a call to discuss your business goals and partnership opportunities.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Step 2: Partnership Proposal
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            We'll create a customized partnership proposal tailored to your needs.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Step 3: Agreement & Activation
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Sign the partnership agreement and begin your activation plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white"
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Our Partnership Team</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-purple-100">Email</p>
                                        <p className="font-semibold">partnerships@runeatdubai.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-purple-100">Phone</p>
                                        <p className="font-semibold">+971 50 123 4567</p>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-white/20">
                                    <p className="text-purple-100 mb-4">
                                        Partnership Team<br/>
                                        RUN & EAT Dubai
                                    </p>
                                    <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 rounded-xl">
                                        Schedule Consultation
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-xl mb-8 text-purple-100">
                            Join Dubai's most exciting gastronomic race and connect with thousands of participants
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Apply Now
                            </Button>
                            <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Download Partnership Guide
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