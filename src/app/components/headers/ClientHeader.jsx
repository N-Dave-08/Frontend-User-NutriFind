'use client'
import React from 'react'
import Link from 'next/link'
import { routesData } from '@/app/helpers/routes'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'

export default function ClientHeader() {

  // LOCATION
  const path = usePathname();

  return (
    <div className='flex justify-center sticky top-2 z-50'>
      <div className="navbar bg-base-100/60 w-full lg:w-3/4 md:m-5 mx-3 rounded-box shadow-md ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icon icon='mingcute:menu-fill' height='1.2rem' />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {
                Object.keys(routesData).map((item, index) => (
                  <li key={index}>
                    <Link className={`${path === routesData[item].link
                      ? 'bg-black/10 rounded-btn'
                      : ''}`}
                      href={routesData[item].link}
                      key={index}>
                      {routesData[item].name}
                    </Link>
                  </li>
                ))
              }
              <hr />
              <li>
                <Link href={'/login'} className='font-semibold'>
                  Log in
                </Link>
                </li>
            </ul>
          </div>
          <Link href={'/'} className="btn btn-ghost text-xl">
              <div className='font-semibold text-accent'>NutriFind</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              Object.keys(routesData).map((item, index) => (
                <li key={index}>
                  <Link className={`${path === routesData[item].link
                    ? 'bg-white/10 rounded-btn'
                    : ''}`}
                    href={routesData[item].link}
                    key={index}>
                    {routesData[item].name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-end space-x-1">
          <Link href={'/login'}>
            <button className="btn btn-ghost hidden lg:block">Log in</button>
          </Link>
          <Link href={'/register'}>
            <button className="btn btn-accent">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

