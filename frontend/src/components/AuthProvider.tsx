import { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getProfile } from '../services/auth.services'

export interface User {
	_id: string
	name: string
	email: string
	avatar: string
	createdAt: string
	updatedAt: string
	__v: number
}
export interface AuthState {
	user: User | null
	loading: boolean
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [auth, setAuth] = useState<AuthState>({
		user: null,
		loading: true,
	})

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const user = await getProfile()
				setAuth({
					user,
					loading: false,
				})
			} catch (error) {
				console.log(error)

				setAuth({ user: null, loading: false })
			}
		}

		checkAuth()
	}, [])

	return (
		<AuthContext.Provider value={{ ...auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}
