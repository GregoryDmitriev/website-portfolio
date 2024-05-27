import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

import styles from './burger.module.scss'
import { ThemeContext } from '../../../providers/Theme'
import { NAV_LINKS_BURGER } from '../../../constants/index'

const Burger = () => {
	const [theme] = useContext(ThemeContext)
	const [activeStates, setActiveStates] = useState([false, false, false, false])

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const handleEvent = () => {
		setActiveStates(activeStates.map(state => !state))
	}

	return (
		<div
			className={styles.burger}
			onMouseDown={handleEvent}
			onTouchStart={handleEvent}
		>
			{NAV_LINKS_BURGER.map((link, index) => (
				<div
					key={index}
					className={`${styles[`item${index + 1}`]} ${styleTheme}`}
					style={{
						transform: activeStates[index] ? 'none' : link.transform,
					}}
				>
					<NavLink to={link.to}>{link.icon}</NavLink>
				</div>
			))}

			<div className={`${styles.mask} ${styleTheme}`}>
				<NavLink to='#home'>
					<FaHome size={40} />
				</NavLink>
			</div>
		</div>
	)
}

export { Burger }