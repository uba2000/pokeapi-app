import React, { Fragment, useMemo } from 'react'
import clsx from 'clsx';

import PokemonImage from '@/components/PokemonImage';
import { getPokemon } from '@/libs/actions/pokemonAction';
import { PokemonStatsData } from '@/types/common.type';

// PokemonName component
async function PokemonName({ params }: { params: { pokemonName: string } }) {
  const pokemonName = useMemo(() => params.pokemonName, [params]);

  // Fetch data of the specified Pokémon
  const pokemon = await getPokemon(pokemonName);

  return (
    <>
      {/* Check if Pokémon data is complete */}
      {pokemon.order >= 0 ? (
        <>
          {/* Render Pokémon name */}
          <h1 className='text-4xl text-bold pt-4 capitalize'>{pokemonName}</h1>
          {/* Render Pokémon image */}
          <div className="m-4 relative w-[300px] h-[300px]">
            <PokemonImage
              image={pokemon.sprites.other['official-artwork']?.front_default}
              name={pokemonName}
            />
          </div>
          {/* Render Pokémon weight and height */}
          <div className='flex gap-3'>
            <h3 className='uppercase'>Weight: {pokemon.weight}</h3>
            {' - '}
            <h3 className='uppercase'>Height: {pokemon.height}</h3>
          </div>
          {/* Render Pokémon stats */}
          <div className="flex-col flex">
            {pokemon.stats.map((statObj: PokemonStatsData) => {
              const statName = statObj.stat.name;
              const statValue = statObj.base_stat;

              return (
                <Fragment key={statName}>
                  {/* Render individual stat */}
                  <div className='flex items-stretch w-[500px]'>
                    <h3 className='p-3 w-2/4'><span className='uppercase'>{statName}</span>: {statValue}</h3>
                    {/* Render stat bar */}
                    <div className="dark:bg-neutral-800/30 bg-gray-100 w-2/4 m-auto h-2 rounded overflow-hidden">
                      <div
                        className={clsx(
                          'bg-white h-full',
                        )}
                        style={{ width: `${Math.abs((statValue || 0))}%` }}
                      />
                    </div>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </>
      ) : (
        // Render message for incomplete Pokémon data
        <h1 className='text-4xl text-bold pt-4 capitalize'>{pokemonName} <span className='lowercase'>has incomplete data</span></h1>
      )}
    </>
  )
}

export default PokemonName