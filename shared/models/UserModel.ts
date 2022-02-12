import IModel from "./IModel"

export default class UserModel implements IModel {
	id: number
	emailAddress: string
	userName: string
	createdAt: Date
	updatedAt: Date
	userPassword: string
}
