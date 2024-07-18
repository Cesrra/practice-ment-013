import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TogglerButton from '../../TogglerButton'
import UserEditOption from './UserEditOption'

export default function UserEditOptions() {
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
	const { name, username, email, phone } = user

	const [showEmail, setShowEmail] = useState(false)
	const [showPhone, setShowPhone] = useState(false)

	const emailHideLength = email.split('@')[0].length
	const hiddenEmail = '*'.repeat(emailHideLength) + '@' + email.split('@')[1]

	const phoneHideLength = phone.length - 4
	const hiddenPhone = '*'.repeat(phoneHideLength) + phone.slice(-4)

	const emailOptionContent = (
		<>
			{showEmail ? email : hiddenEmail}{' '}
			<TogglerButton
				variant="top aligned"
				text="Mostrar"
				state={showEmail}
				setState={setShowEmail}
			/>
		</>
	)

	const phoneOptionContent = (
		<>
			{showPhone ? phone : hiddenPhone}{' '}
			<TogglerButton
				variant="top aligned"
				text="Mostrar"
				state={showPhone}
				setState={setShowPhone}
			/>
		</>
	)

	return (
		<div className="bg-[#2b2d31] mt-2 mx-4 p-4 rounded-lg">
			<UserEditOption
				title="Mostrar nombre"
				className="mb-6"
				onClickEdit={() => history.push('/settings/profiles')}
			>
				{name}
			</UserEditOption>
			<UserEditOption
				title="Nombre de usuario"
				className="mb-6"
			>
				{username}
			</UserEditOption>
			<UserEditOption
				title="Correo electrónico"
				className="mb-6"
			>
				{emailOptionContent}
			</UserEditOption>
			<UserEditOption
				title="Número de teléfono"
				canDelete
			>
				{phoneOptionContent}
			</UserEditOption>
		</div>
	)
}
