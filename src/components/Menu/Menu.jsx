import { useEffect, useState } from 'react'

import styles from './menu.module.scss'
import { Burger, Sidebar } from '../index'
import { SidebarProvider } from '../../providers'

const Menu = () => {
	const [open, setOpen] = useState(() => {
		const savedState = localStorage.getItem('menuOpen')
		return savedState !== null ? savedState === 'true' : false
	})

	useEffect(() => {
		const handleResize = () => {
			const shouldOpen = window.innerWidth <= 900 || window.innerHeight <= 699
			setOpen(shouldOpen)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('menuOpen', open)
	}, [open])

	return (
		<div className={styles.menu}>
			{!open ? (
				<SidebarProvider>
					<Sidebar />
				</SidebarProvider>
			) : (
				<Burger />
			)}
		</div>
	)
}

export { Menu }
