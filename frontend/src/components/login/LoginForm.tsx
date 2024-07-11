import { useState } from 'react'
import InputField from './InputField'
import LinkText from './LinkText'

export default function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	return (
		<form
			className="flex flex-col"
			onSubmit={handleSubmit}
		>
			<InputField
				label="EMAIL"
				type="email"
				value={email}
				onChange={handleEmailChange}
			/>
			<InputField
				label="PASSWORD"
				type="password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<LinkText className="mb-4 mt-1">Forgot your password?</LinkText>
			<button
				type="submit"
				className="bg-[#7389d9] text-white text-xs font-semibold h-8 rounded-sm"
			>
				Login
			</button>
		</form>
	)
}
