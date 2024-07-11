import LinkText from '../components/login/LinkText'
import LoginForm from '../components/login/LoginForm'

export default function LoginPage() {
	return (
		<main className="fixed inset-0 z-50 flex h-full justify-center bg-[#2b2c31]">
			<section className="bg-[#373940] flex flex-col items-center w-fit h-fit my-auto p-6 gap-2 rounded-sm">
				<h1 className="text-white font-semibold text-xl">Welcome back!</h1>
				<p className="text-[#93959c] text-xs font-medium">
					We're so excited to see you again!
				</p>
				<LoginForm />
				<p className="text-[#65676e] text-[10px] w-full">
					Need an account? <LinkText>Register</LinkText>
				</p>
			</section>
		</main>
	)
}
