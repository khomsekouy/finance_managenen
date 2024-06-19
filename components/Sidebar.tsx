'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
const Sidebar = ({ user }: SiderbarProps ) => {
    const pathname = usePathname();
  return (
    <div>
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link 
                    href="/"
                    className='mb-12 cursor-pointer flex items-center gap-2' 
                    >
                    <Image 
                        src="/icons/logo.svg" 
                        alt="Horizon logo"
                        width={30} height={30} 
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className='sidebar-logo'>Horizon</h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (                        
                        <Link href={item.route} key={item.label}
                            className={cn(
                                'sidebar-link',
                                {'bg-bank-gradient': isActive},
                            )}
                        >
                            <div className='relative size-6'>
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invalid' : isActive
                                    })}
                                />
                            </div>
                            <p className={cn("sidebar-label", {"!text-white": isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    </div>
  )
}

export default Sidebar