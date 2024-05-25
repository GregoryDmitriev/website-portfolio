import { useState } from 'react'

import styles from './sidebar.module.scss'
import { Menu } from './Menu'
import { Burger } from './Burger/Burger'

const Sidebar = () => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div  className={styles.sidebar}>
			<div className={styles.container}>{open ? <Burger /> : <Menu />}</div>
		</div>
	)
}

export { Sidebar }
