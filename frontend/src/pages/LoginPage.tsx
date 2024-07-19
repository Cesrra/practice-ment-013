import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LinkText from '../components/login/LinkText'
import LoginForm from '../components/login/LoginForm'
import { AuthContext } from '../context/AuthContext'

export default function LoginPage() {
	const context = useContext(AuthContext)
	const history = useHistory()

	useEffect(() => {
		if (context?.user) {
			history.push('/')
		}
	}, [context?.user, history])

	return (
		<main className="fixed inset-0 z-50 flex h-full justify-center bg-[#2b2c31]">
			<section className="bg-[#373940] flex flex-col items-center w-fit h-fit my-auto p-6 gap-2 rounded-sm">
				<h1 className="text-white font-semibold text-2xl mb-5">¡Hola de nuevo!</h1>
				<LoginForm />
				<p className="text-[#949ba4] text-xs font-medium w-full">
					¿Necesitas una cuenta? <LinkText>Registarse</LinkText>
				</p>
			</section>
		</main>
	)
}
