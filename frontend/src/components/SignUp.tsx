
export default function SignUp() {
    return(
        <section>
            <h1>Create Account!</h1>
			<form>
                <label htmlFor="">Email</label>
				<input
					type="email"
					placeholder="your email"
				/>
                <label htmlFor="">Username</label>
				<input
					type="text"
					placeholder="your username"
				/>
                <label htmlFor="">Password</label>
                <input
					type="password"
					placeholder="password"
				/>
                <label htmlFor="">Reapeat yor password</label>
                <input
					type="password"
				/>
				<button type="submit">Sign Up</button>
			</form>
			<p>
			<a>Do you already have an account?</a>
			</p>
        </section>
    )
}