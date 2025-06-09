
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/utils';


const navItems = [
    {label : 'Home', href: '/'},
    {label : 'companions', href: '/companions'},
    {label : 'My Journey', href: '/my-journey'},
]
const NavItems = () => {
    const pathname = usePathname();
  return (
    <div className='flex items-center gap-4'>
        {navItems.map(({label,href}) => (
            <Link 
                key={label} 
                href={href} 
                className={`text-lg font-semibold ${pathname === href ? 'text-orange-500' : 'text-gray-700'}`}
            >
                {label}
            </Link>
            
        ))}
    </div>
  )
}

export default NavItems
