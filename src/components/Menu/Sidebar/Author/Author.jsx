import { useContext } from "react";

import styles from "./author.module.scss";
import { ThemeContext, SidebarContext } from "@/providers/index";

const Author = () => {
	const [theme] = useContext(ThemeContext);
	const { isClosed } = useContext(SidebarContext);

	const styleTheme = theme === "light" ? styles.light : styles.dark;

	return (
		<div className={styles.author}>
			<div className={styles.container}>
				<div
					className={
						isClosed
							? `${styles.imgContainer} ${styleTheme} ${styles.imgSidebarClosed}`
							: `${styles.imgContainer} ${styleTheme}`
					}
				/>
			</div>
		</div>
	);
};

export { Author };
