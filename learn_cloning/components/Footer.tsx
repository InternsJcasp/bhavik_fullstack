import Image from 'next/image'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiFaceSmile } from 'react-icons/tfi';
const explore = [{
    title: "WORK"
},
{
    title: "SERVICES"
},
{
    title: "EXPLORE"
},
{
    title: "ABOUT"
},
{
    title: "CONTACT"
},
{
    title: "CAREERS"
}]

const contact = [{
    title: "facebook",
    icon: <FaFacebookF size={22} />
},
{
    title: "twitter",
    icon: <FaXTwitter size={22} />
},
{
    title: "linkedin",
    icon: <FaLinkedinIn size={22} />
},
{
    title: "instagram",
    icon: <FaInstagram size={22} />
}]
function Footer() {
    return (

        <div className="flex flex-col  justify-center w-full bg-neutral-900 rounded-2xl  text-neutral-50 px-8 md:px-14 items-start ">
            <div className='flex flex-col lg:flex-row py-20 gap-0 lg:gap-52'>
                <div className='flex flex-col items-start '>
                    <h1 className='relative font-bold tracking-tighter text-5xl lg:text-8xl uppercase  flex max-w-sm flex-wrap'>Let's work together
                        <span className='h-16 w-16 rounded-full bg-amber-500 p-2.5 absolute -bottom-4 right-0 lg:bottom-24 lg:right-6 inline-flex text-neutral items-center justify-center group'><TfiFaceSmile size={48} className='text-neutral-900 group-hover:rotate-45 rotate-6 transition-all duration-300 ease-linear' /></span>
                    </h1>
                    <div className='mt-12  relative  text-2xl bg-amber-500 p-3 items-center justify-center text-neutral-900 rounded-full group cursor-pointer font-bold flex flex-row pr-6 tracking-tighter'>
                        <span className='flex items-center mr-3'>
                            <Image
                                className="w-max h-10 "
                                src="https://eyekiller.com/build/images/lets-talk-peoples.png"
                                alt="Eye Killer Icon"
                                width={80}
                                height={80}
                            />


                        </span>

                        LET'S TALK
                        <span className='absolute bordborder-amber-500 rounded-full opacity-0  group-hover:inset-[-6px] group-hover:opacity-100  inset-0 transition-all duration-300'></span>
                    </div>
                </div>
                <div className='flex flex-row gap-8 lg:gap-0'>
                    <div className='flex flex-col  ml-0 lg:ml-16 mt-2  '>
                        <span className='uppercase text-lg md:text-2xl font-bold tracking-tighter mb-3'>explore</span>
                        {explore.map((explore, idx) =>
                            <div className='flex flex-col my-2.5 font-normal text-neutral-400 underline underline-offset-2 decoration-1 text-sm' key={explore.title} >{explore.title}</div>)}
                    </div>
                    <div className='flex flex-col  ml-0 lg:ml-16 mt-2  '>
                        <span className='uppercase text-lg lg:text-2xl font-bold tracking-tighter mb-3'>Say Hello</span>
                        <div className='flex flex-col my-2.5 font-normal text-neutral-400 underline underline-offset-2 decoration-1 text-sm'>+44 (0)28 9146 2888</div>
                        <div className='flex flex-col my-2.5 font-normal text-neutral-400 underline underline-offset-2 decoration-1 text-sm'>hello@eyekiller.com</div>
                        <div className='flex flex-row'>
                            {contact.map((contact, idx) =>
                                <div className='flex flex-row my-2.5 font-normal text-neutral-500 items-center' key={contact.title}>
                                    <span className="h-12 w-12 border-2 mr-2  border-neutral-700 hover:border-amber-500 transition-all duration-300 cursor-pointer p-3 rounded-full flex items-center justify-center text-neutral-50">
                                        {contact.icon}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-b-1 border-dashed border-neutral-700'></div>
            <div className='w-full flex flex-wrap items-start text-sm text-neutral-300 font-normal tracking-tight gap-6 py-12'>
                <span className='cursor-pointer'>© 2025 Eyekiller Ltd</span>
                <span className='cursor-pointer'>Company Reg Number NI045770</span>
                <span className='underline underline-offset-2 decoration-1 cursor-pointer'>Accessibility Statement</span>
                <span className='underline underline-offset-2 decoration-1 cursor-pointer'>Privacy Policy</span>
                <span className='underline underline-offset-2 decoration-1 cursor-pointer'>Cookie Policy</span>
                <span className='underline underline-offset-2 decoration-1 cursor-pointer'>Manage Cookies</span>
            </div>
        </div>

    )
}

export default Footer
