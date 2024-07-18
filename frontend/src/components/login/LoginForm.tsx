import { useState } from 'react'
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
			await loginService({ email, password })
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			}
			console.error(error)
		}
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	return (
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
	)
}
