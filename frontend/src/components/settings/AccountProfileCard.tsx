import Button from '../login/Button'

export default function AccountProfileCard() {
	return (
		<div>
			<img />
			<div>
				<img />
				<span>[Nombre de usuario]</span>
				<Button>Editar perfil de usuario</Button>
			</div>
			<div>
				<div>
					<div>
						<h3>Mostrar nombre</h3>
						<p>[Nombre]</p>
					</div>
					<Button>Editar</Button>
				</div>
				<div>
					<div>
						<h3>Nombre de usuario</h3>
						<p>[Nombre de usuario]</p>
					</div>
					<Button>Editar</Button>
				</div>
				<div>
					<div>
						<h3>Correo electrónico</h3>
						<p>[Correo electrónico]</p>
						<button>Mostrar</button>
					</div>
					<Button>Editar</Button>
				</div>
				<div>
					<div>
						<h3>Número de teléfono</h3>
						<p>[Número de teléfono]</p>
						<button>Mostrar</button>
					</div>
					<div>
						<Button>Eliminar</Button>
						<Button>Editar</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
