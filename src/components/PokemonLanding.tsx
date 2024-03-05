"use client";

import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { Input } from './Input';
import PokemonCard from './PokemonCard';
import usePagination from '@/hooks/usePagination';
import Button from './Button';

interface PokemonLandingProps {
  pokemonList: any[];
  canPaginate?: boolean;
  listingFor: 'category' | 'pokemon';
}

function PokemonLanding({ pokemonList, listingFor, canPaginate = false }: PokemonLandingProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const { currentItems, currentPage, paginateNext, paginatePrev, totalPages }
    = usePagination({ data: searchFilter(pokemonList) });

  const filteredPokemonList = pokemonList.filter(
    (pokemon: any) => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="">
        {listingFor === 'pokemon' && (
          <>
            <h3 className="text-2xl py-6 text-center">Search For Pokemón</h3>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="pokemonSearch">Enter Pokemón Name</label>
              <Input
                type='search'
                value={searchQuery}
                id='pokemonSearch'
                autoComplete='off'
                placeholder='Search by Pokemón name...'
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </>
        )}
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemón {listingFor === 'category' ? 'Categories' : 'List'}</h3>
      </div>
      {filteredPokemonList.length > 0 && (
        <div className='lg:max-w-5xl lg:w-full'>
          <div className="mb-32 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:text-left">
            {(canPaginate ? currentItems : filteredPokemonList).map((pokemon: any) => (
              <Fragment key={pokemon.name}>
                <PokemonCard data={pokemon} cardFor={listingFor} />
              </Fragment>
            ))}
          </div>
          {canPaginate && (
            <div className="flex justify-end items-center w-full gap-4 mt-4">
              <Button
                disabled={currentPage === 1}
                type='button'
                onClick={() => paginatePrev()}
              >
                Previous
              </Button>
              <h4 className='text-lg min-w-[101.94px]'>
                Page: {currentPage} of {totalPages}
              </h4>
              <Button
                disabled={currentPage === totalPages}
                type='button'
                onClick={() => paginateNext()}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
      {filteredPokemonList.length === 0 && (
        <div>
          <h3 className='text-3xl pt-12 pb-6 text-center'>No Pokemón {listingFor === 'category' ? 'in this category' : ''}</h3>
        </div>
      )}
    </>
  )
}

export default PokemonLanding