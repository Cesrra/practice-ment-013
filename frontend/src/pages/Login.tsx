export default function Login() {
	return (
		<section>
			<h1>Welcome back!</h1>
			<p>We're so excited to see you again!</p>
			<form>
				<input
					type="email"
					placeholder="chuck-norris@gmail.com"
				/>
				<input
					type="password"
					placeholder="password"
				/>
				<a>Forgot your password?</a>
				<button type="submit">Login</button>
			</form>
			<p>
				Need an account? <a>Register</a>
			</p>
		</section>
	)
}
