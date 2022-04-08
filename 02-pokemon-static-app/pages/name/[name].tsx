import { useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MainLayout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { localFavorites } from '../../utils'
import conffeti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  const [isFavorites, setIsFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsFavorites(!isFavorites)

    if (!isFavorites) {
      conffeti({
        zIndex: 999,
        particleCount: 200,
        spread: 160,
        angle: -150,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }


  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{
              padding: '30px'
            }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width={'100%'}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Text
                transform={'capitalize'} h1>
                {pokemon.name}
              </Text>
              <Button
                color={'gradient'}
                ghost={!isFavorites}
                onClick={onToggleFavorite}
              >
                {isFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display={'flex'}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokeNames: string[] = data.results.map(poke => poke.name)

  return {
    paths: pokeNames.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonByNamePage