'use client';

import clsx from 'clsx';
import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

/**
 * This component represents a customizable button element with various styles and functionality.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          // Base styles
          "cursor-pointer flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 py-2 backdrop-blur-2xl",
          "disabled:opacity-[0.4] duration-[0.2s] disabled:cursor-not-allowed transition-all",
          // Theme styles
          "dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto rounded-lg lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
);

Button.displayName = 'Button';

export default Button