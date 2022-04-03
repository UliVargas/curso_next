import Link from 'next/link'
import MainLayout from '../../components/Layouts/MainLayout'

const PricingPage = () => {
	return (
		<MainLayout>
			<h1>Pricing Page</h1>
			<h2 className={'title'}>
				Ir a
				<Link href="/">
					<a> Home</a>
				</Link>
			</h2>

			<p className={'description'}>
				Get started by editing
				<code className={'code'}>pages/pricing/index.js</code>
			</p>
		</MainLayout>
	)
}

export default PricingPage