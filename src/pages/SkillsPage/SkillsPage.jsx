import { useContext } from 'react'

import styles from './skillsPage.module.scss'
import { Gears } from './Gears'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'

const SkillsPage = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.container}>
				{/* <div className={`${styles.textContainer} ${styleTheme}`}>
					<Icon id='line-skills' />
					<h1> SkillsPage</h1>
				</div> */}

				<Gears />
			</div>
		</section>
	)
}

export { SkillsPage }
