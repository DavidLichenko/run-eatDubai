'use client';
import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from 'framer-motion';
import {Button} from 'components/components/ui/button'
import { Heart, Users, Award, Clock, MapPin, Mail, Phone, Star, Target, Gift } from 'lucide-react';

const Page = () => {
    return (
        <>
            <Header/>
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Become a Volunteer
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Join our amazing volunteer team and help make RUN & EAT Dubai the most memorable 
                            and successful gastronomic race experience for all participants.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Volunteer */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Volunteer With Us?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover the incredible benefits of being part of our volunteer team
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Make a Difference",
                                description: "Help create an unforgettable experience for thousands of participants",
                                color: "text-red-600"
                            },
                            {
                                icon: Users,
                                title: "Join a Community",
                                description: "Connect with like-minded individuals who share your passion for fitness and food",
                                color: "text-blue-600"
                            },
                            {
                                icon: Award,
                                title: "Gain Experience",
                                description: "Develop valuable skills in event management, customer service, and teamwork",
                                color: "text-green-600"
                            },
                            {
                                icon: Star,
                                title: "Exclusive Access",
                                description: "Get behind-the-scenes access to one of Dubai's most exciting events",
                                color: "text-yellow-600"
                            },
                            {
                                icon: Gift,
                                title: "Volunteer Perks",
                                description: "Receive exclusive volunteer packages, meals, and event merchandise",
                                color: "text-purple-600"
                            },
                            {
                                icon: Target,
                                title: "Personal Growth",
                                description: "Challenge yourself, learn new skills, and build your confidence",
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

            {/* Volunteer Roles */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Volunteer Roles Available
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Find the perfect role that matches your skills and interests
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Course Support */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Course Support
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">Help runners stay on track</p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Course marshaling and direction</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Safety monitoring</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Traffic control</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Emergency response support</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Pit Stop Support */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Pit Stop Support
                                </h3>
                                <p className="text-green-100">Serve delicious food to runners</p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-green-100">Food preparation and serving</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-green-100">Hydration station management</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-green-100">Food safety monitoring</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-green-100">Participant assistance</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Registration & Information */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Registration & Info
                                </h3>
                                <p className="text-purple-100">Help participants get started</p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">Participant check-in</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">Information desk support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">Race packet distribution</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-purple-100">General assistance</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Finish Line & Awards */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Finish Line & Awards
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">Celebrate runner achievements</p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Finish line support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Medal distribution</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Awards ceremony support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Photography assistance</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Volunteer Benefits */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Volunteer Benefits
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                As a volunteer, you'll receive exclusive benefits and recognition for your 
                                valuable contribution to making RUN & EAT Dubai a success.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Gift className="w-4 h-4 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Volunteer Package
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Exclusive volunteer T-shirt, cap, and other branded merchandise.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Flexible Shifts
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Choose from morning, afternoon, or full-day shifts to fit your schedule.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Star className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Recognition & Certificates
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Receive official volunteer certificates and recognition for your contribution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white"
                        >
                            <h3 className="text-2xl font-bold mb-6">Volunteer Requirements</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span>Must be 18 years or older</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span>Available for training session</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span>Commit to minimum 4-hour shift</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span>Positive attitude and teamwork</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span>Fluent in English (Arabic a plus)</span>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-white/20">
                                <Button className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold py-3 rounded-xl">
                                    Apply to Volunteer
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            How to Apply
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Follow these simple steps to join our volunteer team
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Fill Application",
                                description: "Complete our online volunteer application form with your details and preferences"
                            },
                            {
                                step: "2",
                                title: "Attend Training",
                                description: "Join our mandatory volunteer training session to learn about your role"
                            },
                            {
                                step: "3",
                                title: "Race Day",
                                description: "Show up on race day ready to make a difference and have fun!"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-xl mb-8 text-red-100">
                            Join our volunteer team and help create an unforgettable experience for thousands of runners
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold text-lg px-8 py-4 rounded-xl">
                                Apply Now
                            </Button>
                            <Button variant="outline" className="bg-white text-red-600 hover:bg-red-50 font-semibold text-lg px-8 py-4 rounded-xl">
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