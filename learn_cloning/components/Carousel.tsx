'use client';
import React from 'react'
import { motion } from 'motion/react'
const logos = [
    'https://eyekiller.s3-assets.com/logos/Belfast-Giants-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/Oliver-Jeffers-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/ICCUlster-Hall-Waterfront-Hall-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/see-arena-brand-logo-white.svg',
    'https://eyekiller.s3-assets.com/logos/Victoria-Square-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/Belfast-Giants-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/BBC-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/Equality-Commission-For-Northern-Ireland-Logo.svg',
    'https://eyekiller.s3-assets.com/logos/w5-brand-logo-white.svg',
    'https://eyekiller.s3-assets.com/logos/grand-opera-house-brand-logo-white.svg'
];
function Carousel() {



    const duplicated = [...logos, ...logos]; // repeat for seamless loop

    return (
        <div className="overflow-hidden whitespace-nowrap w-full mt-4 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
            <motion.div
                className="flex gap-8"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                }}
            >
                {duplicated.map((logos, idx) => (
                    <img
                        key={idx}
                        src={logos}
                        alt="logo"
                        className="h-20 w-auto object-contain"
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Carousel
