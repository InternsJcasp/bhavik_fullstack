import Image from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="w-full max-w-2xl group max-h-min overflow-clip cursor-pointer">
        <div className='w-full'>        
            <Image 
            className=" w-full h-auto object-cover rounded-2xl"
            src={imageUrl}
            alt="Placeholder Image"
            width={500}
            height={300}
        />
        </div>

        <h2 className='text-3xl lg:text-4xl group-hover:underline underline-offset-4 decoration-2 duration-300 transition-all tracking-tighter uppercase max-w-md mt-4 font-semibold text-neutral-50'>{title}</h2>
        <p className='text-md lg:text-lg tracking-tight leading-6 mt-3 text-neutral-500'>{description}</p>
    </div>
  )
}

export default Card
