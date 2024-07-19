import { ExitIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { SettingOption } from '../../pages/SettingsPage'
import { logout } from '../../services/auth.services'

export default function UserSettings({
	settingOptions,
}: {
	settingOptions: SettingOption[]
}) {
	const location = useLocation()
	const pathname = location.pathname

	const handleCloseSession = async () => {
		try {
			await logout()
			document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
			window.location.reload()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="bg-[#2b2d31] flex h-full">
			<div className="grow" />
			<div className="flex flex-col pt-14 pl-4 pr-3">
				<h3 className="uppercase text-xs font-semibold text-[#949ba4] px-[10px] pb-[6px] w-48">
					Ajustes de usuario
				</h3>
				<ul>
					{settingOptions.map((option) => (
						<li
							key={option.name}
							className={clsx(
								'w-full text-[#b5bac1] text-sm mb-[2px] hover:bg-[#35373d] rounded',
								{
									'bg-[#404249] text-white': pathname === option.href,
								}
							)}
						>
							<Link
								to={option.href}
								className="block px-[10px] py-[6px]"
							>
								{option.name}
							</Link>
						</li>
					))}
					<li className="cursor-pointer">
						<button
							onClick={handleCloseSession}
							className="w-full flex items-center justify-between text-[#b5bac1] text-sm mb-[2px] hover:bg-[#35373d] rounded px-[10px] py-[6px] active:bg-[#404249] active:text-white"
						>
							Cerrar sesión
							<ExitIcon className="w-4" />
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
