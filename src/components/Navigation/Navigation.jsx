import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './navigation.module.scss'
import { ThemeContext } from '@/providers'
import { NAV_LINKS } from '@/constants'

const Navigation = () => {
	const navigate = useNavigate()
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<nav className={styles.nav}>
			<button
				className={`${styles.button} ${styleTheme}`}
				onClick={() => navigate('/projects')}
			>
				{NAV_LINKS[3].title}
			</button>
			<button
				className={`${styles.button} ${styleTheme}`}
				onClick={() => navigate('/contact')}
			>
				{NAV_LINKS[4].title}
			</button>
		</nav>
	)
}

export { Navigation }
