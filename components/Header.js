import styles from '../styles/header.module.css'
import ActiveLink from './ActiveLink';

const Header = () => {
	return (
		<header className={styles.header}>
			<img src="/idea.svg" className={styles.icon} />
			<nav className={styles.nav}>
				<ActiveLink activeClassName={styles.active} className={styles.navLink} href='/'>Generate ideas</ActiveLink>
				<ActiveLink activeClassName={styles.active} className={styles.navLink} href='/about'>About OpenAI</ActiveLink>
			</nav>
		</header>
	)
}
export default Header;