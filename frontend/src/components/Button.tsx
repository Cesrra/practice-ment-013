import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'destructive'
	| 'outline destructive'
	| 'ghost'
	| 'top aligned'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	className?: string
}

export default function Button({
	variant = 'primary',
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(
				'font-medium rounded-sm text-sm',
				{
					'bg-[#5864f2] hover:bg-[#4751c4] active:bg-[#3d44a5] text-white px-3  h-8':
						variant === 'primary',
					'bg-[#4E5058] hover:bg-[#6d6f78] text-white px-3 h-8':
						variant === 'secondary',
					'bg-[#da363c] hover:bg-[#a12828] active:bg-[#8f2022] text-white px-3 h-8':
						variant === 'destructive',
					'bg-transparent border border-red-600 hover:bg-[#da363c] active:bg-[#bb3032] text-white px-3 h-8':
						variant === 'outline destructive',
					'bg-transparent  hover:underline text-white px-3 h-8': variant === 'ghost',
					'hover:underline align-top text-[#05a8fc]': variant === 'top aligned',
				},
				className
			)}
			{...props}
		/>
	)
}
