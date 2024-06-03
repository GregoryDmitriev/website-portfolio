import { useContext } from 'react'

import styles from './gears.module.scss'
import { ThemeContext } from '../../../providers/index'
import { Icon } from '../../../components/Icon'

const Gears = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<>
			<div className={`${styles.gearsContainer} ${styleTheme} `}>
				<Icon id='icon-gear' className={`${styles.gear}`} />
				<Icon id='icon-gear' className={`${styles.smallGear}`} />
			</div>
		</>
	)
}

export { Gears }
