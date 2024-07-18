import { useState } from 'react'
import InputField from '../components/login/InputField'
import MyAccountOption from '../components/settings/my-account/MyAccountOption'
import PreviewCard from '../components/settings/profiles/PreviewCard'

export default function Profiles() {
	const user = {
		name: 'John Doe',
		pronouns: '',
		username: 'johndoe',
		email: 'johndoe@gmail.com',
		phone: '1234567890',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qWpVluieSF9ckMFKxqxElfTbJ-5JUeXheA&s',
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-zWazk7BxH128jXN0XHNY2wh8Q1NytfiTw&s',
	}

	const [showedName, setShowedName] = useState(user.name)
	const [pronouns, setPronouns] = useState(user.pronouns)

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
						placeholder={user.username}
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
