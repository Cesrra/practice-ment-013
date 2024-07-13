import { CrossCircledIcon } from '@radix-ui/react-icons'
import { Redirect, Route, Switch } from 'react-router-dom'
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
		<div className="flex h-screen">
			<aside className="basis-1/3 overflow-y-auto">
				<UserSettings settingOptions={settingOptions} />
			</aside>
			<main className="flex grow overflow-y-auto">
				<Switch>
					<Route
						path="/settings"
						exact
					>
						<Redirect to="/settings/my-account" />
					</Route>
					{settingOptions.map((option) => (
						<Route
							key={option.name}
							path={option.href}
							component={option.component}
						/>
					))}
				</Switch>
				<div className="grow pt-14 bg-[#313338]">
					<a
						href="/"
						className="flex flex-col w-max items-center"
					>
						<CrossCircledIcon className="size-9 text-[#b1b6be]" />
						<p className="text-[#b1b6be] text-xs mt-1 font-semibold">ESC</p>
					</a>
				</div>
			</main>
		</div>
	)
}
