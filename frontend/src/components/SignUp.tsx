import { useState, useEffect } from "react"
import InputField from "./login/InputField"
import Button from "./Button"

export default function SignUp() {

	const [email, setEmail] = useState('')
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setReapetPassword] = useState('')
	const [validPasswor, setValidPassword] = useState(true)

	useEffect(() => {
		if(repeatPassword === '' || password === repeatPassword) {
			setValidPassword(true)
		}
		else setValidPassword(false)
	},[password, repeatPassword])

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

	const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setReapetPassword(e.target.value)
	}

	console.log(validPasswor)
	console.log(password)
	console.log(repeatPassword)

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
					type="password"
					value={password}
					className="w-[416px]"
					onChange={handlePasswordChange}
				/>
				<InputField
					label="Repeat your password"
					type="text"
					value={repeatPassword}
					className="w-[416px]"
					onChange={handleRepeatPasswordChange}
				/>
				{validPasswor ? null : <span className="text-red-600 text-sm">La contraseña no coincide</span>}
				<Button
					type="submit"
					className="h-11"
				>
					Sign Up
				</Button>
			</form>

        </section>
    )
}