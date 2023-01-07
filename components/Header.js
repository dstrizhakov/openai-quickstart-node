import Link from 'next/link';
import styles from '../styles/header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src="/idea.svg" className={styles.icon} />
			<nav className={styles.nav}>
				<Link href='/'>Generate ideas</Link>
				<Link href='/about'>About OpenAI</Link>
			</nav>
		</header>
	)
}
export default Header;