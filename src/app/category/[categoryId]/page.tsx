import PokemonLanding from '@/components/PokemonLanding'
import { getCategoryPokemonList } from '@/libs/actions/pokemonAction';
import React, { useMemo } from 'react'

// CategoryPage component
async function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryId = useMemo(() => params.categoryId, [params]);

  // Fetch the list of Pokémon belonging to the specified category
  const pokemonList = await getCategoryPokemonList(categoryId);

  return (
    // Render PokemonLanding component with the fetched list of Pokémon
    <PokemonLanding
      listingFor='pokemon'
      canPaginate
      pokemonList={pokemonList.map((p: any) => p.pokemon)}
    />
  )
}

export default CategoryPage