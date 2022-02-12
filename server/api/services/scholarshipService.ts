import ScholarshipModel from "../../../shared/models/ScholarshipModel"
import IService from "./IService"
import { PrismaClient } from '@prisma/client'

export default class UserService implements IService<ScholarshipModel> {

  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async getAll(): Promise<ScholarshipModel[]> {
    try {
      return await this.prismaClient.scholarship.findMany()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  validate(model: ScholarshipModel): Promise<boolean> {
    throw new Error("Method not implemented.")
  }

  async create(model: ScholarshipModel): Promise<ScholarshipModel> {
    try {
      return await this.prismaClient.scholarship.create({ data: { ...model } })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async update(model: ScholarshipModel): Promise<ScholarshipModel> {
    try {
      return await this.prismaClient.scholarship.update({ where: { id: model.id }, data: { ...model } })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public async delete(model: ScholarshipModel): Promise<ScholarshipModel> {
    try {
      return await this.prismaClient.scholarship.delete({ where: { id: model.id } })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public async getById(id: number): Promise<ScholarshipModel> {
    try {
      return await this.prismaClient.scholarship.findFirst({ where: { id } })

    } catch (error) {
      return Promise.reject(error)
    }
  }


}
