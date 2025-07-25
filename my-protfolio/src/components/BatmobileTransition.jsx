import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import EnhancedBatmobile from './EnhancedBatmobile'
import Batbike from './Batbike'

const BatmobileTransition = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    const [showBatmobile, setShowBatmobile] = useState(false)
    const [showBatbike, setShowBatbike] = useState(false)

    useEffect(() => {
        if (inView) {
            // Start with Batmobile
            setTimeout(() => setShowBatmobile(true), 500)

            // Show Batbike after Batmobile completes
            setTimeout(() => setShowBatbike(true), 4000)
        }
    }, [inView])

    const handleBatmobileComplete = () => {
        setShowBatmobile(false)
    }

    const handleBatbikeComplete = () => {
        setShowBatbike(false)
    }

    return (
        <section className="relative h-32 md:h-48 bg-gradient-to-b from-batman-dark to-batman-black overflow-hidden">
            {/* Road/Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-batman-black via-batman-gray/50 to-transparent">
                {/* Road markings */}
                <div className="absolute bottom-4 md:bottom-8 left-0 right-0 h-1 bg-batman-gold/30">
                    <motion.div
                        className="h-full bg-batman-gold"
                        animate={{
                            x: ['-100%', '100%']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>

                {/* Dotted center line */}
                <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-4 md:w-8 h-1 bg-batman-gold/60 mx-2"
                            animate={{
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Background speed lines */}
            <div className="absolute inset-0 pointer-events-none" ref={ref}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-batman-gold/40 to-transparent"
                        style={{
                            top: `${20 + i * 8}%`,
                            width: '100%'
                        }}
                        animate={inView ? {
                            x: ['-100%', '100%']
                        } : {}}
                        transition={{
                            duration: 1.5,
                            repeat: inView ? Infinity : 0,
                            delay: i * 0.1,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Gotham cityscape silhouette */}
            <div className="absolute top-0 left-0 right-0 h-20 md:h-32 opacity-20">
                {Array.from({ length: window.innerWidth < 768 ? 8 : 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bottom-0 bg-batman-dark"
                        style={{
                            left: `${i * 7}%`,
                            width: `${3 + Math.random() * 4}%`,
                            height: `${40 + Math.random() * 60}%`,
                        }}
                    />
                ))}
            </div>

            {/* Vehicle animations */}
            <EnhancedBatmobile
                trigger={showBatmobile}
                onComplete={handleBatmobileComplete}
                size="lg"
                variant="transition"
            />

            <Batbike
                trigger={showBatbike}
                onComplete={handleBatbikeComplete}
                direction="right"
                speed="fast"
            />

            {/* Section divider glow */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-batman-gold to-transparent"
                animate={{
                    opacity: [0.3, 1, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            />

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-batman-gold to-transparent"
                animate={{
                    opacity: [0.3, 1, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1
                }}
            />

            {/* Atmospheric particles */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-batman-gold/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 60}%`,
                    }}
                    animate={{
                        x: [0, -100],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Text overlay for mobile */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="text-center opacity-30 md:opacity-20"
                    animate={{
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity
                    }}
                >
                    <div className="font-batman text-xs md:text-sm text-batman-gold">
                        Transitioning through Gotham...
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default BatmobileTransition
