import styles from './contactPage.module.scss'
import { Icon } from '@/components/Icon'
const ContactPage = () => {


	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.container}>
				

				<Icon id='ink-pen' className={styles.inkPen} />
			</div>
		</section>
	)
}

export { ContactPage }
