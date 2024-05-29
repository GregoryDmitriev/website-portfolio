import styles from './homePage.module.scss'
import AOS from 'aos'

AOS.init()
const HomePage = () => {
	return (
		<section id='home' className={styles.home}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 data-aos='fade-up' data-aos-duration='800' data-aos-delay='300' className={`${styles.title}`}>Hi, I'm Gregory Dmitriev</h1>
					<p>
						I am a frontend web developer. I can provide clean code and pixel
						perfect design. I also make website more & more interactive with web
						animations.
					</p>
				</div>
			</div>
		</section>
	)
}

export { HomePage }
