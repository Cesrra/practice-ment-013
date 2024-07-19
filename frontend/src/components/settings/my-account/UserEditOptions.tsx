import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { User } from '../../../types/user.types'
import TogglerButton from '../../TogglerButton'
import UserEditOption from './UserEditOption'

export default function UserEditOptions() {
	const history = useHistory()

	const context = useContext(AuthContext)
	const user: User = context?.user
	const phone = '123456789'
	const username = user.email.split('@')[0]

	const [showEmail, setShowEmail] = useState(false)
	const [showPhone, setShowPhone] = useState(false)

	const emailHideLength = user.email.split('@')[0].length
	const hiddenEmail =
		'*'.repeat(emailHideLength) + '@' + user.email.split('@')[1]

	const phoneHideLength = phone.length - 4
	const hiddenPhone = '*'.repeat(phoneHideLength) + phone.slice(-4)

	const emailOptionContent = (
		<>
			{showEmail ? user.email : hiddenEmail}{' '}
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
				{user.name}
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
