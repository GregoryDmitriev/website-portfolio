import { useEffect, useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme || 'light'
	})

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider, ThemeContext }
