import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useId } from 'react-id-generator'

import styles from './burger.module.scss'
import { ThemeContext } from '@/providers'
import { NAV_LINKS_BURGER } from '@/constants/index'
import { Icon } from '../Icon'

const Burger = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const [activeStates, setActiveStates] = useState([true, true, true, true])
	const handleEvent = () => {
		setActiveStates(activeStates.map(state => !state))
	}

	const handleLinkClick = () => {
		setActiveStates([true, true, true, true])
	}

	return (
		<div className={`${styles.burger} ${styleTheme}`}>
			{NAV_LINKS_BURGER.map((link, index) => {
				const [uniqueId] = useId()
				return (
					<div
						key={uniqueId + index}
						className={`${styles[`item${index + 1}`]} ${styleTheme}`}
						style={{
							transform: activeStates[link.id] ? 'none' : link.transform,
							opacity: activeStates[index] ? '0' : '1',
						}}
					>
						<NavLink to={link.to} onClick={handleLinkClick}>
							{link.icon}
						</NavLink>
					</div>
				)
			})}

			<div className={`${styles.burgerBox} ${styleTheme}`}>
				<input
					type='checkbox'
					id='menuCheckbox'
					className={`${styles.menuCheckbox} ${styleTheme}`}
				/>
				<label
					htmlFor='menuCheckbox'
					onClick={handleEvent}
					onKeyUp={handleEvent}
					onKeyDown={handleEvent}
					className={`${styles.burgerIcon} ${styleTheme} `}
				>
					{activeStates.every(state => !state) ? (
						<Icon id='openBurger' />
					) : (
						<Icon id='burger' />
					)}
				</label>
			</div>
		</div>
	)
}

export { Burger }
