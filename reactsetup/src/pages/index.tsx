import React from 'react'
import Head from 'next/head'

import Logo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Logo />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
