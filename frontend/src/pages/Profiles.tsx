import { useState } from 'react'
import Button from '../components/Button'
import InputField from '../components/login/InputField'
import MyAccountOption from '../components/settings/my-account/MyAccountOption'
import UserAvatar from '../components/settings/my-account/UserAvatar'
import UserBanner from '../components/settings/my-account/UserBanner'

export default function Profiles() {
	const user = {
		name: 'John Doe',
		pronouns: undefined,
		username: 'johndoe',
		email: 'johndoe@gmail.com',
		phone: '1234567890',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qWpVluieSF9ckMFKxqxElfTbJ-5JUeXheA&s',
		banner:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-zWazk7BxH128jXN0XHNY2wh8Q1NytfiTw&s',
	}

	const [showedName, setShowedName] = useState(user.name)
	const [pronouns, setPronouns] = useState<string | undefined>(user.pronouns)

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
						placeholder="placeholder"
					/>
					<hr className="my-6 border border-[#3b3d43]" />
					<InputField
						label="Pronombres"
						value={pronouns}
						onChange={handleChangePronouns}
						placeholder="placeholder"
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
					<div className="w-full bg-[#1e1f22] pb-4 rounded-lg">
						<UserBanner image={user.banner} />
						<div className="relative flex flex-col pl-4 pt-16 pr-4">
							<UserAvatar />
							<p className="text-white text-xl font-bold">{user.name}</p>
							<p className="text-[#DFE0E4] text-sm">{user.username}</p>
							<Button
								variant="secondary"
								className="mt-4"
							>
								Botón de ejemplo
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
