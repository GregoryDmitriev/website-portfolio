import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './app.module.scss'
import { Layout } from '../index'
import { MainPage } from '../../pages/index'
import { Settings } from '../Settings/Settings'
import { Theme } from '../../providers/Theme'

const App = () => {
	return (
		<Theme>
			<div className={styles.app}>
				<Settings />
				<Router>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<MainPage />}></Route>
						</Route>
					</Routes>
				</Router>
			</div>
		</Theme>
	)
}

export { App }
