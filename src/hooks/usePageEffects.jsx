import { useEffect, useState, useRef, createRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const usePageEffects = sections => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const { hash } = useLocation()
	const navigate = useNavigate()
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
		const handleHashChange = () => {
			if (hash) {
				const element = document.getElementById(hash.substring(1))
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}
		}

		handleHashChange()
	}, [hash])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id
						if (hash.substring(1) !== sectionId) {
							navigate(`#${sectionId}`)
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
	}, [navigate, hash])

	return { windowWidth, sectionRefs }
}

export { usePageEffects }
