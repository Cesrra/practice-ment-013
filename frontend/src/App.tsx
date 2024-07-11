import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

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
					</Switch>
				</main>
			</div>
		</Router>
	)
}

export default App
