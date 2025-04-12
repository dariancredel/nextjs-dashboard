// in order to use the React hook usePathname(), you need to turn the component into a Client Component
// using the directive:
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// avoids reloading the entire page!!! (unlike with <a> tags)
// MAINTAIN REACT STATE: avoids entire page re-rendering
// PRE-FETCHING: next/link prefetches the code of the route, so that navigation can happen instantly
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium 
                md:flex-none md:justify-start md:p-2 md:px-3
               hover:bg-sky-100 hover:text-blue-600`,
              { 'bg-sky-100 text-blue-600': pathname === link.href, }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
