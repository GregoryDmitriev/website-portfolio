import { useEffect, useState } from 'react'

import styles from './menu.module.scss'
import { Burger, Sidebar } from '../index'

const Menu = () => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 900 || window.innerHeight < 700) {
				setOpen(true)
			} else {
				setOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return <div className={styles.menu}>{!open ? <Sidebar /> : <Burger />}</div>
}

export { Menu }
