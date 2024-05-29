import { Outlet } from 'react-router-dom'

import { Menu } from '../index'

const Layout = () => {
	return (
		<>
			<Menu />
			<Outlet />
		</>
	)
}

export { Layout }
