import UserBanner from './UserBanner'
import UserEditOptions from './UserEditOptions'
import UserInfo from './UserInfo'

export default function AccountProfileCard() {
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

	return (
		<div className="w-[660px] bg-[#1e1f22] pb-4 rounded-lg">
			<UserBanner image={user.banner} />
			<UserInfo />
			<UserEditOptions />
		</div>
	)
}
