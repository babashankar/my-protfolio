import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    }

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-batman-black via-batman-dark to-batman-darkblue relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-batman-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="font-batman text-5xl font-bold mb-6">
                            <span className="gradient-text">Academic</span> <span className="text-white">Training</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Every hero needs training. Here's where I honed my skills and built the foundation for my journey.
                        </p>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div variants={itemVariants} className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-batman-gold via-batman-yellow to-batman-gold opacity-30"></div>

                        {/* Education Entry */}
                        <motion.div
                            className="relative pl-20 pb-12"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                className="absolute left-6 top-8 w-5 h-5 bg-batman-gold rounded-full border-4 border-batman-dark"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    boxShadow: [
                                        '0 0 0 0 rgba(255, 215, 0, 0.4)',
                                        '0 0 0 20px rgba(255, 215, 0, 0)',
                                        '0 0 0 0 rgba(255, 215, 0, 0)'
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />

                            {/* Education Card */}
                            <div className="bg-batman-gray/30 backdrop-blur-sm rounded-xl p-8 border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="bg-batman-gold/20 p-4 rounded-lg">
                                        <GraduationCap size={32} className="text-batman-gold" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <h3 className="font-batman text-2xl font-bold text-batman-gold">
                                                Bachelor of Technology
                                            </h3>
                                            <span className="bg-batman-gold/20 text-batman-gold px-3 py-1 rounded-full text-sm font-semibold">
                                                2019 - 2023
                                            </span>
                                        </div>

                                        <h4 className="text-xl text-white font-semibold mb-2">
                                            PES UNIVERSITY, Bangalore, India
                                        </h4>

                                        <p className="text-gray-400 mb-4">
                                            Major in Computer Science and Engineering
                                        </p>

                                        {/* CGPA Highlight */}
                                        <div className="bg-gradient-to-r from-batman-gold/20 to-batman-yellow/10 rounded-lg p-4 mb-6 border border-batman-gold/30">
                                            <div className="flex items-center gap-3">
                                                <Award size={24} className="text-batman-gold" />
                                                <div>
                                                    <div className="text-batman-gold font-semibold">Academic Excellence</div>
                                                    <div className="text-2xl font-batman font-bold text-white">CGPA: 8.66/10</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Subjects */}
                                        <div className="space-y-4">
                                            <h5 className="text-batman-gold font-semibold flex items-center gap-2">
                                                <BookOpen size={20} />
                                                Core Subjects Mastered
                                            </h5>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {[
                                                    'Data Structures',
                                                    'Algorithms',
                                                    'Operating Systems',
                                                    'Computer Networks',
                                                    'Database Management',
                                                    'Distributed Systems',
                                                    'Object-Oriented Programming',
                                                    'Software Engineering',
                                                    'System Design'
                                                ].map((subject, index) => (
                                                    <motion.div
                                                        key={subject}
                                                        className="bg-batman-dark/50 px-3 py-2 rounded-lg text-sm text-gray-300 border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                        transition={{ delay: 0.8 + index * 0.1 }}
                                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                                                    >
                                                        {subject}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Additional Achievements */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 grid md:grid-cols-2 gap-8"
                    >
                        {/* Conference Presentation */}
                        <motion.div
                            className="bg-batman-gray/20 rounded-xl p-6 border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-batman-gold/20 p-3 rounded-lg">
                                    <Award size={24} className="text-batman-gold" />
                                </div>
                                <h4 className="font-batman text-lg text-batman-gold">Conference Presentation</h4>
                            </div>
                            <h5 className="text-white font-semibold mb-2">
                                International Conference on Computational Sciences and Sustainable Technologies
                            </h5>
                            <p className="text-gray-400 text-sm mb-2">May 9th, 2023 • Bangalore, India</p>
                            <p className="text-gray-300">
                                Presented research on <strong>"Smart Driving Assistance Using Deep Learning"</strong> -
                                showcasing innovation in AI and computer vision applications.
                            </p>
                        </motion.div>

                        {/* Academic Philosophy */}
                        <motion.div
                            className="bg-batman-dark/50 rounded-xl p-6 border-l-4 border-batman-gold"
                            whileHover={{ x: 5 }}
                        >
                            <h4 className="font-batman text-lg text-batman-gold mb-4">Academic Philosophy</h4>
                            <blockquote className="text-gray-300 italic">
                                "Knowledge is power, but applied knowledge is the real superpower.
                                My academic journey wasn't just about grades—it was about building
                                the analytical thinking and problem-solving skills that make me
                                the developer I am today."
                            </blockquote>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
