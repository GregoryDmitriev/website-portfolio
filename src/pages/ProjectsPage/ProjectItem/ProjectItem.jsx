import { useContext } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/scrollbar'
import 'swiper/scss'

import styles from './projectItem.module.scss'
import { LINK_GITHUB, PROJECTS } from '@/constants'
import { Scrollbar } from 'swiper/modules'
import { ThemeContext } from '@/providers'
import { Link } from 'react-router-dom'

const ProjectItem = ({ setIsProjectsWindowOpen }) => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const handleOpenBtn = () => {
		setIsProjectsWindowOpen(false)
	}

	return (
		<div className={styles.container}>
			<Swiper
				className={styles.swiper}
				scrollbar={{
					hide: true,
				}}
				modules={[Scrollbar]}
			>
				{PROJECTS.map(project => (
					<SwiperSlide
						key={project.id}
						className={styles.swiperSlide}
						style={{ backgroundImage: `url(${project.img})` }}
					>
						<div className={`${styles.swiperSlideContent} ${styleTheme}`}>
							<Link
								to='projects'
								className={`${styles.linkClose} ${styleTheme}`}
								onClick={handleOpenBtn}
							>
								<IoIosCloseCircleOutline />
							</Link>

							<h4>{project.title}</h4>
							<p>{project.description}</p>

							<div className={styles.linksView}>
								<Link to={LINK_GITHUB}>
									GitHub <FaArrowUpRightFromSquare />
								</Link>
								<Link to={project.link}>
									Demo <FaArrowUpRightFromSquare />
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export { ProjectItem }
