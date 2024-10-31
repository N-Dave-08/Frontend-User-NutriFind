'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { Formik, Form } from 'formik'
import GradientBackground from '@/app/components/backgrounds/GradientBackground'
import { validationSchemas } from '@/app/schemas'
import UsernameInput from '@/app/components/fields/UsernameInput'
import PasswordInput from '@/app/components/fields/PasswordInput'
import Image from 'next/image'
import Link from 'next/link'
import { setupImage } from '@/app/helpers/setup'

export default function Login() {

    const handleSubmit = (values) => {
        alert(JSON.stringify(values))
    };

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
                    flex flex-col
                    bg-base-100/60 backdrop-blur-md
                    '>
                <Image
                    height={40}
                    width={40}
                    src={`${setupImage}svg/logo.svg`}
                    alt="logo"
                />
                <div>
                    <h4 className='font-semibold text-3xl mt-5'>Welcome Back</h4>
                    <p className='text-base'>Log in now to explore all your favorite new recipes</p>
                </div>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={validationSchemas[2]}
                    onSubmit={handleSubmit}>
                    {({ values }) => (
                        <Form className='space-y-4 mt-4'>
                            <UsernameInput
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                            <PasswordInput
                                name="password"
                                placeholder="Password"
                            />
                            <button type='submit' className='btn btn-secondary rounded-full w-full py-3'>Log in</button>
                        </Form>
                    )}
                </Formik>
                <div className="divider mx-5">or</div>
                <button className='btn btn-accent rounded-full w-full py-3'>
                    <Icon icon='bi:google' />
                    Continue with Google
                </button>
                <p className='
                        opacity-90 
                        font-light 
                        text-center 
                        text-sm
                        mt-3'>
                    Does not have an account?
                    <Link href="/register" className='link ms-1'>Sign up</Link>
                </p>
            </div>
        </div>
    )
}
