import { Outlet } from 'react-router-dom'

import { Menu } from '../index'

const Layout = () => {
	return (
		<>
			<Menu />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export { Layout }
