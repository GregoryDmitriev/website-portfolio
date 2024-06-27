import sprite from "@/assets/images/svg/icons.svg";

export const Icon = ({ id, styles, title, ...prop }) => {
	return (
		<svg style={styles} {...prop} role='img' aria-labelledby={`title-${id}`}>
			<title id={`title-${id}`}>{title}</title>
			<use href={`${sprite}#${id}`} />
		</svg>
	)
}
