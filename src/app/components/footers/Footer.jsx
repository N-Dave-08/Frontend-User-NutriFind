import React from 'react'
import Image from 'next/image'
import { setupImage } from '@/app/helpers/setup'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded gap-3">
            <div>
                <Image
                    height={40}
                    width={40}
                    src={`${setupImage}svg/logo.svg`}
                    alt="logo"
                />
                <h4 className='font-bold text-xl'>NutriFind</h4>
            </div>
            <nav>
                <div className="grid grid-flow-col gap-2">
                    <Link href={"https://github.com/N-Dave-08"}>
                        <Icon height='2rem' icon="mdi:github" />
                    </Link>
                    <Link href={"https://www.facebook.com/profile.php?id=100082835203073"}>
                        <Icon height='2rem' icon="mdi:facebook" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/dave-cruz-24138b310/"}>
                        <Icon height='2rem' icon="mdi:linkedin" />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Designed & Developed by Ian Dave Cruz</p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    )
}
