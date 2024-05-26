import { Outlet } from 'react-router-dom'

import { Sidebar } from '../index'

const Layout = () => {
	return (
		<>
			<Sidebar />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export { Layout }
