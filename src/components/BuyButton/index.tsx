import React from 'react'
import { Helmet } from 'react-helmet'

import { gumroad } from '~/data/index'

export default function BuyButton() {
  return (
    <>
      <Helmet>
        <script src="https://gumroad.com/js/gumroad.js"></script>
      </Helmet>

      <a
        href={gumroad}
        className="mt-4 sm:ml-4 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 xl:text-lg xl:py-4"
      >
        Get early access &rarr;
      </a>
    </>
  )
}
