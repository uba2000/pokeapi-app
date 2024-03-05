'use client';

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import Button from '../Button';

/**
 * The AppWrapper component serves as a layout wrapper for the application. 
 * It includes navigation controls and a header displaying the title of the application.
 */
function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 p-10">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm flex gap-x-4">
        {pathname !== '/' && (
          <Button
            type='button'
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        )}
        <Link href={'/'}>
          <h2 className="text-2xl font-bold">Pokemón Code Challenge</h2>
        </Link>
      </div>
      {children}
    </main>
  )
}

export default AppWrapper