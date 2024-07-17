import { CrossCircledIcon } from '@radix-ui/react-icons'

export default function EscapeLink() {
	return (
		<div className="grow pt-14 bg-[#313338]">
			<a
				href="/"
				className="flex flex-col w-max items-center"
			>
				<CrossCircledIcon className="size-9 text-[#b1b6be]" />
				<p className="text-[#b1b6be] text-xs mt-1 font-semibold">ESC</p>
			</a>
		</div>
	)
}
