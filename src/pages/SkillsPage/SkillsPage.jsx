import styles from './skillsPage.module.scss'
import { Gears } from '../SkillsPage/Gears/Gears'
const SkillsPage = () => {
	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.container}>
				<h1>SkillsPage</h1>

				<Gears />
			</div>
		</section>
	)
}

export { SkillsPage }
