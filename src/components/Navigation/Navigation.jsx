import style from './navigation.module.scss'
import { NAV_LINKS } from '../../constants/index'
import { CustomLink } from '../CustomLink/CustomLink'
const Navigation = () => {
	return (
		<>
			<nav className={style.navigation}>
				<ul>
					{NAV_LINKS.map(({ title, to }) => (
						<li key={to}>
							<CustomLink to={to}>{title}</CustomLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}

export { Navigation }
