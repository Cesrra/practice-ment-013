import Button from '../components/Button'
import AccountProfileCard from '../components/settings/my-account/AccountProfileCard'
import MyAccountOption from '../components/settings/my-account/MyAccountOption'

export default function MyAccount() {
	return (
		<section className="pt-14 pb-20 px-10 w-min bg-[#313338] overflow-y-auto no-scrollbar">
			<h2 className="text-xl font-medium text-white mb-5">Mi cuenta</h2>
			<AccountProfileCard />
			<h2 className="mt-8 text-xl font-medium text-white mb-5">
				Contraseña y autenticación
			</h2>
			<Button className="mb-7">Cambiar contraseña</Button>
			<MyAccountOption
				title="Aplicación de autenticación"
				description="Protege tu cuenta de Discord con una capa extra de seguridad. Una vez
				configurada, tendrás que introducir la contraseña y completar un paso
				adicional para iniciar sesión."
				optionButtons={[{ text: 'Habilitar aplicación de autenticación' }]}
			/>
			<MyAccountOption
				title="Claves de seguridad"
				description="Añade una capa adicional de protección a tu cuenta con una clave de
				seguridad."
				optionButtons={[{ text: 'Registrar una clave de seguridad' }]}
			/>
			<MyAccountOption
				title="Supresión de cuenta"
				description="Puedes recuperar la cuenta en cualquier momento después de deshabilitarla."
				optionButtons={[
					{ variant: 'destructive', text: 'Deshabilitar cuenta' },
					{ variant: 'outline destructive', text: 'Eliminar cuenta' },
				]}
			/>
		</section>
	)
}
