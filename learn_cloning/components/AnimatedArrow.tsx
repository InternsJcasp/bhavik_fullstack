import { motion } from 'motion/react'
import React from 'react'
import Arrow from './icons/Arrow'
interface AnimatedArrowProps {
    className?: string;
}

function AnimatedArrow({ className }: AnimatedArrowProps) {
    return (

        <motion.div
            initial={{ opacity: 1, y: 0, x: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0], x: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.2, ease: 'easeInOut' }}
            className={`absolute ${className}`}>
            <Arrow />
        </motion.div>

    )
}

export default AnimatedArrow
