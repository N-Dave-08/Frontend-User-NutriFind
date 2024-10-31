import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { setupImage } from '@/app/helpers/setup'

export default function notFound() {
    return (
        <div className='
        flex flex-col 
        justify-center 
        items-center 
        h-screen w-full 
        space-y-32'>
            <div className='flex flex-col gap-4'>
                <div className='space-y-1 text-center'>
                    <h1 className='text-4xl'>404</h1>
                    <p className='text-base'>Page not Found</p>
                </div>
                <Link href={'/'}>
                    <button className={'rounded-lg'}>
                        Redirect Home
                    </button>
                </Link>
            </div>
            <Image
                alt='not-found'
                height={300}
                width={300}
                src={`${setupImage}svg/404.svg`}
            />
        </div>
    )
}
