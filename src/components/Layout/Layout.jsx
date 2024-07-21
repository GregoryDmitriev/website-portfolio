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
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useGSAP(() => {
		setIsMenuOpen(location.hash !== '#home')

		ScrollTrigger.create({
			trigger: '#about',
			start: 'top 5%',
			onEnter: () => setIsMenuOpen(false),
			onLeaveBack: () => setIsMenuOpen(true),
		})

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [location.pathname])

	return (
		<>
			{location.hash !== '#home' && (
				<Burger
					menuRef={menuRef}
					setIsMenuOpen={setIsMenuOpen}
					isMenuOpen={isMenuOpen}
				/>
			)}

			<Outlet />
		</>
	)
}

export { Layout }
