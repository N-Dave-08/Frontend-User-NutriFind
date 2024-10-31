import React from 'react'
import TrendingRecipeCard from '@/app/components/cards/TrendingRecipeCard'

export default function TrendingRecipeSection() {
    return (
        <div className='h-screen
                    flex flex-col gap-11
                    items-center justify-center
                    text-center'>
            <div>
                <h1 className="text-3xl mb-1 font-bold">Top Trending Recipes</h1>
                <p>Discover what’s cooking and loved by our community</p>
            </div>
            <div className='flex gap-10'>
                <TrendingRecipeCard 
                foodName='Grilled Lemon Herb Chicken'
                creatorName='Brock Lesnar'
                likes={3278}
                ranking={1}
                rating={4.7}
                />
                <TrendingRecipeCard 
                imageUrl='Spicy_Shrimp _Tacos.webp'
                foodName='Spicy Shrimp Tacos'
                creatorName='Rey Mysterio'
                ranking={2}
                likes={2788}
                rating={4.5}
                />
                <TrendingRecipeCard 
                imageUrl='man-plate.webp'
                foodName='Salmon'
                creatorName='Tony Stark'
                ranking={3}
                rating={3.9}
                likes={2478}
                occupation='Professor'
                />
            </div>
        </div>
    )
}
