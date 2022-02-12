import { Request, Response } from "express"
import ScholarshipModel from "../../../../shared/models/ScholarshipModel"
import ScholashipService from "../../services/scholarshipService"
import { body } from "express-validator"

export class ScholarshipController {

  async newScholarship(req: Request, res: Response, next: any) {
    try {
      let newScholarship: ScholarshipModel = { ...req.body }
      newScholarship.amount = parseFloat(newScholarship.amount + "") || 0

      const scholarshipCreated = await new ScholashipService().create(newScholarship)

      res.status(201).json(scholarshipCreated)
    } catch (error) {
      next(new Error(error))
    }
  }

  async allScholarship(req: Request, res: Response, next: any) {
    try {

      const scholarships = await new ScholashipService().getAll()

      res.status(200).json(scholarships)
    } catch (error) {
      next(new Error(error))
    }
  }

  async getScholarshipById(req: Request, res: Response, next: any) {
    try {
      const { id } = req.params
      const idInt = +id || 0
      const scholarship = await new ScholashipService().getById(idInt)

      res.status(200).json(scholarship)
    } catch (error) {
      next(new Error(error))
    }
  }

  async deleteScholarship(req: Request, res: Response, next: any) {
    try {
      const { id } = req.params
      const idInt = +id || 0
      let newScholarship: ScholarshipModel = { id: idInt } as ScholarshipModel

      const scholarshipCreated = await new ScholashipService().delete(newScholarship)

      res.status(200).json(scholarshipCreated)
    } catch (error) {
      next(new Error(error))
    }
  }


  async updateScholarship(req: Request, res: Response, next: any) {
    try {
      let newScholarship: ScholarshipModel = { ...req.body }
      newScholarship.amount = parseFloat(newScholarship.amount + "") || 0

      const scholarshipCreated = await new ScholashipService().update(newScholarship)

      res.status(202).json(scholarshipCreated)
    } catch (error) {
      next(new Error(error))
    }
  }


  validateNewScholarship() {
    var validations = [
      body("title").not().isEmpty().withMessage("Invalid title"),
      body("foundedBy").not().isEmpty().withMessage("Invalid founder"),
      body("description").not().isEmpty().withMessage("Invalid description"),
      body("deadline").notEmpty().withMessage("Invalid deadline"),
      body("amount").isNumeric().withMessage("Invalid amount"),
    ]
    return validations
  }

}

export default new ScholarshipController()