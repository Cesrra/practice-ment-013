import { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getProfile } from '../services/auth.services'
import { User } from '../types/user.types'
export interface AuthState {
	user: User | null
	loading: boolean
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [auth, setAuth] = useState<AuthState>({
		user: null,
		loading: true,
	})

	// const user: User = {
	// 	_id: '1',
	// 	name: 'John Doe',
	// 	email: 'john@example.com',
	// 	avatar:
	// 		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qWpVluieSF9ckMFKxqxElfTbJ-5JUeXheA&s',
	// 	createdAt: new Date().toISOString(),
	// 	updatedAt: new Date().toISOString(),
	// 	__v: 0,
	// }

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const user: User = await getProfile()
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
