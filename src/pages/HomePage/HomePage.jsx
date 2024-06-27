import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'

gsap.registerPlugin(ScrollTrigger)
const HomePage = () => {
	const boxRef = useRef(null)
	const containerHomeRef = useRef(null)

	useGSAP(() => {
		const tl = gsap.timeline()

		tl.to(boxRef.current, {
			scrollTrigger: {
				trigger: containerHomeRef.current,
				start: '20% 10%',
				end: 'bottom 80%',
				scrub: true,
				pin: true,
				markers: true,
			},
			xPercent: 500,
			yPercent: -200,
			duration: 1,
			scale: 2,
		})
	}, [])

	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<>
			<div
				className={styles.container}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					...styleTheme,
				}}
				ref={containerHomeRef}
			>
				<span
					ref={boxRef}
					style={{ width: '100px', height: '100px', backgroundColor: 'black' }}
				/>
			</div>
		</>
	)
}

export { HomePage }
