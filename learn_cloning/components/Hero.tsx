'use client';
import Image from 'next/image';
import React from 'react'
import { TfiFaceSmile } from "react-icons/tfi";
import { motion, scale } from 'motion/react';
import HeroImages from './HeroImages';
function Hero() {
    const [startFloat, setStartFloat] = React.useState(false);
    return (
        <div className="flex relative w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full py-36 ">
                <div className="text-5xl md:text-8xl font-black text-neutral-50 tracking-tighter mb-4 max-w-2xl text-center  uppercase flex flex-col">
                    Exceptional
                    <div className='text-pink-300 relative'>Digital
                        <span className='h-10 w-10 lg:h-16 lg:w-16 rounded-full bg-amber-500 p-2 absolute lg:bottom-2 bottom-0 inline-flex text-neutral items-center justify-center group'><TfiFaceSmile size={42} className='text-neutral-900 group-hover:rotate-45 rotate-6 transition-all duration-300 ease-linear' /></span>

                    </div>
                    Experiences
                </div>
                <p className='max-w-sm lg:max-w-2xl text-sm lg:text-lg  leading-4 lg:leading-8 tracking-tight text-center text-neutral-400'>Driving growth for leading brands and organisations through high-performing websites and results-driven digital marketing.</p>
            </div>

        <HeroImages 
            images="https://eyekiller.s3-assets.com/homepage-hero/here-we-are-oliver-jeffers.jpg" 
            className='top-8 right-10 w-20 xl:top-6 xl:right-52' 
            alt="Description of the image" />
        <HeroImages 
            images="https://eyekiller.s3-assets.com/work/featured-image/grand-opera-house-website-featured-image.jpg" 
            className='top-8 left-10 w-20 xl:top-6 xl:left-64' 
            alt="Description of the image" />
        <HeroImages 
            images="https://eyekiller.s3-assets.com/homepage-hero/jamie-robinson-eyekiller-meeting-team.jpg" 
            className='bottom-8 left-10 w-20 xl:bottom-24 xl:left-52' 
            alt="Description of the image" />
        <HeroImages 
            images="https://eyekiller.s3-assets.com/homepage-hero/arts-council-website-homepage.jpg" 
            className='bottom-8 right-10 w-20 xl:bottom-12 xl:right-64' 
            alt="Description of the image" />
            
        </div>
    )
}

export default Hero
