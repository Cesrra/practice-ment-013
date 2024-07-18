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
	const { username } = user
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
