'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import React from 'react'

function ErrorBoundary() {
  const router = useRouter();

  return (
    <div className='flex-1 flex flex-col justify-center h-full'>
      <h3 className="text-3xl mb-4">An Error Occured</h3>
      <Button onClick={() => router.refresh()}>
        Reload Page
      </Button>
    </div>
  )
}

export default ErrorBoundary