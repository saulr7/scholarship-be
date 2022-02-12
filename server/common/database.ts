import knexx from "knex"
import knexfile from "../../knexfile"
const knex: knexx<any, unknown[]> = knexx(knexfile)
export default knex
