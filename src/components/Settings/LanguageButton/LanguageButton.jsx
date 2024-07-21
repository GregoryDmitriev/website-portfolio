import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './languageButton.module.scss'
import { ThemeContext } from '@/providers'

const LanguageButton = () => {
	const [language, setLanguage] = useState('EN')

	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const handleClick = () => {
		setLanguage(language === 'EN' ? 'UA' : 'EN')
	}

	return (
		<button
			type='button'
			className={`${styles.languageButton} ${styleTheme}`}
			onClick={handleClick}
		>
			<p>{language}</p>
		</button>
	)
}

export { LanguageButton }
