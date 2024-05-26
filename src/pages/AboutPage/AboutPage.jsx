import styles from './aboutPage.module.scss'

const AboutPage = () => {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.container}>
			<h1>About</h1>
			<p>My name is Gregory and I am a frontend developer.</p>
			<p>lorem*30</p>
			</div>
		</section>
	)
}

export { AboutPage }
