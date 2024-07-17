import { useHistory } from 'react-router-dom'
import Button from '../../Button'
import UserAvatar from './UserAvatar'

export default function UserInfo() {
	const history = useHistory()

	const user = {
		name: 'John Doe',
		username: 'johndoe',
		email: 'johndoe@gmail.com',
		phone: '1234567890',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qWpVluieSF9ckMFKxqxElfTbJ-5JUeXheA&s',
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-zWazk7BxH128jXN0XHNY2wh8Q1NytfiTw&s',
	}

	const { name } = user

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
