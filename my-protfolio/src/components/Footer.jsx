import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-batman-black border-t border-batman-gold/20">
            {/* Gotham Skyline */}
            <div className="relative h-32 overflow-hidden">
                {/* Skyline Silhouette */}
                <div className="absolute bottom-0 left-0 right-0">
                    {/* Buildings */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 bg-gradient-to-t from-batman-dark to-batman-gray"
                            style={{
                                left: `${i * 5}%`,
                                width: `${3 + Math.random() * 4}%`,
                                height: `${30 + Math.random() * 70}px`,
                            }}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.8 }}
                        >
                            {/* Building windows */}
                            {[...Array(Math.floor(Math.random() * 4) + 1)].map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="absolute w-1 h-1 bg-batman-gold/60"
                                    style={{
                                        left: `${20 + j * 25}%`,
                                        top: `${10 + j * 15}%`,
                                    }}
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Night Sky with Stars */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 60}%`,
                            }}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Bat Signal in Sky */}
                <motion.div
                    className="absolute top-4 right-1/4 w-16 h-16 opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full bg-batman-gold rounded-full blur-md"></div>
                </motion.div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="font-batman text-3xl font-bold text-batman-gold mb-2">
                            Baba Shankar SN
                        </div>
                        <p className="text-gray-400 mb-4">
                            Software Engineer & Digital Guardian
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
                            <span>Built with</span>
                            <Heart size={16} className="text-red-500 animate-pulse" />
                            <span>and lots of ☕</span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="font-batman text-batman-gold font-semibold mb-4">Quick Navigation</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { href: '#about', label: 'About' },
                                { href: '#experience', label: 'Experience' },
                                { href: '#skills', label: 'Skills' },
                                { href: '#projects', label: 'Projects' },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-batman-gold transition-colors duration-300 text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social & Contact */}
                    <motion.div
                        className="text-center md:text-right"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h4 className="font-batman text-batman-gold font-semibold mb-4">Connect</h4>
                        <div className="flex justify-center md:justify-end gap-4 mb-4">
                            <motion.a
                                href="mailto:babashankarsn@gmail.com"
                                className="bg-batman-dark/50 p-3 rounded-lg border border-batman-gold/20 hover:border-batman-gold/40 hover:bg-batman-gold/10 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail size={20} className="text-batman-gold" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="bg-batman-dark/50 p-3 rounded-lg border border-batman-gold/20 hover:border-batman-gold/40 hover:bg-batman-gold/10 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={20} className="text-batman-gold" />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="bg-batman-dark/50 p-3 rounded-lg border border-batman-gold/20 hover:border-batman-gold/40 hover:bg-batman-gold/10 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin size={20} className="text-batman-gold" />
                            </motion.a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            babashankarsn@gmail.com
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="my-8 h-px bg-gradient-to-r from-transparent via-batman-gold/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="text-gray-500 text-sm text-center md:text-left">
                        <p>&copy; 2025 Baba Shankar SN. All rights reserved.</p>
                        <p className="italic">"It's not who I am underneath, but what I code that defines me."</p>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-batman-gold/20 hover:bg-batman-gold hover:text-batman-black text-batman-gold p-3 rounded-full border border-batman-gold/30 hover:border-batman-gold transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Animated Bottom Border */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-batman-gold via-batman-yellow to-batman-gold"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1 }}
            />
        </footer>
    )
}

export default Footer
