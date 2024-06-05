import { useContext } from 'react'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'

const HomePage = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<section id='home' className={styles.home}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>Hi, I'm Gregory Dmitriev</h1>
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
