import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const EnhancedCape = ({
    className = '',
    interactive = true,
    size = 'md',
    intensity = 'normal'
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const sizeConfig = {
        sm: { width: 120, height: 200, blur: 0.3 },
        md: { width: 180, height: 280, blur: 0.5 },
        lg: { width: 240, height: 360, blur: 0.7 },
        xl: { width: 300, height: 450, blur: 1 }
    }

    const intensityConfig = {
        subtle: { rotation: 1, scale: 0.02, duration: 4 },
        normal: { rotation: 2, scale: 0.05, duration: 3 },
        dramatic: { rotation: 3, scale: 0.08, duration: 2 }
    }

    const config = sizeConfig[size]
    const movement = intensityConfig[intensity]

    useEffect(() => {
        if (!interactive) return

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2

            setMousePosition({
                x: (clientX - centerX) / centerX,
                y: (clientY - centerY) / centerY
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [interactive])

    const baseVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    }

    const capeVariants = {
        floating: {
            rotate: [
                -movement.rotation + mousePosition.x * 2,
                movement.rotation + mousePosition.x * 2,
                -movement.rotation + mousePosition.x * 2
            ],
            scaleY: [
                1 + mousePosition.y * movement.scale,
                1.05 + mousePosition.y * movement.scale,
                1 + mousePosition.y * movement.scale
            ],
            scaleX: [
                1 - Math.abs(mousePosition.x) * movement.scale,
                1 + Math.abs(mousePosition.x) * movement.scale * 0.5,
                1 - Math.abs(mousePosition.x) * movement.scale
            ],
            transition: {
                duration: movement.duration,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    const foldVariants = {
        floating: (i) => ({
            opacity: [0.6, 0.9, 0.6],
            scaleY: [0.8, 1.2, 0.8],
            x: [0, Math.sin(i) * 5, 0],
            transition: {
                duration: movement.duration + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
            }
        })
    }

    return (
        <motion.div
            ref={ref}
            variants={baseVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`cape-container ${className}`}
            style={{
                position: 'absolute',
                zIndex: -10,
                left: '-60px',
                top: '-40px',
                width: `${config.width}px`,
                height: `${config.height}px`,
                transformOrigin: '50% 15%',
                pointerEvents: 'none'
            }}
        >
            {/* Main cape body */}
            <motion.div
                variants={capeVariants}
                animate="floating"
                className="cape-main"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(
            ellipse at 50% 20%,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(10, 10, 10, 0.85) 25%,
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0.4) 75%,
            transparent 100%
          )`,
                    borderRadius: '50% 50% 45% 45% / 60% 60% 40% 40%',
                    filter: `blur(${config.blur}px)`,
                    backdropFilter: 'blur(2px)',
                    boxShadow: `
            inset 0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 -20px 40px rgba(255, 215, 0, 0.05),
            0 0 30px rgba(0, 0, 0, 0.5)
          `
                }}
            />

            {/* Cape folds for more realistic movement */}
            {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                    key={i}
                    variants={foldVariants}
                    animate="floating"
                    custom={i}
                    style={{
                        position: 'absolute',
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 10}%`,
                        width: '20%',
                        height: '50%',
                        background: `linear-gradient(
              ${180 + i * 30}deg,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(26, 26, 26, 0.2) 50%,
              transparent 100%
            )`,
                        borderRadius: '50% 50% 40% 40% / 70% 70% 30% 30%',
                        filter: `blur(${config.blur * 0.5}px)`,
                        transformOrigin: 'top center'
                    }}
                />
            ))}

            {/* Inner shadow for depth */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '10%',
                    background: `radial-gradient(
            ellipse at 50% 30%,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.6) 100%
          )`,
                    borderRadius: '50% 50% 45% 45% / 60% 60% 40% 40%',
                    pointerEvents: 'none'
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: movement.duration * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Subtle edge highlights */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `conic-gradient(
            from 180deg at 50% 20%,
            transparent 0deg,
            rgba(255, 215, 0, 0.1) 45deg,
            transparent 90deg,
            rgba(255, 215, 0, 0.05) 180deg,
            transparent 270deg,
            rgba(255, 215, 0, 0.1) 315deg,
            transparent 360deg
          )`,
                    borderRadius: '50% 50% 45% 45% / 60% 60% 40% 40%',
                    filter: `blur(${config.blur * 2}px)`,
                    opacity: 0.6
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </motion.div>
    )
}

export default EnhancedCape
