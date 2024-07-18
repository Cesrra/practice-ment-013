const BASE_URL = import.meta.env.VITE_API

export async function login({
	email,
	password,
}: {
	email: string
	password: string
}) {
	const res = await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
		credentials: 'include',
	})
	if (!res.ok) {
		const errorData = await res.json()
		throw new Error(errorData.message)
	}

	const data = await res.json()
	return data
}
