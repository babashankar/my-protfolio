import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Batbike = ({
    trigger = false,
    onComplete = () => { },
    direction = 'right',
    speed = 'normal'
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [exhaustTrail, setExhaustTrail] = useState([])

    const speedConfig = {
        slow: { duration: 4, particles: 10 },
        normal: { duration: 2.5, particles: 15 },
        fast: { duration: 1.5, particles: 20 }
    }

    useEffect(() => {
        if (trigger) {
            setIsVisible(true)

            // Generate exhaust trail
            const config = speedConfig[speed]
            const newTrail = Array.from({ length: config.particles }, (_, i) => ({
                id: i,
                delay: i * 0.05,
                offset: i * 8
            }))
            setExhaustTrail(newTrail)

            const timer = setTimeout(() => {
                setIsVisible(false)
                onComplete()
            }, config.duration * 1000 + 500)

            return () => clearTimeout(timer)
        }
    }, [trigger, onComplete, speed])

    const bikeVariants = {
        hidden: {
            x: direction === 'right' ? '-100vw' : '100vw',
            rotate: direction === 'right' ? -3 : 3,
            scale: 0.9
        },
        visible: {
            x: direction === 'right' ? '100vw' : '-100vw',
            rotate: direction === 'right' ? 3 : -3,
            scale: 1,
            transition: {
                duration: speedConfig[speed].duration,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const trailVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0
        },
        visible: (i) => ({
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
            x: direction === 'right' ? [-i * 3, -i * 6, -i * 12] : [i * 3, i * 6, i * 12],
            y: [0, Math.random() * 10 - 5, Math.random() * 20 - 10],
            transition: {
                duration: 1.5,
                delay: exhaustTrail[i]?.delay || 0,
                ease: "easeOut"
            }
        })
    }

    if (!isVisible) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
            >
                {/* Batbike */}
                <motion.div
                    variants={bikeVariants}
                    className="absolute top-2/3 w-20 h-8 transform -translate-y-1/2"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Main bike body */}
                    <div className="relative w-full h-full">
                        {/* Chassis */}
                        <div className="absolute inset-0 bg-gradient-to-r from-batman-gray via-batman-lightgray to-batman-gray rounded transform skew-x-12 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded" />
                        </div>

                        {/* Front section */}
                        <div className="absolute top-0 left-0 w-8 h-6 bg-gradient-to-br from-batman-dark to-batman-black rounded-l-lg transform -skew-x-6">
                            {/* Headlight */}
                            <div className="absolute top-1/2 -left-1 w-3 h-2 bg-batman-gold rounded-full shadow-lg animate-pulse-glow transform -translate-y-1/2" />
                        </div>

                        {/* Rider silhouette */}
                        <div className="absolute top-0 left-1/4 w-6 h-5 bg-gradient-to-b from-batman-black to-batman-dark rounded-t-lg opacity-80">
                            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-batman-dark rounded-full transform -translate-x-1/2" />
                        </div>

                        {/* Rear section */}
                        <div className="absolute top-1 right-0 w-6 h-4 bg-gradient-to-l from-batman-gray to-batman-dark rounded-r-lg transform skew-x-6" />

                        {/* Wheels */}
                        <div className="absolute -bottom-2 left-2 w-4 h-4 bg-batman-black rounded-full border-2 border-batman-gold shadow-lg">
                            <div className="absolute inset-1 bg-batman-dark rounded-full" />
                        </div>
                        <div className="absolute -bottom-2 right-2 w-4 h-4 bg-batman-black rounded-full border-2 border-batman-gold shadow-lg">
                            <div className="absolute inset-1 bg-batman-dark rounded-full" />
                        </div>

                        {/* Exhaust */}
                        <div className="absolute top-1/2 right-0 w-3 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full animate-pulse" />
                    </div>
                </motion.div>

                {/* Exhaust trail */}
                {exhaustTrail.map((trail) => (
                    <motion.div
                        key={trail.id}
                        variants={trailVariants}
                        custom={trail.id}
                        className="absolute top-2/3 left-0 w-1 h-1"
                        style={{
                            background: `radial-gradient(circle, ${['#ff4500', '#ff6347', '#ffd700', '#ff8c00'][trail.id % 4]
                                }, transparent)`,
                            borderRadius: '50%',
                            filter: 'blur(0.5px)',
                            left: `${trail.offset}px`
                        }}
                    />
                ))}

                {/* Speed streaks */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-batman-gold/60 to-transparent"
                        style={{
                            top: `${60 + i * 3}%`,
                            width: '100vw'
                        }}
                        initial={{
                            scaleX: 0,
                            x: direction === 'right' ? '-100%' : '100%'
                        }}
                        animate={{
                            scaleX: 1,
                            x: direction === 'right' ? '100%' : '-100%'
                        }}
                        transition={{
                            duration: speedConfig[speed].duration * 0.8,
                            delay: i * 0.1,
                            ease: "easeOut"
                        }}
                    />
                ))}

                {/* Ground dust effect */}
                <motion.div
                    className="absolute bottom-20 left-0 w-full h-8 bg-gradient-to-t from-batman-gold/10 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default Batbike
