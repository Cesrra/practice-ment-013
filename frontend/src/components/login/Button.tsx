import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...props }: ButtonProps) {
	return (
		<button
			className="bg-[#5864f2] text-white font-medium h-10 px-3 rounded-sm hover:bg-[#4751c4] active:bg-[#3d44a5] text-sm"
			{...props}
		/>
	)
}
