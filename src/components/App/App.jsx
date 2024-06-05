import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './app.module.scss'
import { Layout, Settings } from '../index'
import { MainPage } from '@/pages'
import { ThemeProvider } from '@/providers'

const App = () => {
	return (
		<ThemeProvider>
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
		</ThemeProvider>
	)
}

export { App }
