const BASE_URL = import.meta.env.VITE_API_ALT

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
			email: email,
			password: password,
		}),
	})
	const data = await res.json()
	if (!res.ok) {
		throw new Error(data.message)
	}
	return data
}
