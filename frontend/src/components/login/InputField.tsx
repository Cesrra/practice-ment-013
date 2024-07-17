import { InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	className?: string
}
export default function InputField({
	label,
	className,
	...props
}: InputFieldProps) {
	return (
		<label className="flex text-[#b3b8bf]  flex-col text-xs font-bold gap-2 uppercase">
			{label}
			<input
				className={`text-[#d6d8db] text-base font-normal h-10 p-[10px] bg-[#1e1f22] placeholder:text-[#85878a] rounded focus:outline-0 ${className}`}
				required
				aria-label={label}
				{...props}
			/>
		</label>
	)
}
