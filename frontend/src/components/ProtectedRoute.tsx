import { ComponentType, useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

interface ProtectedRouteProps extends RouteProps {
	component: ComponentType<object>
}

const ProtectedRoute = ({
	component: Component,
	...rest
}: ProtectedRouteProps) => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('ProtectedRoute debe ser usado dentro de AuthProvider')
	}

	const { isAuthenticated, loading } = context

	if (loading) {
		return <div>Cargando...</div>
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	)
}

export default ProtectedRoute
