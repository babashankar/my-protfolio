import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
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

    return (
        <section id="about" className="py-20 bg-batman-dark relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 bg-batman-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-batman-blue rounded-full blur-3xl"></div>
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
                            <span className="gradient-text">About</span> <span className="text-white">The Dark Knight</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Behind every great developer is a story of persistence, innovation, and the drive to protect digital Gotham.
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="bg-batman-gray/30 backdrop-blur-sm rounded-xl p-8 border border-batman-gold/20">
                                <h3 className="font-batman text-2xl text-batman-gold mb-4">The Origin Story</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    As a Software Engineer at <span className="text-batman-gold font-semibold">Akamai Technologies</span>,
                                    I've dedicated my career to protecting the digital realm through robust backend services and
                                    scalable architectures. My expertise in Go, distributed systems, and cloud technologies
                                    serves as my arsenal in the fight against inefficient code and security vulnerabilities.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    With a Computer Science Engineering degree from PES University and a CGPA of 8.66,
                                    I've mastered the art of building secure, high-performance applications that can handle
                                    the demands of enterprise-level traffic while maintaining the stealth and precision
                                    that defines my approach to development.
                                </p>
                            </div>

                            {/* Current Focus */}
                            <div className="bg-batman-gray/30 backdrop-blur-sm rounded-xl p-8 border border-batman-gold/20">
                                <h3 className="font-batman text-2xl text-batman-gold mb-4">Current Mission</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    At Akamai, I'm currently working on the <span className="text-batman-gold font-semibold">Origin WAAP
                                        (Web Application and API Protection)</span> project, developing backend services that shield
                                    web applications from threats. I utilize Go's powerful concurrency features, implement
                                    REST APIs, and work with proprietary databases to ensure digital security at scale.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats & Skills Preview */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <motion.div
                                    className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="font-batman text-3xl font-bold text-batman-gold">2+</div>
                                    <div className="text-gray-400">Years Experience</div>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="font-batman text-3xl font-bold text-batman-gold">5+</div>
                                    <div className="text-gray-400">Major Projects</div>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="font-batman text-3xl font-bold text-batman-gold">10+</div>
                                    <div className="text-gray-400">Technologies</div>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-batman-gold/20 to-batman-yellow/10 rounded-xl p-6 text-center border border-batman-gold/30"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="font-batman text-3xl font-bold text-batman-gold">8.66</div>
                                    <div className="text-gray-400">CGPA</div>
                                </motion.div>
                            </div>

                            {/* Philosophy */}
                            <div className="bg-batman-black/50 rounded-xl p-8 border-l-4 border-batman-gold">
                                <h4 className="font-batman text-xl text-batman-gold mb-3">The Dark Knight's Code</h4>
                                <blockquote className="text-gray-300 italic text-lg">
                                    "It's not who I am underneath, but what I code that defines me.
                                    Every line of code is a promise to make the digital world safer,
                                    faster, and more reliable."
                                </blockquote>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
