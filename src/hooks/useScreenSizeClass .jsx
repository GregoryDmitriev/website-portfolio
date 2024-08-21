import { useState, useEffect } from 'react'

const useScreenSizeClass = stylesMap => {
	const getScreenSizeClass = () => {
		const height = window.innerHeight
		if (height <= 400) return stylesMap.smallHero_h400
		if (height <= 500) return stylesMap.smallHero_h500
		if (height <= 600) return stylesMap.smallHero_h600
		return ''
	}

	const [screenSizeClass, setScreenSizeClass] = useState(getScreenSizeClass())

	useEffect(() => {
		const handleResize = () => {
			setScreenSizeClass(getScreenSizeClass())
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return screenSizeClass
}

export { useScreenSizeClass }
