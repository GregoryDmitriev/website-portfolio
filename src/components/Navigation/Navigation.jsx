import { NavLink } from 'react-router-dom'

import { NAV_LINKS } from '../../constants/index'

const Navigation = () => {
	return (
		<>
			<nav>
				<ul>
					{NAV_LINKS.map(({ title, path }) => (
						<li key={path}>
							<NavLink 
								to={path}
								smooth
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
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
