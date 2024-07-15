import Button, { ButtonVariant } from './Button'
interface TogglerButtonProps {
	variant?: ButtonVariant
	text: string
	state: boolean
	setState: (state: boolean) => void
}

export default function TogglerButton({
	variant,
	text,
	state,
	setState,
}: TogglerButtonProps) {
	return (
		<Button
			variant={variant}
			onClick={() => setState(!state)}
		>
			{text}
		</Button>
	)
}
