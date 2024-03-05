import PokemonLanding from "@/components/PokemonLanding";
import { getPokemonCategoryList } from "@/libs/actions/pokemonAction";

export default async function Home() {
  // Fetch the list of Pokémon categories/types
  const pokemonList = await getPokemonCategoryList();

  return (
    // Render the PokemonLanding component with the list of categories/types
    <PokemonLanding
      listingFor='category'
      pokemonList={pokemonList}
    />
  );
}
