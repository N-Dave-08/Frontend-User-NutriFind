import React from 'react'
import MealCard from "@/app/components/cards/MealCard"

export default function MealPlanSection() {
    return (
        <div className='h-screen
                    flex flex-col gap-11
                    items-center justify-center
                    text-center'>
            <div>
                <h1 className="text-3xl mb-1 font-bold">Achieve Your Nutrition Goals, One Meal at a Time</h1>
                <p>Customize your meal plan with a variety of recipes to suit every craving and dietary need</p>
            </div>
            <div className='flex gap-10 sm:overflow-hidden'>
                <MealCard
                    imageUrl='carbonara.webp'
                    cals='421'
                    protein='29'
                    carbs='24'
                    fats='9'
                    mealTiming='Breakfast'
                    foodName='Carbonara'
                />
                <MealCard
                    imageUrl='strawberry_pancake.webp'
                    cals='321'
                    protein='24'
                    carbs='31'
                    fats='8'
                    mealTiming='Lunch' 
                    foodName='Strawberry Pancake'
                    />
                <MealCard
                    cals='421'
                    protein='34'
                    carbs='28'
                    fats='9'
                    mealTiming='Dinner' 
                    foodName='Grilled Lemon Herb Chicken'
                    />
            </div>
        </div>
    )
}
