import React from 'react'
import { motion } from 'framer-motion'

const BatmobileTransition = () => {
    return (
        <div className="relative h-20 overflow-hidden bg-gradient-to-r from-batman-black via-batman-dark to-batman-black">
            {/* Batmobile Animation */}
            <motion.div
                className="absolute top-1/2 transform -translate-y-1/2"
                initial={{ x: '-100vw' }}
                animate={{ x: '100vw' }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut"
                }}
            >
                <div className="w-20 h-8 bg-gradient-to-r from-batman-gray to-batman-lightgray rounded-lg relative">
                    {/* Car body */}
                    <div className="absolute inset-0 bg-batman-dark rounded-lg"></div>
                    {/* Wheels */}
                    <div className="absolute -bottom-1 left-1 w-3 h-3 bg-batman-lightgray rounded-full"></div>
                    <div className="absolute -bottom-1 right-1 w-3 h-3 bg-batman-lightgray rounded-full"></div>
                    {/* Batman logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-2 bg-batman-gold rounded-sm opacity-80"></div>
                    </div>
                    {/* Exhaust glow */}
                    <motion.div
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-batman-gold to-transparent"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>

            {/* Road effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-batman-gold to-transparent opacity-30"></div>
        </div>
    )
}

export default BatmobileTransition
