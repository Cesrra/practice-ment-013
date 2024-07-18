import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import SettingsPage from '../pages/SettingsPage'

const AppRoutes: React.FC = () => {
	return (
		<Switch>
			<Route
				path="/login"
				component={LoginPage}
			/>
			<ProtectedRoute
				path="/"
				exact
				component={Home}
			/>
			<ProtectedRoute
				path="/settings"
				component={SettingsPage}
			/>
		</Switch>
	)
}

export default AppRoutes
