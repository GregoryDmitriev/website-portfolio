import { NavLink } from 'react-router-dom'

import styles from './navigation.module.scss'
import { NAV_LINKS } from '../../../../constants/index'

const Navigation = () => {
	return (
		<>
			<nav className={styles.navigation}>
				<ul>
					{NAV_LINKS.map(({ title, to, icon }) => (
						<li key={to}>
							<NavLink to={to}>
								{icon}
								{title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}

export { Navigation }
