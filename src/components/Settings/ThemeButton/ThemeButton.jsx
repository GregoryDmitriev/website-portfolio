import { useContext } from 'react'
import { GoSun } from 'react-icons/go'
import { GiMoon } from 'react-icons/gi'

import styles from './themeButton.module.scss'
import { ThemeContext } from '@/providers'

const ThemeButton = () => {
	const [theme, setTheme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const handleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<button type='button' className={`${styles.themeButton} ${styleTheme}`} onClick={handleTheme} tabIndex='0'>
			{theme === 'light' ? <GiMoon /> : <GoSun />}
		</button>
	)
}

export { ThemeButton }
