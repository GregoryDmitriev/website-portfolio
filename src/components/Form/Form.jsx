import { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import styles from './form.module.scss'
import { ThemeContext } from '@/providers'

const Form = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				}
			)
			.then(() => {
				Swal.fire({
					title: 'Success!',
					text: 'Message sent successfully!',
					icon: 'success',
				})
			})
	}
	return (
		<form className={styleTheme} onSubmit={sendEmail} ref={form}>
			<input
				className={`${styles.name} ${styleTheme}`}
				type='text'
				name='name'
				placeholder='Enter your name'
				required
			/>

			<input
				className={`${styles.email} ${styleTheme}`}
				type='email'
				name='email'
				placeholder='Enter your email'
				required
			/>

			<textarea
				className={`${styles.message} ${styleTheme}`}
				name='message'
				placeholder='Enter your message'
				required
			/>
			<input
				className={`${styles.button} ${styleTheme}`}
				type='submit'
				value='Send'
			/>
		</form>
	)
}

export { Form }
