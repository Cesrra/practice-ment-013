import Button from '../login/Button'
import AccountProfileCard from './AccountProfileCard'

export default function MyAccount() {
	return (
		<div className="bg-[#313338] overflow-y-auto no-scrollbar">
			<section className="pt-14 pb-20 px-10 w-min">
				<h2 className="text-xl font-medium text-white mb-5">Mi cuenta</h2>
				<AccountProfileCard />
				<h2 className="mt-8 text-xl font-medium text-white mb-5">
					Contraseña y autenticación
				</h2>
				<Button className="h-8 mb-7">Cambiar contraseña</Button>
				<h3 className="text-xs uppercase font-semibold text-[#b5bac1] mb-2">
					Aplicación de autenticación
				</h3>
				<p className="mb-5 text-[#aaafb6] text-sm">
					Protege tu cuenta de Discord con una capa extra de seguridad. Una vez
					configurada, tendrás que introducir la contraseña y completar un paso
					adicional para iniciar sesión.
				</p>
				<Button className="h-8 mb-7">Habilitar aplicación de autenticación</Button>
				<h3 className="text-xs uppercase font-semibold text-[#b5bac1] mb-2">
					Claves de seguridad
				</h3>
				<p className="mb-5 text-[#aaafb6] text-sm">
					Añade una capa adicional de protección a tu cuenta con una clave de
					seguridad.
				</p>
				<Button className="h-8 mb-7">Registrar una clave de seguridad</Button>
				<h3 className="text-xs uppercase font-semibold text-[#b5bac1] mb-2">
					Supresión de cuenta
				</h3>
				<p className="mb-5 text-[#aaafb6] text-sm">
					Puedes recuperar la cuenta en cualquier momento después de deshabilitarla.
				</p>
				<div className="flex gap-4">
					<Button className="h-8 bg-[#da363c] hover:bg-[#a12828] active:bg-[#8f2022]">
						Deshabilitar cuenta
					</Button>
					<Button className="h-8 bg-transparent border border-red-600 hover:bg-[#da363c] active:bg-[#bb3032]">
						Eliminar cuenta
					</Button>
				</div>
			</section>
		</div>
	)
}
