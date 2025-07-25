import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, GraduationCap, Briefcase, Code, FolderOpen, Heart, Mail } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'projects', label: 'Projects', icon: FolderOpen },
        { id: 'hobbies', label: 'Hobbies', icon: Heart },
        { id: 'contact', label: 'Contact', icon: Mail },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        const handleSectionChange = () => {
            const sections = navItems.map(item => item.id)
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i])
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleSectionChange)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', handleSectionChange)
        }
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80
            const elementPosition = element.offsetTop - offset
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
        setIsMobileMenuOpen(false)
    }

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const mobileMenuVariants = {
        closed: {
            x: '100%',
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        open: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const menuItemVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        })
    }

    const hamburgerbVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    }

    return (
        <>
            <motion.nav
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-batman-black/95 backdrop-blur-md border-b border-batman-gold/20 shadow-lg shadow-batman-gold/10'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container-responsive">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('home')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-batman-gold to-batman-yellow rounded-lg flex items-center justify-center shadow-lg">
                                <span className="font-batman font-bold text-batman-black text-lg md:text-xl">B</span>
                            </div>
                            <div className="hidden sm:block">
                                <div className="font-batman text-lg md:text-xl font-bold text-white">
                                    BABA <span className="gradient-text">SHANKAR</span>
                                </div>
                                <div className="text-xs text-batman-gold">Dark Knight Developer</div>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = activeSection === item.id

                                return (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isActive
                                                ? 'text-batman-gold bg-batman-gold/10 shadow-md'
                                                : 'text-gray-300 hover:text-batman-gold hover:bg-batman-gold/5'
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon size={16} />
                                        <span>{item.label}</span>

                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-batman-gold/20 to-batman-yellow/20 rounded-lg border border-batman-gold/30"
                                                layoutId="activeNav"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </motion.button>
                                )
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            variants={hamburgerbVariants}
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 md:w-12 md:h-12 bg-batman-gold/10 backdrop-blur-sm border border-batman-gold/20 rounded-lg flex items-center justify-center text-batman-gold hover:bg-batman-gold/20 transition-all duration-300 focus-visible"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-batman-black/80 backdrop-blur-sm z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-batman-dark/95 backdrop-blur-xl border-l border-batman-gold/20 z-50 lg:hidden"
                        >
                            <div className="flex flex-col h-full pt-20 pb-6 px-6">
                                {/* Mobile Menu Header */}
                                <div className="mb-8">
                                    <div className="font-batman text-xl font-bold text-white mb-2">
                                        Navigation
                                    </div>
                                    <div className="text-sm text-batman-gold">
                                        Explore the Dark Knight's domain
                                    </div>
                                </div>

                                {/* Mobile Menu Items */}
                                <div className="flex-1 space-y-2">
                                    {navItems.map((item, index) => {
                                        const Icon = item.icon
                                        const isActive = activeSection === item.id

                                        return (
                                            <motion.button
                                                key={item.id}
                                                variants={menuItemVariants}
                                                custom={index}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`w-full flex items-center space-x-4 p-4 rounded-xl text-left transition-all duration-300 ${isActive
                                                        ? 'bg-batman-gold/10 text-batman-gold border border-batman-gold/30 shadow-lg'
                                                        : 'text-gray-300 hover:text-batman-gold hover:bg-batman-gold/5 border border-transparent'
                                                    }`}
                                                whileHover={{ scale: 1.02, x: 4 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive
                                                        ? 'bg-batman-gold/20 text-batman-gold'
                                                        : 'bg-batman-gray/50 text-gray-400'
                                                    }`}>
                                                    <Icon size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{item.label}</div>
                                                    <div className="text-xs text-gray-400">
                                                        {item.id === 'home' && 'Welcome to Gotham'}
                                                        {item.id === 'about' && 'The origin story'}
                                                        {item.id === 'education' && 'Academic journey'}
                                                        {item.id === 'experience' && 'Professional path'}
                                                        {item.id === 'skills' && 'Arsenal of tools'}
                                                        {item.id === 'projects' && 'Built for justice'}
                                                        {item.id === 'hobbies' && 'Beyond the cape'}
                                                        {item.id === 'contact' && 'Light the signal'}
                                                    </div>
                                                </div>
                                            </motion.button>
                                        )
                                    })}
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="mt-8 pt-6 border-t border-batman-gold/20">
                                    <div className="text-center text-sm text-gray-400">
                                        <div className="mb-2">Built with React & Framer Motion</div>
                                        <div className="text-batman-gold font-medium">
                                            © 2025 Baba Shankar SN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
