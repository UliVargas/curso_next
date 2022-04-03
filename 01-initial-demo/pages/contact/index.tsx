import Link from 'next/link'
import MainLayout from '../../components/Layouts/MainLayout'

const Index = () => {
	return (
		<MainLayout>
			<h1>Contact Page</h1>
			<h2 className={'title'}>
				Ir a
				<Link href="/">
					<a> Home</a>
				</Link>
			</h2>

			<p className={'description'}>
				Get started by editing
				<code className={'code'}>pages/contact.js</code>
			</p>
		</MainLayout>
	)
}

export default Index