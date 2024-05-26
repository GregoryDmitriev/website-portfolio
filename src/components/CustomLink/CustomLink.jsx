import { Link, useMatch } from 'react-router-dom'

import styles from './customLink.module.scss'

const CustomLink = ({ to, children, ...props }) => {
	const match = useMatch({ path: to, end: true })
	console.log('match', match)
	console.log('match', to)
	console.log('match', children)

	return (
		<Link
			to={to}
			{...props}
			className={match ? styles.active : 'red'}
			{...props}
		>
			{children}
		</Link>
	)
}

export { CustomLink }
