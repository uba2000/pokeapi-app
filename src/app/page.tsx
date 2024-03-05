import PokemonLanding from "@/components/PokemonLanding";
import { getPokemonCategoryList } from "@/libs/actions/pokemonAction";

export default async function Home() {
  const pokemonList = await getPokemonCategoryList();

  return (
    <PokemonLanding
      listingFor='category'
      pokemonList={pokemonList}
    />
  );
}
