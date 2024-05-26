import { useContext, useState } from 'react'

import styles from './sidebar.module.scss'
import { Menu } from './Menu'
import { Burger } from './Burger/Burger'
import { ThemeContext } from '../../providers/Theme'

const Sidebar = () => {
	const [open, setOpen] = useState(false)
	const [theme] = useContext(ThemeContext)

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div
			className={`${styles.sidebar} ${
				theme === 'light' ? styles.light : styles.dark
			} `}
		>
			<div className={styles.container}>{open ? <Burger /> : <Menu />}</div>
		</div>
	)
}

export { Sidebar }
