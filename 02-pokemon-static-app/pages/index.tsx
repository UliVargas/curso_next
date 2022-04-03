import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'
import { MainLayout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Button color={'warning'}>Hola mundo</Button>
    </MainLayout>
  )
}

export default HomePage
