import { useContext } from 'react'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '@/providers'
import record from '@/assets/images/record.png'
import { Icon } from '@/components/Icon'

const AboutPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={styles.container}>
			<div className={styles.arrestScene}>
				<div className={styles.policemanBox}>
					<div className={styles.babblePoliceman}>
						<p className={styles.subtitlePoliceman}>
							The operation to detain the suspect was successful...
						</p>
						<br />
						<p className={styles.subtitlePoliceman}>
							...during his arrest he showed great interest in technology,
							answered all HR and technical lead questions, completed the test
							task
						</p>
					</div>

					<Icon
						id='arrest'
						className={`${styles.arrest} ${styleTheme}`}
						aria-label='arrest'
					/>
				</div>

				<div className={styles.hrBox}>
					<div className={styles.babbleHr}>
						<p className={styles.subtitleHr}>
							For the record, did not resist during the arrest...
						</p>
						<br />
						<p className={styles.subtitleHr}>
							...but refused to “work for bread”
						</p>
					</div>

					<Icon
						id='hr'
						className={`${styles.hr} ${styleTheme}`}
						aria-label='hr'
					/>
				</div>
			</div>

			{/* <div className={styles.contentContainer}>
				<div className={`${styles.contentBox} ${styleTheme}`}>
					<div className={`${styles.content} `}>
						<p className={styleTheme}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
							unde? Quasi accusantium illo reiciendis, eum ut ipsum, harum
							architecto, commodi vel minus et id repudiandae quas qui aliquam
							at nihil. Vitae vero repellendus molestias sint asperiores
							molestiae sit veritatis saepe ipsum error beatae, fuga, voluptate
							nam labore, accusamus quia. Temporibus placeat debitis nesciunt
							sed optio fugit mollitia asperiores repudiandae minus!
						</p>
						<br />
					</div>
				</div>

				<div className={styles.recordContainer}>
					<img src={record} alt='record.png' />
				</div>

			</div> */}
		</div>
	)
}

export { AboutPage }
