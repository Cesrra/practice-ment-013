import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { User } from '../../../types/user.types'
import Button from '../../Button'
import UserAvatar from '../my-account/UserAvatar'
import UserBanner from '../my-account/UserBanner'

export default function PreviewCard({
	showedName,
	pronuons,
}: {
	showedName: string
	pronuons: string
}) {
	const context = useContext(AuthContext)
	const user: User = context?.user

	const { email } = user

	const username = email?.split('@')[0]

	return (
		<div className="w-full bg-[#1e1f22] pb-4 rounded-lg">
			<UserBanner />
			<div className="relative flex flex-col pl-4 pt-16 pr-4">
				<UserAvatar />
				<p className="text-white text-xl font-bold">{showedName}</p>
				<div>
					<span className="text-[#DFE0E4] text-sm">{username}</span>
					{pronuons && <span className="text-[#DFE0E4] text-sm"> • {pronuons}</span>}
				</div>
				<Button
					variant="secondary"
					className="mt-4"
				>
					Botón de ejemplo
				</Button>
			</div>
		</div>
	)
}
