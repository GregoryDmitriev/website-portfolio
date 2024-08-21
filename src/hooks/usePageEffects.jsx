import { useEffect, useState, useRef, createRef } from 'react'
import { useLocation } from 'react-router-dom'

const usePageEffects = sections => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const location = useLocation()
	const sectionRefs = useRef(sections.map(() => createRef()))

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		const sectionId = location.pathname.substring(1)
		if (sectionId) {
			const element = document.getElementById(sectionId)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location.pathname])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.getAttribute('id')
						if (sectionId && location.pathname !== `/${sectionId}`) {
							window.history.replaceState(null, '', `/${sectionId}`)

						}
					}
				})
			},
			{ threshold: 0.5 }
		)

		sectionRefs.current.forEach(ref => {
			if (ref.current) {
				observer.observe(ref.current)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [location.pathname])

	return { windowWidth, sectionRefs }
}

export { usePageEffects }

