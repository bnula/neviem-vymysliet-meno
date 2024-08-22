"use client";

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import levelTexts from '@/utils/level-texts';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
        {levelTexts.map((link, index) => {
            return (
            <Link
                key={link.title}
                href={""}
                className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-teal-50 p-3 text-sm font-medium hover:bg-teal-100 hover:text-teal-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                    'bg-sky-100 text-teal-600': pathname === `Level ${index}`,
                },
                )}
            >
                <p className="hidden md:block">{link.title}</p>
            </Link>
            );
        })}
        </>
    );
}
