import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './app.module.scss'
import { Layout } from '../index'
import { MainPage, AboutPage } from '../../pages/index'

const App = () => {
	return (
		<div className={styles.app}>
			<main>
				<Router>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<MainPage />} />
							<Route path='about' element={<AboutPage />} />
						</Route>
					</Routes>
				</Router>
			</main>
		</div>
	)
}

export { App }
