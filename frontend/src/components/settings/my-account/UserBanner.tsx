export default function UserBanner() {
	const banner = 'https://cdn.crispedge.com/fcc62a.png'
	return (
		<div className="w-full h-24">
			<img
				src={banner}
				className="w-full h-full object-cover rounded-t-lg"
			/>
		</div>
	)
}
