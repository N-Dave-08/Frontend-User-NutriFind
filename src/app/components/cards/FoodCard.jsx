'use client'
import React, { useState } from 'react'
import { Card, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Badge from '@/app/components/badges/Badge'
import Image from 'next/image'
import { setupImage } from '@/app/helpers/setup'


export default function FoodCard({
  imageUrl = "Grilled_Lemon_Herb_Chicken.webp",
  foodName = "Healthy Salad Bowl",
  creatorName = "Jane Doe",
  creatorAvatarUrl = "avatar.webp",
  cuisineType = "Mediterranean",
  dietType = "Vegetarian",
  dishType = "Main Course",
  occupation = "Chef",
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="w-full max-w-sm 
                mx-auto overflow-hidden 
                transition-all duration-300 transform 
                border-none bg-opacity-0
                rounded-none shadow-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[300px] h-[300px]">
        <Image
          fill
          src={`${setupImage}images/${imageUrl}`}
          alt={foodName}
          objectFit='cover'
          loading='lazy'
          className='rounded-box'
        />
        <div
          className={`absolute inset-0
                   bg-black transition-all 
                    duration-300 ease-in-out 
                    rounded-box
                    ${isHovered ? 'bg-opacity-70'
              : 'bg-opacity-0 pointer-events-none shadow-lg'
            }`}
          aria-hidden={!isHovered}
        >
          <div
            className={`flex items-center justify-center 
                        h-full transition-all duration-300 ease-in-out 
                        ${isHovered ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
              }`}
          >
            <div className="p-4 space-y-2 flex flex-col items-center">
              <div className="badge badge-secondary">{cuisineType}</div>
              <div className="badge badge-primary">{dietType}</div>
              <div className="badge badge-accent">{dishType}</div>
              <h3 className="text-lg font-semibold text-base-content">{foodName}</h3>
            </div>
          </div>
        </div>
      </div>
      <CardFooter className="flex items-center p-0 mt-2 space-x-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={`${setupImage}images/${creatorAvatarUrl}`} alt={creatorName} />
          <AvatarFallback>{creatorName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <span className="text-sm text-neutral-content">{creatorName}</span>
        <span className='badge border-none bg-white/20 py-3.5 px-2'>{occupation}</span>
      </CardFooter>
    </Card>
  )
}