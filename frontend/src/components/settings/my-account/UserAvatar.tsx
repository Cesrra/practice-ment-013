export default function UserAvatar() {
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
	const { avatar } = user

	return (
		<div className="absolute -top-8 left-4 flex justify-center items-center rounded-full bg-[#1e1f22] size-[90px] overflow-hidden">
			<img
				src={avatar}
				className="object-scale-down size-20 rounded-full"
			/>
		</div>
	)
}
