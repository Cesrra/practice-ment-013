import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'

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
							component={Home}
						/>
						<Route
							path="/settings"
							component={SettingsPage}
						/>
					</Switch>
				</main>
			</div>
		</Router>
	)
}

export default App
