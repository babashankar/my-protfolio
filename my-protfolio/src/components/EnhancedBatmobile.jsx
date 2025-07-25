import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EnhancedBatmobile = ({
    trigger = false,
    onComplete = () => { },
    size = 'md',
    variant = 'transition'
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [particles, setParticles] = useState([])

    const sizeClasses = {
        sm: 'w-16 h-6',
        md: 'w-24 h-8',
        lg: 'w-32 h-10',
        xl: 'w-40 h-12'
    }

    useEffect(() => {
        if (trigger) {
            setIsVisible(true)

            // Generate exhaust particles
            const newParticles = Array.from({ length: 15 }, (_, i) => ({
                id: i,
                delay: i * 0.1,
                duration: 2 + Math.random() * 1
            }))
            setParticles(newParticles)

            const timer = setTimeout(() => {
                setIsVisible(false)
                onComplete()
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [trigger, onComplete])

    const batmobileVariants = {
        hidden: {
            x: '-100vw',
            rotate: -5,
            scale: 0.8
        },
        visible: {
            x: '100vw',
            rotate: 5,
            scale: 1,
            transition: {
                duration: 3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        exit: {
            x: '120vw',
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }

    const particleVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0
        },
        visible: (i) => ({
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [-20 - i * 5, -40 - i * 10, -60 - i * 15],
            y: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
            transition: {
                duration: particles[i]?.duration || 2,
                delay: particles[i]?.delay || 0,
                ease: "easeOut"
            }
        })
    }

    if (!isVisible && variant === 'transition') return null

    return (
        <AnimatePresence>
            {(isVisible || variant !== 'transition') && (
                <motion.div
                    className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Batmobile */}
                    <motion.div
                        variants={batmobileVariants}
                        className={`absolute top-1/2 ${sizeClasses[size]} transform -translate-y-1/2`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Main Body */}
                        <div className="relative w-full h-full">
                            {/* Primary body */}
                            <div className="absolute inset-0 bg-gradient-to-r from-batman-dark via-batman-gray to-batman-dark rounded-lg shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                            </div>

                            {/* Cockpit */}
                            <div className="absolute top-0 left-1/4 w-1/2 h-3/4 bg-gradient-to-b from-batman-black to-batman-dark rounded-t-lg border border-batman-gold/20">
                                <div className="absolute inset-1 bg-batman-black/80 rounded-t-md" />
                            </div>

                            {/* Front section */}
                            <div className="absolute top-1/4 -left-2 w-4 h-1/2 bg-gradient-to-r from-batman-gray to-batman-black transform -skew-y-12 rounded-l-lg" />

                            {/* Rear wing */}
                            <div className="absolute top-1/4 -right-3 w-6 h-1/2 bg-gradient-to-l from-batman-dark to-batman-black transform skew-y-12 rounded-r-lg shadow-lg" />

                            {/* Wheels */}
                            <div className="absolute -bottom-1 left-1/6 w-3 h-3 bg-batman-black rounded-full border border-batman-gold/40" />
                            <div className="absolute -bottom-1 right-1/6 w-3 h-3 bg-batman-black rounded-full border border-batman-gold/40" />

                            {/* Headlights */}
                            <div className="absolute top-1/2 -left-1 w-2 h-1 bg-batman-gold rounded-full shadow-lg animate-pulse-glow" />

                            {/* Exhaust glow */}
                            <div className="absolute top-1/2 -right-2 w-4 h-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent rounded-full opacity-80 animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Exhaust Particles */}
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            variants={particleVariants}
                            custom={particle.id}
                            className="absolute top-1/2 left-0 w-2 h-2"
                            style={{
                                background: `radial-gradient(circle, ${['#ff6b35', '#f7931e', '#ffd700', '#ff8c00'][particle.id % 4]
                                    }, transparent)`,
                                borderRadius: '50%',
                                filter: 'blur(1px)'
                            }}
                        />
                    ))}

                    {/* Light trail */}
                    <motion.div
                        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-batman-gold via-yellow-400 to-transparent transform -translate-y-1/2 opacity-60"
                        initial={{ width: 0 }}
                        animate={{ width: '100vw' }}
                        transition={{ duration: 3, ease: "easeOut" }}
                    />

                    {/* Speed lines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px bg-gradient-to-r from-transparent via-batman-gold to-transparent"
                            style={{
                                top: `${45 + i * 2}%`,
                                left: 0,
                                right: 0,
                                opacity: 0.3
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 2,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default EnhancedBatmobile
