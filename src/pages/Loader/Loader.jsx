import styles from './loader.module.scss'

const Loader = () => {

  window.addEventListener('load', () => {
    document.body.classList.add('loaded')
  })

	return <div className={styles.loader}></div>
}

export { Loader }
