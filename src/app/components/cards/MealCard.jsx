'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { setupImage } from '@/app/helpers/setup'
import { Card, CardFooter } from '@/components/ui/card'

export default function MealCard({
    imageUrl = 'Grilled_Lemon_Herb_Chicken.webp',
    foodName = "Random Food Name",
    cals = "NaN",
    protein = "NaN",
    carbs = "NaN",
    fats = "NaN",
    mealTiming = "Meal Timing"
}) {

    const [isHovered, setIsHovered] = useState(false)

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
                        className={`flex flex-col gap-6 items-start text-start p-4 justify-end 
                        h-full transition-all duration-300 ease-in-out 
                        ${isHovered ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-4'
                            }`}
                    >
                        <div className="space-y-2">
                            <div>
                                <label className='text-white font-light'>Protein: </label>
                                <span className="text-white font-medium">{protein}</span>
                            </div>
                            <div>
                                <label className='text-white font-light'>Carbs: </label>
                                <span className="text-white font-medium">{carbs}</span>
                            </div>
                            <div>
                                <label className='text-white font-light'>Fats: </label>
                                <span className="text-white font-medium">{fats}</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-base-content">{foodName}</h3>
                    </div>
                </div>
            </div>
            <CardFooter className="flex-col p-0 mt-2 gap-1">
                <span className={`
                badge border-none text-white
                 py-3.5 px-2 ${isHovered ? "shadow-lg" : ""}
                ${mealTiming === "Breakfast" ? "bg-secondary shadow-secondary/50"
                        : mealTiming === "Lunch" ? "bg-primary shadow-primary/50"
                            : mealTiming === "Dinner" ? "bg-accent shadow-accent/50"
                                : ""}`}>{mealTiming}</span>
                <div className='text-neutral-content flex gap-1'>
                    <p className='font-semibold'>{cals}</p>
                    <p className='font-light'>kcal</p>
                </div>
            </CardFooter>
        </Card>
    )
}
