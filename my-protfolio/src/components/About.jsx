import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [activeTab, setActiveTab] = useState('story');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const tabs = [
        { id: 'story', label: 'Origin Story', icon: '🦇' },
        { id: 'mission', label: 'Current Mission', icon: '⚡' },
        { id: 'philosophy', label: 'Code Philosophy', icon: '🛡️' }
    ];

    const tabContent = {
        story: {
            title: "The Origin Story",
            content: (
                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        As a <span className="text-yellow-400 font-semibold">Software Engineer at Akamai Technologies</span>,
                        I've dedicated my career to protecting the digital realm through robust backend services and
                        scalable architectures. My expertise in Go, distributed systems, and cloud technologies
                        serves as my arsenal in the fight against inefficient code and security vulnerabilities.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        With a Computer Science Engineering degree from <span className="text-yellow-400 font-semibold">PES University</span>
                        and a CGPA of 8.66, I've mastered the art of building secure, high-performance applications
                        that can handle the demands of enterprise-level traffic while maintaining the stealth and
                        precision that defines my approach to development.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-black/30 rounded-lg p-4 border border-yellow-400/20">
                            <div className="text-yellow-400 font-bold text-lg">University</div>
                            <div className="text-gray-300">PES University</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 border border-yellow-400/20">
                            <div className="text-yellow-400 font-bold text-lg">CGPA</div>
                            <div className="text-gray-300">8.66 / 10</div>
                        </div>
                    </div>
                </div>
            )
        },
        mission: {
            title: "Current Mission",
            content: (
                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        At Akamai, I'm currently working on the <span className="text-yellow-400 font-semibold">Origin WAAP
                            (Web Application and API Protection)</span> project, developing backend services that shield
                        web applications from threats across the digital landscape.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        I utilize Go's powerful concurrency features to build scalable microservices, implement
                        robust REST APIs, and work with proprietary databases to ensure digital security at enterprise scale.
                        Every day brings new challenges in the fight against cyber threats.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="bg-black/30 rounded-lg p-4 border border-blue-400/20">
                            <div className="text-blue-400 font-bold">Primary Tech</div>
                            <div className="text-gray-300">Go, Microservices</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 border border-green-400/20">
                            <div className="text-green-400 font-bold">Focus Area</div>
                            <div className="text-gray-300">Security & Performance</div>
                        </div>
                    </div>
                </div>
            )
        },
        philosophy: {
            title: "The Dark Knight's Code",
            content: (
                <div className="space-y-6">
                    <blockquote className="text-gray-300 italic text-lg lg:text-xl leading-relaxed border-l-4 border-yellow-400 pl-6">
                        "It's not who I am underneath, but what I code that defines me.
                        Every line of code is a promise to make the digital world safer,
                        faster, and more reliable."
                    </blockquote>
                    <div className="grid gap-4">
                        <div className="bg-black/30 rounded-lg p-4 border border-purple-400/20">
                            <div className="text-purple-400 font-bold mb-2">🎯 Precision</div>
                            <div className="text-gray-300 text-sm">Every algorithm optimized, every function purposeful</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 border border-red-400/20">
                            <div className="text-red-400 font-bold mb-2">🛡️ Security</div>
                            <div className="text-gray-300 text-sm">Protecting applications from the shadows of cyber threats</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 border border-green-400/20">
                            <div className="text-green-400 font-bold mb-2">⚡ Performance</div>
                            <div className="text-gray-300 text-sm">Swift as the night, efficient as justice</div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    return (
        <section id="about" className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-gray-900 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl"></div>
                </div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 gap-4 h-full animate-grid-fade">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="border border-yellow-400/20"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 0.1
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-400 mb-6 relative"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <span className="bat-text-glow relative z-10">About the Dark Knight</span>
                            <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-50"></div>
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Behind every great developer is a story of persistence, innovation, and the drive to protect digital Gotham
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Tab Navigation & Content */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
                                {tabs.map((tab) => (
                                    <motion.button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`group relative px-4 sm:px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === tab.id
                                                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                                                : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                                            }`}
                                    >
                                        <span className="flex items-center gap-2 text-sm sm:text-base">
                                            <span>{tab.icon}</span>
                                            <span className="hidden sm:inline">{tab.label}</span>
                                            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                                        </span>

                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-yellow-400 rounded-xl -z-10"
                                                initial={false}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8"
                                >
                                    <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6">
                                        {tabContent[activeTab].title}
                                    </h3>
                                    {tabContent[activeTab].content}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Stats & Achievements */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Main Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 rounded-2xl p-4 sm:p-6 text-center border border-yellow-400/30 backdrop-blur-sm"
                                >
                                    <div className="text-2xl sm:text-3xl font-black text-yellow-400 mb-2">2+</div>
                                    <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-2xl p-4 sm:p-6 text-center border border-blue-400/30 backdrop-blur-sm"
                                >
                                    <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-2">10+</div>
                                    <div className="text-gray-400 text-sm sm:text-base">Major Projects</div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-2xl p-4 sm:p-6 text-center border border-green-400/30 backdrop-blur-sm"
                                >
                                    <div className="text-2xl sm:text-3xl font-black text-green-400 mb-2">20+</div>
                                    <div className="text-gray-400 text-sm sm:text-base">Technologies</div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-purple-400/20 to-purple-400/10 rounded-2xl p-4 sm:p-6 text-center border border-purple-400/30 backdrop-blur-sm"
                                >
                                    <div className="text-2xl sm:text-3xl font-black text-purple-400 mb-2">8.66</div>
                                    <div className="text-gray-400 text-sm sm:text-base">CGPA</div>
                                </motion.div>
                            </div>

                            {/* Key Strengths */}
                            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8">
                                <h3 className="text-xl lg:text-2xl font-bold text-yellow-400 mb-6">Core Strengths</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Backend Development', level: 95, color: '#22C55E' },
                                        { name: 'System Architecture', level: 90, color: '#3B82F6' },
                                        { name: 'Security Implementation', level: 88, color: '#EF4444' },
                                        { name: 'Performance Optimization', level: 92, color: '#F59E0B' }
                                    ].map((strength, index) => (
                                        <motion.div
                                            key={strength.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-white font-medium text-sm lg:text-base">{strength.name}</span>
                                                <span className="text-yellow-400 font-bold text-sm">{strength.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${strength.level}%` }}
                                                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                                                    className="h-full rounded-full relative overflow-hidden"
                                                    style={{ backgroundColor: strength.color }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Current Focus */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 lg:p-8"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                        <span className="text-yellow-400 text-xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-400">Current Focus</h3>
                                        <p className="text-gray-400 text-sm">Enterprise Security Solutions</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                    Building next-generation web application protection systems at Akamai Technologies,
                                    focusing on scalable Go microservices and advanced threat detection algorithms.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
