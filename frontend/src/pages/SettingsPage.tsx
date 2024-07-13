import { Route, Switch } from 'react-router-dom'
import Advanced from '../components/settings/Advanced'
import MyAccount from '../components/settings/MyAccount'
import UserSettings from '../components/settings/UserSettings'

export interface SettingOption {
	name: string
	href: string
	component: React.ComponentType
}

export default function SettingsPage() {
	const settingOptions: SettingOption[] = [
		{ name: 'Mi cuenta', href: '/settings/my-account', component: MyAccount },
		{ name: 'Avanzado', href: '/settings/advanced', component: Advanced },
	]

	return (
		<div className="flex">
			<aside className="basis-[30vw]">
				<UserSettings settingOptions={settingOptions} />
			</aside>
			<main className="basis-4/6">
				<Switch>
					<Route
						path="/settings"
						exact
						component={MyAccount}
					/>
					{settingOptions.map((option) => (
						<Route
							key={option.name}
							path={option.href}
							component={option.component}
						/>
					))}
				</Switch>
			</main>
		</div>
	)
}
