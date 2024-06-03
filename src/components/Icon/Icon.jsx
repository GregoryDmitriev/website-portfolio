import sprite from '../../assets/images/icons.svg'

export const Icon = ({ id, styles, ...prop }) => {
	return (
		<svg style={styles} {...prop}>
			<use href={`${sprite}#${id}`} />
		</svg>
	)
}
