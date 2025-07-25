import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star, TrendingUp } from 'lucide-react';

const Education = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

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

    const subjects = [
        { name: 'Data Structures', grade: 'A+', color: '#22C55E' },
        { name: 'Algorithms', grade: 'A+', color: '#3B82F6' },
        { name: 'Operating Systems', grade: 'A', color: '#EF4444' },
        { name: 'Computer Networks', grade: 'A+', color: '#F59E0B' },
        { name: 'Database Management', grade: 'A', color: '#8B5CF6' },
        { name: 'Distributed Systems', grade: 'A+', color: '#EC4899' },
        { name: 'Object-Oriented Programming', grade: 'A+', color: '#06B6D4' },
        { name: 'Software Engineering', grade: 'A', color: '#84CC16' },
        { name: 'System Design', grade: 'A+', color: '#F97316' }
    ];

    const achievements = [
        {
            title: "Academic Excellence",
            description: "Maintained consistently high academic performance",
            icon: Star,
            value: "8.66 CGPA",
            color: "#FFD700"
        },
        {
            title: "Research Publication",
            description: "Published and presented at international conference",
            icon: Award,
            value: "1 Paper",
            color: "#3B82F6"
        },
        {
            title: "Top Performer",
            description: "Ranked among top students in the department",
            icon: TrendingUp,
            value: "Top 10%",
            color: "#22C55E"
        }
    ];

    return (
        <section id="education" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl"></div>
                </div>

                {/* Floating Academic Elements */}
                <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-yellow-400/40 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
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
                            <span className="bat-text-glow relative z-10">Academic Training</span>
                            <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-50"></div>
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Every hero needs training. Here's where I forged the foundation of knowledge that powers my digital crusade
                        </motion.p>
                    </motion.div>

                    {/* Main Education Card */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="relative">
                            {/* Timeline indicator */}
                            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-400 rounded-full opacity-60"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative pl-12 sm:pl-20"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-2 sm:left-6 top-8 w-5 h-5 bg-yellow-400 rounded-full border-4 border-gray-900 shadow-lg"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        boxShadow: [
                                            '0 0 0 0 rgba(255, 215, 0, 0.4)',
                                            '0 0 0 20px rgba(255, 215, 0, 0)',
                                            '0 0 0 0 rgba(255, 215, 0, 0)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />

                                {/* Education Card */}
                                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        <div className="bg-yellow-400/20 p-4 rounded-xl w-fit">
                                            <GraduationCap size={40} className="text-yellow-400" />
                                        </div>

                                        <div className="flex-1 space-y-6">
                                            {/* Header */}
                                            <div className="space-y-4">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400">
                                                        Bachelor of Technology
                                                    </h3>
                                                    <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold border border-yellow-400/30">
                                                        2019 - 2023
                                                    </span>
                                                </div>

                                                <div className="space-y-2">
                                                    <h4 className="text-xl lg:text-2xl text-white font-bold">
                                                        PES UNIVERSITY, Bangalore
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                                                        <span className="flex items-center gap-2">
                                                            <MapPin size={16} />
                                                            Bangalore, India
                                                        </span>
                                                        <span className="flex items-center gap-2">
                                                            <BookOpen size={16} />
                                                            Computer Science & Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* CGPA Highlight */}
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-xl p-6 border border-yellow-400/30"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-yellow-400/20 p-3 rounded-lg">
                                                        <Award size={24} className="text-yellow-400" />
                                                    </div>
                                                    <div>
                                                        <div className="text-yellow-400 font-bold text-lg">Academic Excellence</div>
                                                        <div className="text-3xl font-black text-white">CGPA: 8.66/10</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Core Subjects Grid */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-8 text-center">
                            Core Subjects Mastered
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subjects.map((subject, index) => (
                                <motion.div
                                    key={subject.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onHoverStart={() => setSelectedSubject(subject)}
                                    onHoverEnd={() => setSelectedSubject(null)}
                                    className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-sm lg:text-base group-hover:text-yellow-400 transition-colors">
                                                {subject.name}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: subject.color }}
                                                />
                                                <span className="text-gray-400 text-sm font-medium">Grade: {subject.grade}</span>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{
                                                scale: selectedSubject?.name === subject.name ? 1.2 : 1,
                                                rotate: selectedSubject?.name === subject.name ? 360 : 0
                                            }}
                                            className="text-yellow-400"
                                        >
                                            <Star size={20} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Grid */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-8 text-center">
                            Academic Achievements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => {
                                const IconComponent = achievement.icon;
                                return (
                                    <motion.div
                                        key={achievement.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="p-3 rounded-lg"
                                                style={{ backgroundColor: `${achievement.color}20` }}
                                            >
                                                <IconComponent
                                                    size={24}
                                                    style={{ color: achievement.color }}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg">{achievement.title}</h4>
                                                <div
                                                    className="text-2xl font-black"
                                                    style={{ color: achievement.color }}
                                                >
                                                    {achievement.value}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Research Publication */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 lg:p-8">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                <div className="bg-purple-400/20 p-4 rounded-xl w-fit">
                                    <Award size={40} className="text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                                        International Conference Presentation
                                    </h3>
                                    <h4 className="text-xl text-white font-semibold mb-2">
                                        "Smart Driving Assistance Using Deep Learning"
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            May 9th, 2023
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            Bangalore, India
                                        </span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        Presented research on AI-powered driving assistance systems at the
                                        International Conference on Computational Sciences and Sustainable Technologies,
                                        showcasing innovation in computer vision and deep learning applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Academic Philosophy */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-gray-800/40 backdrop-blur-sm border-l-4 border-yellow-400 rounded-r-2xl p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Academic Philosophy</h3>
                            <blockquote className="text-gray-300 italic text-lg lg:text-xl leading-relaxed">
                                "Knowledge is power, but applied knowledge is the real superpower.
                                My academic journey wasn't just about grades—it was about building
                                the analytical thinking and problem-solving skills that make me
                                the developer I am today. Every algorithm learned, every system designed,
                                and every problem solved has become a tool in my digital utility belt."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
