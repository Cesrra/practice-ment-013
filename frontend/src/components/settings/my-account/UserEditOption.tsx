import clsx from 'clsx'
import Button from '../../Button'

export default function UserEditOption({
	title,
	children,
	canDelete,
	className,
}: {
	title: string
	children: React.ReactNode
	canDelete?: boolean
	className?: string
}) {
	return (
		<div className={clsx('flex justify-between', className)}>
			<div>
				<h3 className="text-xs uppercase font-semibold text-[#b5bac1]">{title}</h3>
				<p className="text-[#f2f3f5]">{children}</p>
			</div>
			<div>
				{canDelete && <Button variant="ghost">Eliminar</Button>}
				<Button variant="secondary">Editar</Button>
			</div>
		</div>
	)
}