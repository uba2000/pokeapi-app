'use client';

import React from 'react';
import NextTopLoader from 'nextjs-toploader';

function ProgressWrapper({ children }: {children: React.ReactNode}) {
  return (
    <>
      <NextTopLoader color="#ef5350" height={4} />
      {children}
    </>
  );
}

export default ProgressWrapper;
