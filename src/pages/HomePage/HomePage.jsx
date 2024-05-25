import styles from './homePage.module.scss'

const HomePage = () => {
	return (
		<section id='home' className={styles.section}>
			<div className={styles.container}>
				<h1>Home</h1>
				<p>lorem*20</p>
			</div>
		</section>
	)
}

export { HomePage }
