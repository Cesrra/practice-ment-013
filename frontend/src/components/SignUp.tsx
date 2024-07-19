import { useState } from "react"
import InputField from "./login/InputField"
import Button from "./Button"
import LinkText from "./login/LinkText"

export default function SignUp() {

	const [email, setEmail] = useState('')
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setReapetPassword] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setEmail(e.target.value)
	}

	const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setUser(e.target.value)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setPassword(e.target.value)
	}

    return(
        <section>
			<form 
				className="flex flex-col gap-4"
				onSubmit={handleSubmit}
				>
				<InputField
					label="Email"
					type="email"
					value={email}
					className="w-[416px]"
					onChange={handleEmailChange}
				/>
				<InputField
					label="Username"
					type="text"
					value={user}
					className="w-[416px]"
					onChange={handleUserChange}
				/>
				<InputField
					label="Password"
					type="text"
					value={password}
					className="w-[416px]"
					onChange={handlePasswordChange}
				/>
				<InputField
					label="Repeat your password"
					type="text"
					value={repeatPassword}
					className="w-[416px]"
				/>
				<Button
					type="submit"
					className="h-11"
				>
					Sign Up
				</Button>
			</form>
			<LinkText className="mt-1">Do you already have an account?</LinkText>

        </section>
    )
}