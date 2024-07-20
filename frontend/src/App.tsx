import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import SignUpPage from './pages/SignUpPage'

const App = () => {
	return (
		<Router>
			<div>
				<main>
					<Switch>
						<Route
							path="/login"
							component={LoginPage}
						/>
						<Route
							path="/"
							exact
							component={Home}
						/>
						<Route
							path="/settings"
							component={SettingsPage}
						/>
						<Route
							path="/register"
							component={SignUpPage}
						/>
					</Switch>
				</main>
			</div>
		</Router>
	)
}

export default App
