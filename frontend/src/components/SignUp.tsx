import { useState, useEffect } from "react"
import InputField from "./login/InputField"
import { useHistory } from "react-router-dom"
import Button from "./Button"
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { register } from "../services/auth.services"

export default function SignUp() {

	const [email, setEmail] = useState('')
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setReapetPassword] = useState('')
	const [validPasswor, setValidPassword] = useState(true)

	const history = useHistory()

	useEffect(() => {
		if(repeatPassword === '' || password === repeatPassword) {
			setValidPassword(true)
		}
		else setValidPassword(false)
	},[password, repeatPassword])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const data = await register({
				name: user,
				password,
				confirmedPassword: repeatPassword,
				email
			})
			if(data.success) {
				history.push('/')
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
					type="password"
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
			<ToastContainer/>

        </section>
    )
}