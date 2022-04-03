import { FC } from 'react'
import Head from 'next/head'

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name={'author'} content={'Ulises Vargas'} />
        <meta name={'description'} content={'Información sobre pokémon XXX'} />
        <meta name={'keywords'} content={'XXX, pokemon, pokedex'} />
      </Head>

       {/*Navbar*/}

      <main>
        {children}
      </main>
    </>
  )
}