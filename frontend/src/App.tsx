import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'

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
					</Switch>
				</main>
			</div>
		</Router>
	)
}

export default App
