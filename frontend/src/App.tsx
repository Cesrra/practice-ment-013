import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
	return (
		<Router>
			<div className="app">
				<main>
					<Switch>
						<Route
							path="/login"
							component={Login}
						/>
					</Switch>
				</main>
			</div>
		</Router>
	)
}

export default App
