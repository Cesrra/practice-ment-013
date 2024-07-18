interface LinkTextProps {
	children: React.ReactNode
	href?: string
	className?: string
}

export default function LinkText({ children, href, className }: LinkTextProps) {
	return (
		<a
			href={href}
			className={`cursor-pointer text-xs text-[#05a8fc] font-medium ${className}`}
		>
			{children}
		</a>
	)
}
