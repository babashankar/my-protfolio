import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Server, Shield, Target, Zap, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
    const [expandedSection, setExpandedSection] = useState(null);

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

    const achievements = [
        {
            icon: <Shield size={20} />,
            title: "Security Implementation",
            description: "Developed and maintained backend services for Origin WAAP project, protecting enterprise applications",
            impact: "99.9% uptime"
        },
        {
            icon: <Server size={20} />,
            title: "API Development",
            description: "Implemented robust REST APIs using Gorilla Mux for efficient routing and request handling",
            impact: "30% faster response"
        },
        {
            icon: <Code size={20} />,
            title: "Database Management",
            description: "Worked with DataBattery (Apache Cassandra) for large-scale data management and optimization",
            impact: "Million+ records"
        },
        {
            icon: <Target size={20} />,
            title: "Containerization",
            description: "Utilized Docker and Kubernetes for containerization, orchestration, and scalable deployments",
            impact: "Zero downtime"
        },
        {
            icon: <Zap size={20} />,
            title: "Performance Optimization",
            description: "Optimized backend processes using Goroutines and channels for concurrent operations",
            impact: "40% performance gain"
        },
        {
            icon: <Users size={20} />,
            title: "Security & Auth",
            description: "Managed certificate authentication and advanced security implementations",
            impact: "Enterprise grade"
        }
    ];

    const technologies = [
        { name: 'Go/Golang', proficiency: 95, color: '#00ADD8', category: 'Language' },
        { name: 'Gorilla Mux', proficiency: 90, color: '#00ADD8', category: 'Framework' },
        { name: 'Docker', proficiency: 88, color: '#2496ED', category: 'DevOps' },
        { name: 'Kubernetes', proficiency: 85, color: '#326CE5', category: 'DevOps' },
        { name: 'Apache Cassandra', proficiency: 82, color: '#1287B1', category: 'Database' },
        { name: 'REST APIs', proficiency: 92, color: '#FF6B6B', category: 'Architecture' },
        { name: 'Microservices', proficiency: 88, color: '#4ECDC4', category: 'Architecture' },
        { name: 'Goroutines', proficiency: 90, color: '#45B7D1', category: 'Concurrency' }
    ];

    const stats = [
        { label: 'Months of Experience', value: '18+', color: '#FFD700' },
        { label: 'Projects Delivered', value: '5+', color: '#22C55E' },
        { label: 'APIs Built', value: '20+', color: '#3B82F6' },
        { label: 'System Uptime', value: '99.9%', color: '#EF4444' }
    ];

    return (
        <section id="experience" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/5 rounded-full blur-3xl"></div>
                </div>

                {/* Corporate Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-10 gap-6 h-full animate-grid-fade">
                        {Array.from({ length: 100 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="border border-yellow-400/20"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    delay: i * 0.05
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
                            <span className="bat-text-glow relative z-10">Professional Journey</span>
                            <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-50"></div>
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            My mission in the corporate world: building secure, scalable systems that protect digital Gotham
                        </motion.p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center hover:border-gray-600 transition-all duration-300"
                            >
                                <div
                                    className="text-2xl sm:text-3xl font-black mb-2"
                                    style={{ color: stat.color }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Main Experience Card */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="relative">
                            {/* Timeline indicator */}
                            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-yellow-400 to-blue-400 rounded-full opacity-60"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative pl-12 sm:pl-20"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-2 sm:left-6 top-8 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        boxShadow: [
                                            '0 0 0 0 rgba(34, 197, 94, 0.4)',
                                            '0 0 0 20px rgba(34, 197, 94, 0)',
                                            '0 0 0 0 rgba(34, 197, 94, 0)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />

                                {/* Experience Card */}
                                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10">
                                    {/* Header */}
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                            <div className="bg-yellow-400/20 p-4 rounded-xl w-fit">
                                                <Briefcase size={40} className="text-yellow-400" />
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">
                                                        Software Engineer
                                                    </h3>
                                                    <h4 className="text-xl lg:text-2xl text-white font-bold mb-4">
                                                        Akamai Technologies
                                                    </h4>
                                                </div>

                                                <div className="flex flex-wrap gap-4 text-gray-400">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={16} />
                                                        <span className="text-sm lg:text-base">August 2023 - Present</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin size={16} />
                                                        <span className="text-sm lg:text-base">Bengaluru, India</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <motion.div
                                            className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/30 w-fit"
                                            animate={{
                                                boxShadow: [
                                                    '0 0 0 0 rgba(34, 197, 94, 0.4)',
                                                    '0 0 0 20px rgba(34, 197, 94, 0)',
                                                    '0 0 0 0 rgba(34, 197, 94, 0)'
                                                ]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            Currently Active
                                        </motion.div>
                                    </div>

                                    {/* Project Focus */}
                                    <motion.div
                                        className="mb-8 cursor-pointer"
                                        onClick={() => setExpandedSection(expandedSection === 'project' ? null : 'project')}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h5 className="text-yellow-400 font-bold text-lg lg:text-xl flex items-center gap-2">
                                                <Shield size={20} />
                                                Primary Project: Origin WAAP
                                            </h5>
                                            <motion.div
                                                animate={{ rotate: expandedSection === 'project' ? 180 : 0 }}
                                                className="text-yellow-400"
                                            >
                                                <TrendingUp size={20} />
                                            </motion.div>
                                        </div>

                                        <AnimatePresence>
                                            {expandedSection === 'project' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="bg-black/30 rounded-xl p-6 border border-yellow-400/20"
                                                >
                                                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                                        Leading backend development for <span className="text-yellow-400 font-semibold">Origin WAAP
                                                            (Web Application and API Protection)</span> - Akamai's cutting-edge security solution
                                                        that protects web applications and APIs from sophisticated cyber threats. This project
                                                        involves building robust, scalable backend services that handle enterprise-level traffic
                                                        while maintaining zero-downtime security protection for millions of users globally.
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Key Achievements Grid */}
                                    <div className="mb-8">
                                        <h5 className="text-yellow-400 font-bold text-lg lg:text-xl mb-6">Key Achievements & Impact</h5>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            {achievements.map((achievement, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    whileHover={{ x: 5, scale: 1.02 }}
                                                    className="group bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-300"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="text-yellow-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                                            {achievement.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h6 className="text-white font-semibold text-sm lg:text-base mb-1">
                                                                {achievement.title}
                                                            </h6>
                                                            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed mb-2">
                                                                {achievement.description}
                                                            </p>
                                                            <div className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded text-xs font-bold w-fit">
                                                                {achievement.impact}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies Section */}
                                    <motion.div
                                        className="cursor-pointer"
                                        onClick={() => setExpandedSection(expandedSection === 'tech' ? null : 'tech')}
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <h5 className="text-yellow-400 font-bold text-lg lg:text-xl">Technologies & Proficiency</h5>
                                            <motion.div
                                                animate={{ rotate: expandedSection === 'tech' ? 180 : 0 }}
                                                className="text-yellow-400"
                                            >
                                                <TrendingUp size={20} />
                                            </motion.div>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                                            {technologies.slice(0, 8).map((tech, index) => (
                                                <motion.div
                                                    key={tech.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-lg p-3 hover:border-gray-500 transition-all duration-300"
                                                >
                                                    <div className="text-white font-medium text-xs lg:text-sm mb-1">{tech.name}</div>
                                                    <div className="text-gray-400 text-xs mb-2">{tech.category}</div>
                                                    <div className="w-full bg-gray-600/50 rounded-full h-1.5">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${tech.proficiency}%` }}
                                                            transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                                                            className="h-full rounded-full"
                                                            style={{ backgroundColor: tech.color }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <AnimatePresence>
                                            {expandedSection === 'tech' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-center"
                                                >
                                                    <p className="text-gray-400 text-sm italic">
                                                        Constantly evolving toolkit for enterprise-grade backend development
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Professional Philosophy */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-gray-800/40 backdrop-blur-sm border-l-4 border-yellow-400 rounded-r-2xl p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Professional Philosophy</h3>
                            <blockquote className="text-gray-300 italic text-lg lg:text-xl leading-relaxed">
                                "In the world of cybersecurity and backend development, I don't just write code—I craft digital armor.
                                Every service I build, every API I design, and every optimization I implement serves one purpose:
                                to create an impenetrable shield that protects applications and their users from the chaos of the digital underworld.
                                Like Batman's unwavering commitment to Gotham, my dedication to security and performance never sleeps."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
