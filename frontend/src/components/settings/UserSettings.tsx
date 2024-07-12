import { Link } from 'react-router-dom'
import { SettingOption } from '../../pages/SettingsPage'

export default function UserSettings({
	settingOptions,
}: {
	settingOptions: SettingOption[]
}) {
	return (
		<>
			<h3>AJUSTES DE USUARIO</h3>
			<ul>
				{settingOptions.map((option) => (
					<li key={option.name}>
						<Link to={option.href}>{option.name}</Link>
					</li>
				))}
				<li>
					<button
						onClick={() => {
							console.log('cerrar sesión')
						}}
					>
						Cerrar sesión
					</button>
				</li>
			</ul>
		</>
	)
}
