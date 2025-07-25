import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react'
import EnhancedCape from './EnhancedCape'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-batman-black via-batman-dark to-batman-darkblue">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Bat Signal in background */}
                <motion.div
                    className="absolute top-10 md:top-20 right-5 md:right-20 w-32 md:w-64 h-32 md:h-64 opacity-5 md:opacity-10"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full bg-batman-gold rounded-full blur-3xl"></div>
                </motion.div>

                {/* Floating particles - responsive count */}
                {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-0.5 md:w-1 h-0.5 md:h-1 bg-batman-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Gotham skyline silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-batman-black via-batman-dark/80 to-transparent opacity-60">
                    <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-batman-black to-transparent">
                        {/* Building silhouettes */}
                        {Array.from({ length: window.innerWidth < 768 ? 8 : 15 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute bottom-0 bg-batman-dark opacity-40"
                                style={{
                                    left: `${i * (100 / (window.innerWidth < 768 ? 8 : 15))}%`,
                                    width: `${4 + Math.random() * 6}%`,
                                    height: `${30 + Math.random() * 70}%`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-responsive pt-20 md:pt-32 pb-8 md:pb-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-batman-gold font-gotham text-sm md:text-lg mb-2">Hello, I'm</h3>
                            <h1 className="font-batman text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
                                <span className="gradient-text block">BABA</span>
                                <span className="text-white block">SHANKAR</span>
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-gotham font-light leading-relaxed">
                                Software Engineer at <span className="text-batman-gold">Akamai Technologies</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Backend developer specializing in Go, distributed systems, and cloud technologies.
                            Like Batman protects Gotham, I protect applications with robust security and scalable architecture.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.a
                                href="#contact"
                                className="btn btn-primary inline-flex items-center justify-center"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Light the Bat-Signal
                            </motion.a>

                            <motion.a
                                href="#projects"
                                className="btn btn-secondary inline-flex items-center justify-center"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.a>
                        </motion.div>

                        {/* Contact Info - Mobile responsive */}
                        <motion.div
                            className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-8 justify-center lg:justify-start text-sm md:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <a
                                href="mailto:babashankarsn@gmail.com"
                                className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors p-2 rounded-lg hover:bg-batman-gold/5"
                            >
                                <Mail size={16} className="md:w-5 md:h-5" />
                                <span className="hidden sm:inline">babashankarsn@gmail.com</span>
                                <span className="sm:hidden">Email</span>
                            </a>
                            <a
                                href="tel:+918296189723"
                                className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors p-2 rounded-lg hover:bg-batman-gold/5"
                            >
                                <Phone size={16} className="md:w-5 md:h-5" />
                                <span className="hidden sm:inline">+91 8296189723</span>
                                <span className="sm:hidden">Phone</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors p-2 rounded-lg hover:bg-batman-gold/5"
                            >
                                <Github size={16} className="md:w-5 md:h-5" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-gray-400 hover:text-batman-gold transition-colors p-2 rounded-lg hover:bg-batman-gold/5"
                            >
                                <Linkedin size={16} className="md:w-5 md:h-5" />
                                <span>LinkedIn</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image with Enhanced Cape Animation */}
                    <motion.div
                        className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Enhanced Cape Component */}
                        <EnhancedCape
                            size={window.innerWidth < 768 ? 'sm' : window.innerWidth < 1024 ? 'md' : 'lg'}
                            intensity="normal"
                            interactive={true}
                        />

                        {/* Profile Image */}
                        <motion.div
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-batman-gold shadow-2xl shadow-batman-gold/25">
                                <img
                                    src="/profile.jpg"
                                    alt="Baba Shankar SN - Software Engineer"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </div>

                            {/* Enhanced Glowing effect */}
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

                            {/* Pulse ring effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-batman-gold/30"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        {/* Floating Batman symbol */}
                        <motion.div
                            className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 opacity-30"
                            animate={{
                                rotate: [0, 360],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <div className="w-full h-full bg-batman-gold rounded-full flex items-center justify-center">
                                <span className="font-batman text-batman-black text-xs md:text-sm font-bold">B</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator - Mobile responsive */}
                <motion.div
                    className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-batman-gold"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-xs md:text-sm font-gotham">Scroll Down</span>
                        <ChevronDown size={24} className="md:w-8 md:h-8" />
                    </div>
                </motion.div>
            </div>

            {/* Background overlay for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-batman-black/80 via-transparent to-batman-black/40 pointer-events-none lg:hidden" />
        </section>
    )
}

export default Hero
