import React from 'react'
import { setupImage } from '@/app/helpers/setup'
import { images } from '@/app/helpers/images'
import Image from 'next/image'

export default function TrendingRecipeSection() {
    return (
        <div className='h-screen
                    flex flex-col gap-3
                    items-center justify-center
                    text-center'>
            <div>
                <h1 className="text-3xl mb-1 font-bold">Our Community’s Culinary Showcase</h1>
                <p>A collection of recipes crafted and shared by food lovers like you</p>
            </div>
            <div className='flex gap-3 h-96 justify-center items-center'>
                {images.map((image, index) => (
                    <div key={index} className="relative w-64 h-full hover:scale-105 duration-200 ease-in-out">
                        <Image
                            className='hover:shadow-xl rounded-md'
                            fill
                            objectFit='cover'
                            alt={`${image.alt}`}
                            src={`${setupImage}${image.src}`}
                        />
                        <p className='absolute bottom-0 
                                    bg-black/40 px-2 py-1 m-1 
                                    rounded-btn backdrop-blur-lg'>
                            {image.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
