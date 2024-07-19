import { useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login as loginService } from '../../services/auth.services'
import Button from '../Button'
import InputField from './InputField'
import LinkText from './LinkText'

export default function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const data = await loginService({ email, password })
			if (data.success) {
				window.location.reload()
			}
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
					transition: Bounce,
				})
			} else {
				console.error(error)
			}
		}
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	return (
		<div>
			<form
				className="flex flex-col gap-4"
				onSubmit={handleSubmit}
			>
				<InputField
					label="correo electrónico"
					type="email"
					value={email}
					onChange={handleEmailChange}
					className="w-[416px]"
				/>
				<div>
					<InputField
						label="contraseña"
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
					<LinkText className="mt-1">¿Has olvidado la contraseña?</LinkText>
				</div>
				<Button
					type="submit"
					className="h-11"
				>
					Iniciar sesión
				</Button>
			</form>
			<ToastContainer />
		</div>
	)
}
