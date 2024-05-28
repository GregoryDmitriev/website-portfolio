import { useContext } from 'react'

import styles from './sidebar.module.scss'
import { Navigation, Author, ToggleButton } from '../../index'
import { ThemeContext, SidebarContext } from '../../../providers/index'

const Sidebar = () => {
	const [theme] = useContext(ThemeContext)
	const { isClosed } = useContext(SidebarContext)

	const sidebarWidth = isClosed ? styles.sidebarClosed : styles.sidebar
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={`${styles.sidebar} ${styleTheme} ${sidebarWidth}`}>
			<div className={styles.container}>
				<Author />
				<Navigation />
				<ToggleButton />
			</div>
		</div>
	)
}

export { Sidebar }
