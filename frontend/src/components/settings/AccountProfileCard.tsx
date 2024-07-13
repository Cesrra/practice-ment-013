import { useState } from 'react'
import Button from '../login/Button'

export default function AccountProfileCard() {
	const [showEmail, setShowEmail] = useState(false)
	const [showPhone, setShowPhone] = useState(false)

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
	const phoneHideLength = user.phone.length - 4
	const hiddenPhone = '*'.repeat(phoneHideLength) + user.phone.slice(-4)

	const emailHideLength = user.email.split('@')[0].length

	const hiddenEmail =
		'*'.repeat(emailHideLength) + '@' + user.email.split('@')[1]

	return (
		<div className="w-[660px] bg-[#1e1f22] pb-4 rounded-lg">
			{/* Banner */}
			<div className="w-full h-24">
				<img
					src={user.banner}
					className="w-full h-full object-cover rounded-t-lg"
				/>
			</div>

			<div className="relative flex pl-32 pt-4 pr-4 justify-between h-20">
				{/* Avatar */}
				<div className="absolute -top-8 left-4 flex justify-center items-center rounded-full bg-[#1e1f22] size-[90px] overflow-hidden">
					<img
						src={user.avatar}
						className="object-scale-down size-20 rounded-full"
					/>
				</div>

				<span className="text-white text-xl">{user.name}</span>
				<Button className="h-8">Editar perfil de usuario</Button>
			</div>

			<div className="bg-[#2b2d31] mt-2 mx-4 p-4 rounded-lg">
				<div className="flex justify-between mb-6">
					<div>
						<h3 className="text-xs uppercase font-semibold text-[#b5bac1]">
							Mostrar nombre
						</h3>
						<p className="text-[#f2f3f5]">{user.name}</p>
					</div>
					<Button className="bg-[#4E5058] hover:bg-[#6d6f78] h-8">Editar</Button>
				</div>
				<div className="flex justify-between mb-6">
					<div>
						<h3 className="text-xs uppercase font-semibold text-[#b5bac1]">
							Nombre de usuario
						</h3>
						<p className="text-[#f2f3f5]">{user.username}</p>
					</div>
					<Button className="bg-[#4E5058] hover:bg-[#6d6f78] h-8">Editar</Button>
				</div>
				<div className="flex justify-between mb-6">
					<div>
						<h3 className="text-xs uppercase font-semibold text-[#b5bac1]">
							Correo electrónico
						</h3>
						<p className="text-[#f2f3f5]">
							{showEmail ? user.email : hiddenEmail}{' '}
							<button
								onClick={() => setShowEmail(!showEmail)}
								className="hover:underline text-sm align-top text-[#05a8fc]"
							>
								Mostrar
							</button>
						</p>
					</div>
					<Button className="bg-[#4E5058] hover:bg-[#6d6f78] h-8">Editar</Button>
				</div>
				<div className="flex justify-between mb-6">
					<div>
						<h3 className="text-xs uppercase font-semibold text-[#b5bac1]">
							Número de teléfono
						</h3>
						<p className="text-[#f2f3f5]">
							{showPhone ? user.phone : hiddenPhone}{' '}
							<button
								onClick={() => setShowPhone(!showPhone)}
								className="hover:underline text-sm align-top text-[#05a8fc]"
							>
								Mostrar
							</button>
						</p>
					</div>
					<div>
						<Button className="bg-transparent  hover:underline hover:bg-transparent h-8">
							Eliminar
						</Button>
						<Button className="bg-[#4E5058] hover:bg-[#6d6f78] h-8">Editar</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
