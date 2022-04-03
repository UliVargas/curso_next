import Link from 'next/link'
import MainLayout from '../components/Layouts/MainLayout'
import DarkLayout from '../components/Layouts/DarkLayout'

const About = () => {

	return (
		<>
			<h1>About Page</h1>
			<h2 className={'title'}>
				Ir a
				<Link href="/">
					<a> Home</a>
				</Link>
			</h2>

			<p className={'description'}>
				Get started by editing
				<code className={'code'}>pages/about.js</code>
			</p>
		</>
	)
}

export default About

About.getLayout = function getLayout ( page: JSX.Element ) {
	return (
		<MainLayout>
			<DarkLayout>
				{page}
			</DarkLayout>
		</MainLayout>
	)
}