import { useContext, useState } from 'react'
import { CiSettings } from 'react-icons/ci'

import styles from './settings.module.scss'

import { LanguageButton } from '../Settings/LanguageButton'
import { ThemeButton } from '../Settings/ThemeButton'
import { ThemeContext } from '../../providers/Theme'

const Settings = () => {
	const [open, setOpen] = useState(false)
	const [theme, setTheme] = useContext(ThemeContext)

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div
			className={`${styles.settings} ${
				theme === 'light' ? styles.light : styles.dark
			} `}
		>
			<div
				className={`${styles.container} ${
					theme === 'light' ? styles.light : styles.dark
				} `}
			>
				{open && (
					<div
						className={`${styles.btnSettings} ${
							theme === 'light' ? styles.light : styles.dark
						} `}
					>
						<LanguageButton />
						<ThemeButton />
					</div>
				)}
				<CiSettings
					className={`${styles.iconSettings} ${
						theme === 'light' ? styles.light : styles.dark
					} `}
					onClick={handleClick}
				/>
			</div>
		</div>
	)
}

export { Settings }
