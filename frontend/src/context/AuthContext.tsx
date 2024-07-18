import React, { createContext } from 'react'
import { AuthState } from '../components/AuthProvider'

interface AuthContextType {
	isAuthenticated: boolean
	loading: boolean
	setAuth: React.Dispatch<React.SetStateAction<AuthState>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
