'use client'
import { motion } from 'motion/react'
import React from 'react'
import Image from 'next/image'

interface HeroImagesProps {
  images: string;
  className?: string;
  alt?: string;
}
function HeroImages({ images, className, alt }: HeroImagesProps) {
    const [ startFloat, setStartFloat ] = React.useState(false)
  return (
    <div>
        <motion.div
            className={`absolute ${className}`}
            initial={{ scale: 0.3 , filter: 'blur(2px)' }}
            animate={
                startFloat
                    ? { y: ['0%', '-4%', '0%'], scale: 1 ,filter: 'blur(0px)'   }
                    : { scale: 1 , filter: 'blur(0px)' }
            }
            transition={
                startFloat
                    ? {
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut'
                    }
                    : {
                        duration: 1,
                        ease: 'easeOut'
                    }
            }
            onAnimationComplete={() => {
                if (!startFloat) {
                    setStartFloat(true)
                }
            }}
        >
            <Image                
                src={images}
                alt={alt || "Description of the image"}
                height={100}
                width={100}
                className="w-32 h-auto object-cover rounded-lg"
            />
        </motion.div>
      
    </div>
  )
}

export default HeroImages
