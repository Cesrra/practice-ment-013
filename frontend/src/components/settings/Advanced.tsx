export default function Advanced() {
	return (
		<div>
			<div>
				<h2>Avanzado</h2>
				<h3>Modo desarrollador</h3>
				<p>
					El modo desarrollador muestra elementos del menú contextual que resultan
					útiles para personas que programan aplicaciones con la{' '}
				</p>
			</div>
			<MySwitch />
		</div>
	)
}

import * as Switch from '@radix-ui/react-switch'

function MySwitch() {
	return (
		<Switch.Root
			className="w-[42px] h-6 bg-[#80848e] rounded-full relative data-[state=checked]:bg-[#22a559] outline-none cursor-default"
			id="airplane-mode"
		>
			<Switch.Thumb className="block size-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
		</Switch.Root>
	)
}
