import knexStringcase from "knex-stringcase"
import knex from "knex"

const dbConfig = {
	client: "pg",
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		port: parseInt(process.env.DB_PORT),
		ssl: "require"
	},
	migrations: {
		directory: "./migrations",
		tableName: "knex_migrations"
	}
}

const options = knexStringcase(dbConfig)
export default options
