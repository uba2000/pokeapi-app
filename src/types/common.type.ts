export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypeListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface CategoryPokemonList {
  pokemon: Pokemon;
  slot: number;
}

export interface PokemonStatsData {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonSpritesData {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

export interface PokemonData {
  weight: number;
  height: number;
  order: number;
  stats: PokemonStatsData[];
  sprites: PokemonSpritesData;
}