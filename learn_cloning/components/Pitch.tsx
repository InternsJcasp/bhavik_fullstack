'use client';
import React from 'react'
import { motion } from 'motion/react'
import { TfiFaceSmile } from "react-icons/tfi";
import { FaStarOfLife } from "react-icons/fa";
import Arrow from './icons/Arrow';
import AnimatedArrow from './AnimatedArrow';

function Pitch() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div>
                <div className="text-3xl md:text-7xl font-bold text-neutral-50 tracking-tighter mb-4 max-w-3xl w-full text-center justify-center items-center flex flex-col py-28 lg:py-48 relative">
                    <div className='uppercase'>Dedicated to</div>
                    <div className='relative'>
                        <div
                            className="uppercase relative z-50"
                        >delivering results
                        </div>
                        <div
                            className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-amber-500 p-2 absolute lg:-bottom-[34px] left-3 lg:-left-[50px] inline-flex text-neutral items-center justify-center group z-10'>
                                <TfiFaceSmile size={42} className='text-neutral-900 group-hover:rotate-45 rotate-6 transition-all duration-300 ease-linear' />
                        </div>
                        <div
                            className='h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-cyan-300 p-3.5 absolute lg:-top-[46px] right-8 -top-12 lg:-right-[50px] inline-flex text-neutral items-center justify-center group z-10'>
                                <FaStarOfLife size={42} className='text-neutral-900 group-hover:rotate-45 rotate-6 transition-all duration-300 ease-linear' />
                        </div>
                    </div>
                    <div className='uppercase'>for top brands</div>
                    <p className='flex max-w-sm lg:max-w-2xl text-sm lg:text-lg tracking-tight font-normal mt-6 leading-6 lg:leading-8 '>Collaboration is at the core of everything we do. Your goals shape the strategy, drive our creative innovation, and define success at every stage.</p>

                    <AnimatedArrow className='absolute bottom-16 -right-6 scale-50 lg:scale-100 lg:bottom-32 lg:-right-24 rotate-180 ' />
                    <AnimatedArrow className='absolute top-16 -left-6 lg:top-32  scale-50 lg:scale-100  lg:-left-24' />
                    <AnimatedArrow className='absolute top-16 -right-6 lg:top-32  scale-50 lg:scale-100  lg:-right-24 rotate-110' />
                    <AnimatedArrow className='absolute bottom-16 -left-6 lg:bottom-32  scale-50 lg:scale-100  lg:-left-24 -rotate-70' />
                </div>
            </div>
        </div>
    )
}

export default Pitch;

