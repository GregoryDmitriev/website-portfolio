import { useContext } from 'react'

import styles from './sidebar.module.scss'
import { Navigation, Author, ToggleButton } from '../../index'
import { ThemeContext } from '../../../providers/Theme'

const Sidebar = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={`${styles.sidebar} ${styleTheme} `}>
			<div className={styles.container}>
				<Author />
				<Navigation />
			</div>

			<ToggleButton />
		</div>
	)
}

export { Sidebar }
