import styles from '../styles/Navbar.module.css'
import ActiveLink from './ActiveLink'

const menuItems = [
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'About',
		href: '/about'
	},
	{
		text: 'Contact',
		href: '/contact'
	},
	{
		text: 'Pricing',
		href: '/pricing'
	}
]


const Navbar = () => {
	return (
		<nav className={styles['menu-container']}>
			{
				menuItems.map(({ href, text }) => (
					<ActiveLink href={href} text={text} key={href}/>
				))
			}
		</nav>
	)
}

export default Navbar