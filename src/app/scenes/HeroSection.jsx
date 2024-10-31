import React from 'react'
import Image from "next/image"
import Link from "next/link";
import { setupImage } from "@/app/helpers/setup"

export default function HeroSection() {
    return (
        <div className='hero
                        text-center mt-[-6.75rem]
                        h-screen'>
            <div className='hero-content flex-col'>
                <div>
                    <h1 className="text-3xl mb-1 font-bold">Discover Delicious Recipes and Plan Your Perfect Meals</h1>
                    <p>Find, Save, and Share Your Favourite Recipes with Ease</p>
                </div>
                <button className="btn btn-accent">
                    <Link href={'/register'}>
                        Cook Now
                    </Link>
                </button>
                <Image
                    className='mt-10'
                    height={250}
                    width={250}
                    objectFit="contain"
                    alt="person cooking"
                    src={`${setupImage}images/boycook.png`}
                />
            </div>
        </div>
    )
}
