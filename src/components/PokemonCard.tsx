import Link from 'next/link'
import React, { useMemo } from 'react'

interface PokemonCardProps {
  data: any;
  cardFor: 'category' | 'pokemon'
}

function PokemonCard({ data, cardFor }: PokemonCardProps) {
  const routeLink = useMemo(() => {
    let url = `/category/pokemon/${data.name}`;

    if (cardFor === 'category') {
      let urlArray = data.url.split('/');
      if (urlArray[urlArray.length - 1] === '') {
        urlArray.pop();
      }
      const _id = urlArray[urlArray.length - 1];

      url = `/category/${_id}`
    }

    return url;
  }, [cardFor, data])

  return (
    <Link
      href={routeLink}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 dark:border-neutral-900 hover:dark:bg-neutral-800/30"
      key={`${data.name} Card`}
    >
      <h2 className={`text-2xl font-semibold capitalize`}>
        {data.name}
      </h2>
    </Link>
  )
}

export default PokemonCard