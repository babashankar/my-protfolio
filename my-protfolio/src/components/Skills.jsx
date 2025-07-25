import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "⚔️",
            skills: [
                { name: "Go/Golang", level: 95, color: "from-blue-500 to-cyan-500" },
                { name: "Python", level: 90, color: "from-green-500 to-emerald-500" },
                { name: "Java", level: 85, color: "from-orange-500 to-red-500" },
                { name: "MySQL", level: 88, color: "from-blue-600 to-purple-600" }
            ]
        },
        {
            title: "Deployment Tools",
            icon: "🛡️",
            skills: [
                { name: "Docker", level: 92, color: "from-blue-500 to-indigo-500" },
                { name: "Kubernetes", level: 88, color: "from-purple-500 to-pink-500" }
            ]
        },
        {
            title: "Developer Tools",
            icon: "🦇",
            skills: [
                { name: "VS Code", level: 95, color: "from-blue-500 to-cyan-500" },
                { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
                { name: "GoLand", level: 88, color: "from-green-500 to-teal-500" },
                { name: "Eclipse", level: 80, color: "from-purple-500 to-indigo-500" }
            ]
        },
        {
            title: "Core Concepts",
            icon: "💼",
            skills: [
                { name: "Distributed Systems", level: 90, color: "from-yellow-500 to-orange-500" },
                { name: "Concurrency in Go", level: 95, color: "from-blue-500 to-purple-500" },
                { name: "Data Structures", level: 92, color: "from-green-500 to-blue-500" },
                { name: "Algorithms", level: 88, color: "from-red-500 to-pink-500" },
                { name: "Computer Networks", level: 85, color: "from-indigo-500 to-purple-500" },
                { name: "Database Management", level: 90, color: "from-teal-500 to-cyan-500" }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-batman-black via-batman-dark to-batman-darkblue relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                {/* Utility belt background pattern */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-batman-gold/20 to-transparent rounded-full blur-3xl"></div>

                {/* Floating skill icons */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-batman-gold/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
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
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="font-batman text-5xl font-bold mb-6">
                            <span className="gradient-text">Utility</span> <span className="text-white">Belt</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Like Batman's utility belt, my technical arsenal is carefully curated with the finest tools and technologies
                            for every coding challenge in Gotham.
                        </p>
                    </motion.div>

                    {/* Utility Belt Container */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-16"
                    >
                        {/* Belt Background */}
                        <div className="bg-gradient-to-r from-batman-gray via-batman-lightgray to-batman-gray rounded-full p-8 border-4 border-batman-gold/30 shadow-2xl shadow-batman-gold/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {skillCategories.map((category, categoryIndex) => (
                                    <motion.div
                                        key={category.title}
                                        className="text-center"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="bg-batman-dark rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-batman-gold/50 hover:border-batman-gold transition-all duration-300">
                                            <span className="text-3xl">{category.icon}</span>
                                        </div>
                                        <h3 className="font-batman text-batman-gold font-bold text-sm">
                                            {category.title}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                className="bg-batman-gray/30 backdrop-blur-sm rounded-xl p-8 border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-batman-gold/20 p-3 rounded-lg">
                                        <span className="text-2xl">{category.icon}</span>
                                    </div>
                                    <h3 className="font-batman text-2xl font-bold text-batman-gold">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            className="relative"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-semibold">{skill.name}</span>
                                                <span className="text-batman-gold font-batman font-bold">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            {/* Skill Bar */}
                                            <div className="bg-batman-dark rounded-full h-3 overflow-hidden border border-batman-gold/20">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${skill.color} relative`}
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                    transition={{
                                                        duration: 1.5,
                                                        delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    {/* Glow effect */}
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                        animate={{
                                                            x: ['-100%', '100%'],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: 1.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                                                        }}
                                                    />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Skills Philosophy */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <div className="bg-batman-black/50 rounded-xl p-8 border-l-4 border-batman-gold max-w-4xl mx-auto">
                            <h4 className="font-batman text-xl text-batman-gold mb-4">The Dark Knight's Arsenal</h4>
                            <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                                "A hero is only as good as their tools. My utility belt isn't just about the technologies I know—
                                it's about choosing the right tool for each mission, adapting to new challenges,
                                and constantly evolving to stay ahead of the digital villains that threaten our code."
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* Skill Highlights */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 grid md:grid-cols-3 gap-6"
                    >
                        <motion.div
                            className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="font-batman text-3xl font-bold text-batman-gold mb-2">10+</div>
                            <div className="text-gray-400">Technologies Mastered</div>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="font-batman text-3xl font-bold text-batman-gold mb-2">5+</div>
                            <div className="text-gray-400">Programming Languages</div>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="font-batman text-3xl font-bold text-batman-gold mb-2">∞</div>
                            <div className="text-gray-400">Learning Never Stops</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
