'use server';

import { CategoryPokemonList, PokemonData, PokemonType, PokemonTypeListResponse } from "@/types/common.type";
import HttpClient from "../network/HttpClient";

const httpClient = new HttpClient();

/**
 * These functions are used to fetch data from the PokeAPI server-side. 
 * They handle errors and return the corresponding data or throw an error if the request fails.
 */

/**
 * This function makes a GET request to the '/type' 
 * endpoint using the HttpClient instance and returns a list of Pokémon categories/types.
 */
export async function getPokemonCategoryList(): Promise<PokemonType[]> {
  try {
    const response = await httpClient.get('/type');
  
    return (response.data as PokemonTypeListResponse).results;
  } catch (error) {
    throw error;
  }
}

/**
 * This function makes a GET request to the '/type/:_id' endpoint using the HttpClient instance, 
 * where '_id' is the ID of the Pokémon category/type. It returns a list of Pokémon belonging to the specified category.
 */
export async function getCategoryPokemonList(_id: string): Promise<CategoryPokemonList[]> {
  // 
  try {
    const response = await httpClient.get(`/type/${_id}`);
  
    return response.data.pokemon;
  } catch (error) {
    throw error;
  }
}

/**
 * This function makes a GET request to the '/pokemon/:name' endpoint using the HttpClient instance, 
 * where ':name' is the name of the Pokémon. It returns information about the specified Pokémon.
 */
export async function getPokemon(name: string): Promise<PokemonData> {
  try {
    const response = await httpClient.get(`/pokemon/${name}`);
  
    return response.data;
  } catch (error) {
    throw error;
  }
}