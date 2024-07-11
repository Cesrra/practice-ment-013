interface InputFieldProps {
	label: string
	type: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	className?: string
}
export default function InputField({
	label,
	type,
	value,
	onChange,
	placeholder,
	className,
}: InputFieldProps) {
	return (
		<label className="flex text-[#8c8e95]  flex-col text-[10px] font-extrabold gap-1 mt-4">
			{label}
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`h-9 w-96 pl-4 bg-[#323338] border-2 border-[#2b2c31] rounded-sm ${className}`}
				required
				aria-label={label}
			/>
		</label>
	)
}
