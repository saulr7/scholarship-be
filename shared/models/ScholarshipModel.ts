import IModel from "./IModel"

export default class ScholarshipModel implements IModel {
  id: number
  title: string
  foundedBy: string
  description: string
  deadline: string
  amount: number
  picture: string
  createdAt: Date
  updatedAt: Date
}
