'use client'

import React from 'react'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { setupImage } from '@/app/helpers/setup'
import Link from 'next/link'

export default function LastSection() {
  return (
    <ParallaxProvider>
      <div className='py-40 flex flex-col gap-3 items-center justify-center text-center relative min-h-screen overflow-hidden'>
        <Parallax speed={-20} className='absolute inset-0 z-0'>
          <div className='w-full h-full'>
            <Image
              className='w-full h-full object-cover opacity-20'
              fill
              alt='Chef cooking in a kitchen'
              src={`${setupImage}images/chef-cinematic-2.webp`}
              priority
            />
          </div>
        </Parallax>
        <div className='relative z-10'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl mb-6 font-bold'>Ready to Savor Every Bite?</h1>
          <button className='btn btn-accent'>
            <Link href={'/register'}>Get Started</Link>
          </button>
        </div>
      </div>
    </ParallaxProvider>
  )
}