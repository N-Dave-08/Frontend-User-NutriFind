'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { setupImage } from '@/app/helpers/setup'
import { Card, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Star, Crown } from 'lucide-react'
import { getRankColor } from '@/app/helpers/rankingColor'

export default function TrendingRecipeCard({
    imageUrl = 'Grilled_Lemon_Herb_Chicken.webp',
    foodName = "Random Food Name",
    creatorName = "Jane Doe",
    creatorAvatarUrl = "avatar.webp",
    occupation = "Chef",
    ranking = 1,
    likes = 2000,
    rating = 4.9,
}) {
    const [isHovered, setIsHovered] = useState(false)

    const formatLikes = (count) => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
        }
        return count.toString()
    }

    return (
        <Card className='w-full max-w-sm 
                    mx-auto overflow-hidden 
                    transition-all duration-300 transform 
                    border-none bg-opacity-0
                    rounded-none shadow-none'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-[300px] h-[300px]">
                <Image
                    src={`${setupImage}images/${imageUrl}`}
                    alt={foodName}
                    fill
                    objectFit='cover'
                    loading='lazy'
                    className='rounded-box'
                />
                <div
                    className={`absolute inset-0
                    transition-all 
                    duration-300 ease-in-out 
                    rounded-box
                    ${isHovered ? 'bg-gradient-to-t from-black/70'
                            : 'bg-opacity-0 pointer-events-none'
                        }`}
                    aria-hidden={!isHovered}
                >
                    <div
                        className={`flex gap-6 items-end p-4 justify-between 
                        h-full transition-all duration-300 ease-in-out 
                        `}
                    >
                        <div className={`absolute top-2 left-2 text-white transition-all duration-300 ease-in-out ${isHovered ? 'scale-125' : ''}`}>
                            <Crown className={`w-8 h-8 ${getRankColor(ranking)}`} />
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xs">
                                {ranking}
                            </span>
                        </div>
                        <div className={`font-semibold flex 
                                        text-neutral-content space-x-2  
                                        transition-all duration-300 ease-in-out 
                                        ${isHovered ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-4'
                            }`}>
                            <div>
                                {foodName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardFooter className="flex justify-between mt-2 p-0">
                <div className='flex items-center gap-2'>
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={`${setupImage}images/${creatorAvatarUrl}`} alt={creatorName} />
                        <AvatarFallback>{creatorName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-neutral-content">{creatorName}</span>
                    <span className='badge border-none bg-white/20 py-3.5 px-2'>{occupation}</span>
                </div>
                <span className="flex gap-1 font-medium text-sm text-neutral-content">
                    <div className='flex items-center gap-0.5'>
                        {formatLikes(likes)}
                        <Heart
                            className='fill-current text-red-500'
                            size={16}
                        />
                    </div>
                    <div className='flex items-center gap-0.5'>
                        {rating}
                        <Star
                            className='fill-current text-yellow-500'
                            size={16}
                        />
                    </div>
                </span>
            </CardFooter>
        </Card>
    )
}