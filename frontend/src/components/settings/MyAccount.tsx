import Button from '../login/Button'
import AccountProfileCard from './AccountProfileCard'

export default function MyAccount() {
	return (
		<div>
			<section>
				<h2>Mi cuenta</h2>
				<AccountProfileCard />
				<h2>Contraseña y autenticación</h2>
				<Button>Cambiar contraseña</Button>
				<h3>Aplicación de autenticación</h3>
				<p>
					Protege tu cuenta de Discord con una capa extra de seguridad. Una vez
					configurada, tendrás que introducir la contraseña y completar un paso
					adicional para iniciar sesión.
				</p>
				<Button>Habilitar aplicación de autenticación</Button>
				<h3>Claves de seguridad</h3>
				<p>
					Añade una capa adicional de protección a tu cuenta con una clave de
					seguridad.
				</p>
				<Button>Registrar una clave de seguridad</Button>
				<h3>Supresión de cuenta</h3>
				<p>
					Puedes recuperar la cuenta en cualquier momento después de deshabilitarla.
				</p>
				<div>
					<Button>Deshabilitar cuenta</Button>
					<Button>Eliminar cuenta</Button>
				</div>
			</section>
			<button>X</button>
		</div>
	)
}
