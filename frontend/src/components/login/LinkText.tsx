interface LinkTextProps {
	children: React.ReactNode
	href?: string
	className?: string
}

export default function LinkText({ children, href, className }: LinkTextProps) {
	return (
		<a
			href={href}
			className={`cursor-pointer text-[10px] font-extrabold text-[#7389d9] ${className}`}
		>
			{children}
		</a>
	)
}
