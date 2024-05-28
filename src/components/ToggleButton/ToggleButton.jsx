import { useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import styles from './toggleButton.module.scss'
import {
	ThemeContext,
	SidebarContext,
} from '../../providers/index'

const ToggleButton = () => {
	const { isClosed, handleSidebar } = useContext(SidebarContext)
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<button
			onClick={handleSidebar}
			className={
				!isClosed
					? `${styles.toggleButton} ${styleTheme} `
					: `${styles.toggleButton} ${styleTheme} ${styles.toggleButtonClosed}`
			}
		>
			{isClosed ? <IoIosArrowBack /> : <IoIosArrowForward />}
		</button>
	)
}

export { ToggleButton }
