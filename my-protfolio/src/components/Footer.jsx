import React from 'react'
import { motion } from 'framer-motion'
import {
    Github,
    Linkedin,
    Mail,
    Heart,
    ArrowUp,
    MapPin,
    Phone,
    Globe,
    Code,
    Zap,
    Star,
    Shield
} from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const navigationLinks = [
        { href: '#hero', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#hobbies', label: 'Hobbies' },
        { href: '#contact', label: 'Contact' }
    ]

    const socialLinks = [
        {
            href: 'mailto:babashankarsn@gmail.com',
            icon: <Mail className="w-5 h-5" />,
            label: 'Email',
            color: 'hover:text-red-400'
        },
        {
            href: 'https://github.com/yourusername',
            icon: <Github className="w-5 h-5" />,
            label: 'GitHub',
            color: 'hover:text-gray-300'
        },
        {
            href: 'https://linkedin.com/in/yourprofile',
            icon: <Linkedin className="w-5 h-5" />,
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        }
    ]

    const techStack = [
        'React', 'Node.js', 'Python', 'TypeScript', 'Tailwind CSS', 'Framer Motion'
    ]

    return (
        <footer className="relative bg-gotham-dark border-t border-bat-yellow/20 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-gotham-darker to-gotham-dark"></div>

                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-5">
                    <motion.div
                        className="absolute top-10 left-10 w-32 h-32 bg-bat-yellow rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-10 right-10 w-40 h-40 bg-bat-blue rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>

                {/* Floating tech icons */}
                <div className="absolute inset-0 opacity-5">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.05, 0.15, 0.05],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 10 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        >
                            {i % 4 === 0 && <Code className="w-4 h-4 text-bat-yellow" />}
                            {i % 4 === 1 && <Zap className="w-4 h-4 text-bat-yellow" />}
                            {i % 4 === 2 && <Star className="w-4 h-4 text-bat-yellow" />}
                            {i % 4 === 3 && <Shield className="w-4 h-4 text-bat-yellow" />}
                        </motion.div>
                    ))}
                </div>

                {/* Gotham Skyline */}
                <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
                    {/* Buildings */}
                    {Array.from({ length: 25 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 bg-gradient-to-t from-gotham-darker to-gotham-gray"
                            style={{
                                left: `${i * 4}%`,
                                width: `${2 + Math.random() * 3}%`,
                                height: `${20 + Math.random() * 40}px`,
                            }}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 0.7 }}
                            transition={{ delay: i * 0.03, duration: 0.8 }}
                        >
                            {/* Building windows */}
                            {Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="absolute w-1 h-1 bg-bat-yellow/40 rounded-full"
                                    style={{
                                        left: `${15 + j * 30}%`,
                                        top: `${10 + j * 20}%`,
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.8, 0.2],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    ))}

                    {/* Bat Signal in Sky */}
                    <motion.div
                        className="absolute top-2 right-1/4 w-12 h-12 md:w-16 md:h-16 opacity-10"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.05, 0.2, 0.05],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-full h-full bg-bat-yellow rounded-full blur-lg"></div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand & About */}
                    <motion.div
                        className="xl:col-span-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Baba Shankar <span className="text-transparent bg-clip-text bg-gradient-to-r from-bat-yellow to-amber-400">SN</span>
                            </h3>
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-bat-yellow" />
                                <span className="text-gotham-light text-sm md:text-base">Full Stack Developer & Digital Guardian</span>
                            </div>
                        </div>

                        <p className="text-gotham-light text-sm md:text-base leading-relaxed mb-6 max-w-md">
                            Protecting Gotham's digital realm with clean code, innovative solutions, and a passion for creating exceptional user experiences.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gotham-light text-sm">
                                <MapPin className="w-4 h-4 text-bat-yellow flex-shrink-0" />
                                <span>Bengaluru, Karnataka, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-gotham-light text-sm">
                                <Phone className="w-4 h-4 text-bat-yellow flex-shrink-0" />
                                <a href="tel:+918296189723" className="hover:text-bat-yellow transition-colors">
                                    +91 8296189723
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gotham-light text-sm">
                                <Mail className="w-4 h-4 text-bat-yellow flex-shrink-0" />
                                <a href="mailto:babashankarsn@gmail.com" className="hover:text-bat-yellow transition-colors truncate">
                                    babashankarsn@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-bat-yellow" />
                            Navigation
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                            {navigationLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gotham-light hover:text-bat-yellow transition-colors duration-300 text-sm md:text-base group flex items-center gap-2"
                                    whileHover={{ x: 5 }}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="w-1 h-1 bg-bat-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social & Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Social Links */}
                        <div className="mb-8">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-bat-yellow" />
                                Connect
                            </h4>
                            <div className="flex gap-4 mb-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-gotham-gray/20 p-3 rounded-xl border border-bat-yellow/20 hover:border-bat-yellow/40 hover:bg-bat-yellow/10 transition-all duration-300 text-bat-yellow ${social.color} group`}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h5 className="text-sm font-semibold text-gotham-light mb-3 flex items-center gap-2">
                                <Code className="w-4 h-4 text-bat-yellow" />
                                Built With
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        className="px-2 py-1 bg-gotham-gray/20 text-gotham-light text-xs rounded-lg border border-bat-yellow/10 hover:border-bat-yellow/30 transition-colors"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="my-8 md:my-12 h-px bg-gradient-to-r from-transparent via-bat-yellow/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                />

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="text-gotham-light text-sm text-center sm:text-left">
                        <p className="mb-2">
                            &copy; {currentYear} Baba Shankar SN. All rights reserved.
                        </p>
                        <p className="italic flex items-center gap-2 justify-center sm:justify-start">
                            <span>Built with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>and lots of ☕ in Gotham</span>
                        </p>
                        <p className="text-xs mt-2 opacity-75">
                            "It's not who I am underneath, but what I code that defines me."
                        </p>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-gradient-to-r from-bat-yellow/20 to-amber-400/20 hover:from-bat-yellow hover:to-amber-400 text-bat-yellow hover:text-gotham-dark p-3 md:p-4 rounded-xl border border-bat-yellow/30 hover:border-bat-yellow transition-all duration-300 group"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Animated Bottom Border */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bat-yellow via-amber-400 to-bat-yellow"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
            />

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-bat-yellow/5 to-transparent pointer-events-none"></div>
        </footer>
    )
}

export default Footer
