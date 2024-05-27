import { useContext, useState } from 'react'
import { CiSettings } from 'react-icons/ci'

import styles from './settings.module.scss'

import { LanguageButton } from '../Settings/LanguageButton'
import { ThemeButton } from '../Settings/ThemeButton'
import { ThemeContext } from '../../providers/Theme'

const Settings = () => {
	const [open, setOpen] = useState(false)
	const [theme] = useContext(ThemeContext)

	const handleClick = () => {
		setOpen(!open)
	}

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={`${styles.settings} ${styleTheme} `}>
			<div className={`${styles.container} ${styleTheme} `}>
				{open && (
					<div className={`${styles.btnSettings} ${styleTheme} `}>
						<LanguageButton />
						<ThemeButton />
					</div>
				)}

				<CiSettings
					className={`${styles.iconSettings} ${styleTheme} `}
					onClick={handleClick}
				/>
			</div>
		</div>
	)
}

export { Settings }
