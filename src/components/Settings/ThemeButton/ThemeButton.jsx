import { useContext, useState } from 'react'
import { GoSun } from 'react-icons/go'
import { GiMoon } from 'react-icons/gi'

import styles from './themeButton.module.scss'
import { ThemeContext } from '@/providers'


const ThemeButton = () => {
	const [theme, setTheme] = useContext(ThemeContext)

	const handleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<div className={styles.themeButton} onClick={handleTheme}>
			{theme === 'light' ? <GiMoon /> : <GoSun />}
		</div>
	)
}

export { ThemeButton }
