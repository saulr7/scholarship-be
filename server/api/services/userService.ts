import UserModel from "../../../shared/models/UserModel"
import knex from "../../common/database"
import IService from "./IService"
import { PrismaClient } from '@prisma/client'

export default class UserService implements IService<UserModel> {

	private prismaClient: PrismaClient

	constructor() {
		this.prismaClient = new PrismaClient()
	}

	validate(model: UserModel): Promise<boolean> {
		throw new Error("Method not implemented.")
	}
	async create(model: UserModel): Promise<UserModel> {
		try {
			return await this.prismaClient.user.create({ data: { ...model } })
		} catch (error) {
			return Promise.reject(error)
		}
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
			return await this.prismaClient.user.findFirst({ where: { emailAddress } })
		} catch (error) {
			return Promise.reject(error)
		}
	}
}
