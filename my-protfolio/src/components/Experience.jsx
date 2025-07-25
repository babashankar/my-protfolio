import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Code, Server, Shield } from 'lucide-react'

const Experience = () => {
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    }

    const achievements = [
        {
            icon: <Code size={20} />,
            text: "Developed and maintained backend services for Origin WAAP project"
        },
        {
            icon: <Server size={20} />,
            text: "Implemented REST APIs using Gorilla Mux for efficient routing"
        },
        {
            icon: <Shield size={20} />,
            text: "Worked with DataBattery (Apache Cassandra) for large-scale data management"
        },
        {
            icon: <Code size={20} />,
            text: "Utilized Docker and Kubernetes for containerization and orchestration"
        },
        {
            icon: <Server size={20} />,
            text: "Optimized backend processes using Goroutines and channels"
        },
        {
            icon: <Shield size={20} />,
            text: "Managed certificate authentication and security implementations"
        }
    ]

    return (
        <section id="experience" className="py-20 bg-batman-dark relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-batman-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-batman-blue rounded-full blur-3xl"></div>
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
                            <span className="gradient-text">Professional</span> <span className="text-white">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            My mission in the corporate world: building secure, scalable systems that protect digital Gotham.
                        </p>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        {/* Main Experience Card */}
                        <motion.div
                            className="bg-gradient-to-br from-batman-gray/30 to-batman-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-300"
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between mb-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-batman-gold/20 p-4 rounded-xl">
                                        <Briefcase size={32} className="text-batman-gold" />
                                    </div>

                                    <div>
                                        <h3 className="font-batman text-3xl font-bold text-batman-gold mb-2">
                                            Software Engineer
                                        </h3>
                                        <h4 className="text-xl text-white font-semibold mb-4">
                                            Akamai Technologies
                                        </h4>

                                        <div className="flex flex-wrap gap-4 text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>August 2023 - Present</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>Bengaluru, Karnataka, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <motion.div
                                    className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30"
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
                            <div className="mb-8">
                                <h5 className="text-batman-gold font-semibold text-lg mb-4 flex items-center gap-2">
                                    <Shield size={20} />
                                    Primary Project: Origin WAAP
                                </h5>
                                <div className="bg-batman-black/50 rounded-xl p-6 border border-batman-gold/20">
                                    <p className="text-gray-300 leading-relaxed">
                                        Leading backend development for <span className="text-batman-gold font-semibold">Origin WAAP
                                            (Web Application and API Protection)</span> - Akamai's cutting-edge security solution
                                        that protects web applications and APIs from sophisticated cyber threats. This project
                                        involves building robust, scalable backend services that handle enterprise-level traffic
                                        while maintaining zero-downtime security protection.
                                    </p>
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div className="mb-8">
                                <h5 className="text-batman-gold font-semibold text-lg mb-6">Key Achievements & Responsibilities</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {achievements.map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-batman-dark/30 rounded-lg border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                            whileHover={{ x: 5, backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
                                        >
                                            <div className="text-batman-gold flex-shrink-0 mt-1">
                                                {achievement.icon}
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {achievement.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies Used */}
                            <div>
                                <h5 className="text-batman-gold font-semibold text-lg mb-4">Technologies & Tools</h5>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        'Go/Golang',
                                        'Gorilla Mux',
                                        'Docker',
                                        'Kubernetes',
                                        'Apache Cassandra',
                                        'DataBattery',
                                        'REST APIs',
                                        'Microservices',
                                        'Goroutines',
                                        'Channels',
                                        'Certificate Auth',
                                        'NoSQL'
                                    ].map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            className="bg-batman-gold/10 text-batman-gold px-3 py-2 rounded-full text-sm font-medium border border-batman-gold/20 hover:bg-batman-gold/20 transition-all duration-300"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ delay: 1.2 + index * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Experience Timeline Indicator */}
                        <motion.div
                            className="absolute -left-4 top-8 w-8 h-8 bg-batman-gold rounded-full border-4 border-batman-dark flex items-center justify-center"
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
                        >
                            <div className="w-2 h-2 bg-batman-dark rounded-full"></div>
                        </motion.div>
                    </motion.div>

                    {/* Career Philosophy */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <div className="bg-batman-black/50 rounded-xl p-8 border-l-4 border-batman-gold max-w-4xl mx-auto">
                            <h4 className="font-batman text-xl text-batman-gold mb-4">Professional Philosophy</h4>
                            <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                                "In the world of cybersecurity and backend development, I don't just write code—I craft digital armor.
                                Every service I build, every API I design, and every optimization I implement serves one purpose:
                                to create an impenetrable shield that protects applications and their users from the chaos of the digital underworld."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
