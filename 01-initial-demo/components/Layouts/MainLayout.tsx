import { FC } from 'react'
import styles from '../../styles/MainLayout.module.css'
import Head from 'next/head'
import Navbar from '../Navbar'

const MainLayout: FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Ulises</title>
				<meta name="description" content="Next App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar/>
			<main className={styles.main}>
				{children}
			</main>
		</div>
	)
}

export default MainLayout