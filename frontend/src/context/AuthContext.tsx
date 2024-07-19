import React, { createContext } from 'react'
import { AuthState } from '../components/AuthProvider'
import { User } from '../types/user.types'

interface AuthContextType {
	user: User | null
	loading: boolean
	setAuth: React.Dispatch<React.SetStateAction<AuthState>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
