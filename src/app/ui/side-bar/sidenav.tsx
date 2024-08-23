'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PowerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavLinks from './nav-links';
import PointsCounter from '../points-counter';
import { signOut } from '@/auth';

export default function SideNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-teal-600 p-4 md:h-40"
            href="/home"
        >
            <div className="w-32 text-white md:w-40">
            <PointsCounter />
            </div>
        </Link>

        {/* Hamburger Button for Small Screens */}
        <div className="md:hidden flex justify-between items-center">
            <button
            className="text-gray-500 focus:outline-none"
            onClick={toggleMenu}
            >
            {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
            ) : (
                <Bars3Icon className="w-6 h-6" />
            )}
            </button>
        </div>

        {/* Collapsible Menu for Small Screens */}
        <div
            className={`${
            isMenuOpen ? 'block' : 'hidden'
            } md:flex flex-col grow justify-between mt-4 space-y-2`}
        >
            <NavLinks />
            <div className="h-auto w-full grow rounded-md bg-gray-50"></div>

            <form
            action ={
                async () => {
                    await signOut();
                }
            }
            >
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-teal-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
            </button>
            </form>
        </div>
        </div>
    );
}
