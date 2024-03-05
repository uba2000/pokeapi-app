"use client";

import Image from 'next/image';
import React from 'react'

/**
 * This component displays an image of a Pokémon. 
 * It utilizes the Next.js Image component for optimized image loading and performance.
 */
function PokemonImage({ image, name }: { image: string; name: string }) {
  return (
    <Image
      fill
      priority
      src={image}
      alt={`Picture of ${name}`}
      className='object-contain transition-opacity opacity-0 duration-[2s]'
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  )
}

export default PokemonImage