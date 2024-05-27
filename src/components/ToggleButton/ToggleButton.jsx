import { useState, useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import styles from './toggleButton.module.scss'
import { ThemeContext } from '../../providers/Theme'

const ToggleButton = () => {
	const [theme] = useContext(ThemeContext)
	const [close, setClose] = useState(true)

	const handleClick = e => {
		e.preventDefault()
		setClose(!close)
	}

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<button
			onClick={handleClick}
			className={`${styles.toggleButton} ${styleTheme} `}
		>
			{close ? <IoIosArrowBack /> : <IoIosArrowForward />}
		</button>
	)
}

export { ToggleButton }
