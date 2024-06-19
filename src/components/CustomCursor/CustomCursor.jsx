import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import styles from './customCursor.module.scss'

const CustomCursor = () => {
	const cursorRef = useRef(null)

	const { context } = useGSAP(() => {
		const xTo = gsap.quickTo(cursorRef.current, 'x', {
			xPercent: -30,
			duration: 0.3,
		})
		const yTo = gsap.quickTo(cursorRef.current, 'y', {
			yPercent: -50,
			duration: 0.3,
		})

		const onMouseMove = e => {
			xTo(e.clientX)
			yTo(e.clientY)
		}

		window.addEventListener('mousemove', onMouseMove)

		return () => {
			window.removeEventListener('mousemove', onMouseMove)
		}
	}, [cursorRef])

	return <div className={styles.cursor} ref={cursorRef}></div>
}

export { CustomCursor }
