import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-batman-black via-batman-dark to-batman-darkblue">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Bat Signal in background */}
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 opacity-10"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full bg-batman-gold rounded-full blur-3xl"></div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-batman-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-batman-gold font-gotham text-lg mb-2">Hello, I'm</h3>
                            <h1 className="font-batman text-6xl lg:text-8xl font-bold mb-4">
                                <span className="gradient-text">BABA</span>
                                <br />
                                <span className="text-white">SHANKAR</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-gray-300 font-gotham font-light">
                                Software Engineer at <span className="text-batman-gold">Akamai Technologies</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Backend developer specializing in Go, distributed systems, and cloud technologies.
                            Like Batman protects Gotham, I protect applications with robust security and scalable architecture.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.a
                                href="#contact"
                                className="bg-gradient-to-r from-batman-gold to-batman-yellow text-batman-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-batman-gold/25 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Light the Bat-Signal
                            </motion.a>

                            <motion.a
                                href="#projects"
                                className="border-2 border-batman-gold text-batman-gold px-8 py-4 rounded-lg font-semibold hover:bg-batman-gold hover:text-batman-black transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.a>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="flex flex-wrap gap-6 pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <a href="mailto:babashankarsn@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors">
                                <Mail size={20} />
                                <span>babashankarsn@gmail.com</span>
                            </a>
                            <a href="tel:+918296189723" className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors">
                                <Phone size={20} />
                                <span>+91 8296189723</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors">
                                <Github size={20} />
                                <span>GitHub</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors">
                                <Linkedin size={20} />
                                <span>LinkedIn</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image with Cape Animation */}
                    <motion.div
                        className="relative flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Cape behind the image */}
                        <motion.div
                            className="cape absolute -z-10 bg-gradient-to-br from-batman-dark to-batman-black opacity-80"
                            animate={{
                                rotate: [-2, 2, -2],
                                scaleY: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: '-50px',
                                top: '-20px',
                            }}
                        />

                        {/* Profile Image */}
                        <motion.div
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-batman-gold shadow-2xl shadow-batman-gold/25">
                                <img
                                    src="/profile.jpg"
                                    alt="Baba Shankar SN"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Glowing effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-batman-gold/20 to-batman-yellow/20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-batman-gold"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
