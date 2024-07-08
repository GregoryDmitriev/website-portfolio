import { useState, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Burger } from '../index'

gsap.registerPlugin(ScrollTrigger)

const Layout = () => {
	return (
		<>
			<Burger  />
			<Outlet />
		</>
	)
}

export { Layout }
