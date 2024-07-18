import { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { isAuthenticated } from '../utils/authHelpers.utils'

export interface AuthState {
	isAuthenticated: boolean
	loading: boolean
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [auth, setAuth] = useState<AuthState>({
		isAuthenticated: false,
		loading: true,
	})

	useEffect(() => {
		const checkAuth = () => {
			const authenticated = isAuthenticated()
			setAuth({ isAuthenticated: authenticated, loading: false })
		}

		checkAuth()
	}, [])

	return (
		<AuthContext.Provider value={{ ...auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}
