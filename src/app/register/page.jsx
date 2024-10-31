'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import WizardForm from '../components/forms/WizardForm'
import GradientBackground from '../components/backgrounds/GradientBackground'
import Image from 'next/image'
import Link from 'next/link'
import { setupImage } from '@/app/helpers/setup'

export default function Register() {

    const [showWizardForm, setShowWizardForm] = useState(false)
    const [animation, setAnimation] = useState(false)

    const handleShowWizardForm = () => {
        setShowWizardForm(true)
        setTimeout(() => {
            setAnimation(true)
        }, 10);
    }
    const handleClose = () => {
        setShowWizardForm(false)
        setAnimation(false)
    }

    return (
        <div className='h-screen w-full flex'>
            <GradientBackground />
            <div className='
                    absolute 
                    md:top-1/2 left-1/2 transform 
                    -translate-x-1/2 md:-translate-y-1/2 
                    md:rounded-box 
                    w-full md:w-1/2 lg:w-auto
                    h-screen sm:h-auto p-8
                    flex flex-col gap-5
                    bg-base-100/60 backdrop-blur-md
                    '>
                <Image
                    height={40}
                    width={40}
                    src={`${setupImage}svg/logo.svg`}
                    alt="logo"
                />
                <div>
                    <div className='flex items-center justify-between'>
                        <h4 className='font-bold text-2xl'>Get Started</h4>
                        {showWizardForm && (
                            <button className='btn btn-circle btn-ghost' onClick={handleClose}>
                                <Icon icon="mingcute:close-fill" height="1rem" />
                            </button>
                        )}
                    </div>
                    <p>Start your journey with a quick and easy sign-up</p>
                </div>
                {!showWizardForm ? (
                    <div className='w-full space-y-3'>
                        <button className='btn btn-secondary rounded-full w-full py-3'>
                            <Icon icon='bi:google' />
                            Sign up with Google
                        </button>
                        <div className='divider mx-5'>
                            or
                        </div>
                        <button onClick={handleShowWizardForm} className='btn btn-accent rounded-full w-full py-3'>
                            Continue with Email
                        </button>
                        <p className='
                        opacity-90 
                        font-light 
                        text-center 
                        text-sm'>
                            Already have an account?
                            <Link href="/login" className='link ms-1'>Log in</Link>
                        </p>
                    </div>
                ) :
                    (
                        <div
                            className={` transform opacity-0 -translate-y-10
                              ${animation ? 'opacity-100 duration-200 ease-in-out translate-y-0' : ''}`}
                        >
                            <WizardForm />
                        </div>
                    )}
            </div>
        </div>
    )
}
