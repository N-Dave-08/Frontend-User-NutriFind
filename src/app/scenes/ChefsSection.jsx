import React from 'react'
import FoodCard from '@/app/components/cards/FoodCard'

export default function ChefsSection() {
  return (
    <div className='h-screen
                    flex flex-col gap-11
                    items-center justify-center
                    text-center'>
      <div>
        <h1 className="text-3xl mb-1 font-bold">Signature Dishes by Culinary Experts</h1>
        <p>Elevate Your Cooking with Chef-Inspired Dishes</p>
      </div>
      <div className='flex gap-10'>
        <FoodCard
          imageUrl='spaghetti.webp'
          foodName='Spaghetti'
          creatorName='Gordon Ramsey'
          cuisineType='Italian'
          dietType='Pasta'
          dishType='Side Dish'
        />
        <FoodCard
        imageUrl='Spicy_Shrimp _Tacos.webp'
          foodName='Spicy Shrimp Tacos'
          creatorName='Michael Jackson'
          cuisineType='Mexican'
          dietType='Seafood'
          dishType='Main Course'
          occupation='Chef'
        />
        <FoodCard
        imageUrl='burger.webp'
          foodName='Burger with Fries'
          creatorName='Anne Curtis'
          cuisineType='American'
          dietType='Meat'
          dishType='Main Course'
          occupation='Chef'
        />
      </div>
    </div>
  )
}
