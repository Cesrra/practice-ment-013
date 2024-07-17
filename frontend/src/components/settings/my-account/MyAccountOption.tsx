import Button, { ButtonVariant } from '../../Button'

interface OptionButton {
	variant?: ButtonVariant
	text?: string
	onClick?: () => void
}

interface OptionProps {
	title?: string
	description?: string
	optionButtons?: OptionButton[]
}

export default function MyAccountOption({
	title,
	description,
	optionButtons,
}: OptionProps) {
	return (
		<>
			<h3 className="text-xs uppercase font-semibold text-[#b5bac1] mb-2">
				{title}
			</h3>
			<p className="mb-5 text-[#aaafb6] text-sm">{description}</p>
			<div className="flex gap-4">
				{optionButtons?.map((button, index) => {
					return (
						<Button
							key={index}
							onClick={button.onClick}
							variant={button.variant}
							className="mb-7"
						>
							{button.text}
						</Button>
					)
				})}
			</div>
		</>
	)
}
