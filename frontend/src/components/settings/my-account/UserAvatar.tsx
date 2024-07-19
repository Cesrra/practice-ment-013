import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function UserAvatar() {
	const context = useContext(AuthContext)
	const avatar = context?.user?.avatar

	return (
		<div className="absolute -top-8 left-4 flex justify-center items-center rounded-full bg-[#1e1f22] size-[90px] overflow-hidden">
			<img
				src={avatar}
				className="object-scale-down size-20 rounded-full"
			/>
		</div>
	)
}
