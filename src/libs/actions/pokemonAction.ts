'use server';

import HttpClient from "../network/HttpClient";

const httpClient = new HttpClient();

export async function getPokemonCategoryList() {
  try {
    const response = await httpClient.get('/type');
  
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryPokemonList(_id: string) {
  try {
    const response = await httpClient.get(`/type/${_id}`);
  
    return response.data.pokemon;
  } catch (error) {
    throw error;
  }
}

export async function getPokemon(name: string) {
  try {
    const response = await httpClient.get(`/pokemon/${name}`);
  
    return response.data;
  } catch (error) {
    throw error;
  }
}