'use client';

import React from 'react';
import NextTopLoader from 'nextjs-toploader';

/**
 * This component wraps its children with a top loader from the 'nextjs-toploader' package, indicating progress. 
 * It displays a thin red loading bar at the top of the screen while the content is loading. 
 * */
function ProgressWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color="#ef5350" height={4} />
      {children}
    </>
  );
}

export default ProgressWrapper;
