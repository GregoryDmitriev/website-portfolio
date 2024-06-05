import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navigation.module.scss'
import { NAV_LINKS } from '@/constants/index'
import { ThemeContext, SidebarContext } from '@/providers/index'

const Navigation = () => {
	const { isClosed } = useContext(SidebarContext)
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<>
			<nav className={styles.navigation}>
				<ul className={isClosed ? styles.sidebarClosed : styles.sidebarList}>
					{NAV_LINKS.map(({ title, to, icon }) => (
						<li key={to} className={styleTheme}>
							<NavLink to={to} >
								{isClosed ? (
									icon
								) : (
									<>
										{icon}
										{title}
									</>
								)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}

export { Navigation }
