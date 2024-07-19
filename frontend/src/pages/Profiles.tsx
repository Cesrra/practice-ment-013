import { useContext, useState } from 'react'
import InputField from '../components/login/InputField'
import MyAccountOption from '../components/settings/my-account/MyAccountOption'
import PreviewCard from '../components/settings/profiles/PreviewCard'
import { AuthContext } from '../context/AuthContext'
import { User } from '../types/user.types'

export default function Profiles() {
	const context = useContext(AuthContext)
	if (!context?.user) throw new Error('User not found')

	const user: User = context?.user
	const { email } = user
	const username = email?.split('@')[0]

	const [showedName, setShowedName] = useState(user.name)
	const [pronouns, setPronouns] = useState('')

	const handleChangeShowedName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShowedName(e.target.value)
	}

	const handleChangePronouns = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPronouns(e.target.value)
	}

	return (
		<section className="pt-14 pb-20 pl-10 w-min bg-[#313338] overflow-y-auto no-scrollbar">
			<h2 className="text-xl font-medium text-white mb-5">Perfiles</h2>
			<div className="w-[660px] flex gap-9">
				<div className="grow">
					<InputField
						label="Mostrar nombre"
						value={showedName}
						onChange={handleChangeShowedName}
						placeholder={username}
					/>
					<hr className="my-6 border border-[#3b3d43]" />
					<InputField
						label="Pronombres"
						value={pronouns}
						onChange={handleChangePronouns}
						placeholder="Ańade tus pronombres"
					/>
					<hr className="my-6 border border-[#3b3d43]" />
					<MyAccountOption
						title="Avatar"
						optionButtons={[
							{ text: 'Cambiar avatar' },
							{ variant: 'ghost', text: 'Eliminar avatar' },
						]}
					/>
				</div>
				<div className="w-72">
					<h3 className="text-xs uppercase font-semibold text-[#b5bac1] mb-2">
						vista previa
					</h3>
					<PreviewCard
						showedName={showedName}
						pronuons={pronouns}
					/>
				</div>
			</div>
		</section>
	)
}
