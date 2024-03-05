'use client';

import clsx from "clsx"
import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          "flex h-10 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800/30 px-3 py-2 text-sm placeholder:text-muted-foreground",
          "outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
);

Input.displayName = "Input"

export { Input }