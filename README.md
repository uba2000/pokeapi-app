This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Pokemón API Application Documentation

## Introduction

The Pokemón API Application is a web application that consumes data from the PokeAPI (https://pokeapi.co/) to provide users with information about Pokémon. It allows users to browse Pokémon categories/types, view a list of Pokémon belonging to a specific category, search for Pokémon by name, and view detailed information and stats for individual Pokémon.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Next.js: A React framework for building server-side rendered and statically generated applications.
- Axios: A promise-based HTTP client for making HTTP requests.

## Installation

1. Clone the repository from GitHub:

```bash
git clone https://github.com/uba2000/pokeapi-app.git
```

2. Navigate to the project directory:

```bash
cd pokeapi-app
```

3. Install dependencies:

```bash
yarn
# or
npm install
```

## Development

1. Start the development server:

```bash
yarn dev
# or
npm run dev
```

2. Open your browser and navigate to http://localhost:3454 to view the application.

## Usage

### Listing Pokémon Categories/Types

- The home page of the application displays a list of all Pokémon categories/types.
- Clicking on a category/type will navigate to a page listing all Pokémon belonging to that specific category.

### Viewing Pokémon List

- On the category/type page, all Pokémon belonging to the selected category are listed.
- If more than 25 Pokémon are listed, a pagination mechanism is implemented to navigate through pages.

### Searching Pokémon by Name

- The Pokémon list page includes a search bar where users can search for Pokémon by name.
- As the user types in the search bar, the list of Pokémon updates dynamically to match the search query.

### Viewing Pokémon Details and Stats

- Clicking on a Pokémon in the list navigates to a page displaying detailed information and stats for that Pokémon.
- Information such as name, height, weight, abilities, and stats are provided for each Pokémon.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Conclusion

The PokeAPI Application provides a user-friendly interface for browsing and searching Pokémon data from the PokeAPI. With its intuitive design and easy navigation, users can quickly access information about their favorite Pokémon.
