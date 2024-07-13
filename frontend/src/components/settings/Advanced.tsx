import MySwitch from './MySwitch'

export default function Advanced() {
	return (
		<div className="pt-14 pb-20 px-10 w-min bg-[#313338] overflow-y-auto no-scrollbar">
			<div className="w-[660px]">
				<h2 className="text-xl font-medium text-white mb-5">Avanzado</h2>
				<div className="flex justify-between">
					<h3 className="text-lg text-white mb-5">Modo desarrollador</h3>
					<MySwitch />
				</div>
				<p className="text-[#aaafb6] text-sm">
					El modo desarrollador muestra elementos del menú contextual que resultan
					útiles para personas que programan aplicaciones con la{' '}
					<a
						target="_blank"
						href="https://discord.com/developers/docs/intro"
						className="text-[#05a8fc] hover:underline cursor-pointer"
					>
						API de Discord
					</a>
					.
				</p>
			</div>
		</div>
	)
}
