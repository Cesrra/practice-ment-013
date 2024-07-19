import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import Button from '../../Button'
import UserAvatar from './UserAvatar'

export default function UserInfo() {
	const history = useHistory()

	const context = useContext(AuthContext)
	const name = context?.user?.name

	const handleClick = () => history.push('/settings/profiles')

	return (
		<div className="relative flex pl-32 pt-4 pr-4 justify-between h-20">
			<UserAvatar />
			<span className="text-white text-xl font-bold">{name}</span>
			<Button
				onClick={handleClick}
				className="h-8"
			>
				Editar perfil de usuario
			</Button>
		</div>
	)
}
