import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/scrollbar'
import 'swiper/scss'

import styles from './projectItem.module.scss'
import { LINK_GITHUB, PROJECTS } from '@/constants'
import { Scrollbar } from 'swiper/modules'
import { ThemeContext } from '@/providers'

const ProjectItem = ({ setIsProjectsWindowOpen }) => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark
	const navigate = useNavigate()

	const handleOpenBtn = () => {
		setIsProjectsWindowOpen(false)
		navigate('projects')
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
							<button
								type='button'
								className={`${styles.btnClose} ${styleTheme}`}
								onClick={handleOpenBtn}
							>
								<IoIosCloseCircleOutline />
							</button>

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
