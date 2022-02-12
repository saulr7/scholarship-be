import UserModel from "../../../shared/models/UserModel"
import knex from "../../common/database"
import IService from "./IService"

export default class UserService implements IService<UserModel> {
	validate(model: UserModel): Promise<boolean> {
		throw new Error("Method not implemented.")
	}
	create(model: UserModel): Promise<UserModel> {
		throw new Error("Method not implemented.")
	}
	update(model: UserModel): Promise<UserModel> {
		throw new Error("Method not implemented.")
	}
	public async delete(model: UserModel): Promise<UserModel> {
		throw new Error("Method not implemented.")
	}

	public async getById(id: number): Promise<UserModel> {
		try {
			var query = knex<UserModel>("users")
				.where("id", id)
				.first()
				.select()
			const user: UserModel = await query

			return user
		} catch (error) {
			return Promise.reject(error)
		}
	}

	public async getByEmail(emailAddress: string): Promise<UserModel> {
		try {
			var query = knex<UserModel>("user")
				.where("emailAddress", emailAddress)
				.first()
				.select()
			const user: UserModel = await query

			return user
		} catch (error) {
			return Promise.reject(error)
		}
	}
}
