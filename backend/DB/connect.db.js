import mongoose from 'mongoose'

const connectDB = async () => {
	const { CONN, cloud_db_conn, NODE_ENV } = process.env
	const conString = NODE_ENV === 'production' ? cloud_db_conn : CONN

	try {
		await mongoose.connect(conString)
		console.log('Connected to DB')
	} catch (error) {
		console.error(error.message)
	}
}

export default connectDB
