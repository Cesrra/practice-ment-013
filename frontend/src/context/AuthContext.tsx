import React, { createContext } from 'react'
import { AuthState, User } from '../components/AuthProvider'

interface AuthContextType {
	user: User | null
	loading: boolean
	setAuth: React.Dispatch<React.SetStateAction<AuthState>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
