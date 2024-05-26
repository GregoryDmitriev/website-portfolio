import { useState } from 'react'

import styles from './languageButton.module.scss'

const LanguageButton = () => {
	const [language, setLanguage] = useState('EN')

	const handleClick = () => {
		setLanguage(language === 'EN' ? 'UA' : 'EN')
	}

	return (
		<div className={styles.languageButton} onClick={handleClick}>
			<a href='#'> {language} </a>
		</div>
	)
}

export { LanguageButton }
