import PokemonLanding from '@/components/PokemonLanding'
import { getCategoryPokemonList } from '@/libs/actions/pokemonAction';
import React, { useMemo } from 'react'

async function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryId = useMemo(() => params.categoryId, [params]);

  const pokemonList = await getCategoryPokemonList(categoryId);

  return (
    <PokemonLanding
      listingFor='pokemon'
      canPaginate
      pokemonList={pokemonList.map((p: any) => p.pokemon)}
    />
  )
}

export default CategoryPage