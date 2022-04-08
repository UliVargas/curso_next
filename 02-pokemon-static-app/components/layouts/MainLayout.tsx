import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
  title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name={'author'} content={'Ulises Vargas'} />
        <meta name={'description'} content={'Información sobre pokémon XXX'} />
        <meta name={'keywords'} content={'XXX, pokemon, pokedex'} />
      </Head>

       <Navbar />
      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}