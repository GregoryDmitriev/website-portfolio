import { useState, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Burger } from '../index'

gsap.registerPlugin(ScrollTrigger)

const Layout = () => {
	const menuRef = useRef(null)

	const location = useLocation()
	const [closeMenu, setCloseMenu] = useState(location.pathname === '/')

	useGSAP(() => {
		if (location.pathname === '/') {
			ScrollTrigger.create({
				trigger: '#skills',
				start: 'top 5%',
				onEnter: () => setCloseMenu(false),
				onLeaveBack: () => setCloseMenu(true),
			})
		}
	}, [location.pathname])

	return (
		<>
			{!closeMenu && <Burger useRef={menuRef} />}
			<Outlet />
		</>
	)
}

export { Layout }
