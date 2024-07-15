export default function UserBanner({ image }: { image: string }) {
	return (
		<div className="w-full h-24">
			<img
				src={image}
				className="w-full h-full object-cover rounded-t-lg"
			/>
		</div>
	)
}
