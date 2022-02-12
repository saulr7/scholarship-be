import express from "express"
import controller from "./schoolarshipController"
import { validate } from "../../middlewares/validation.handler"
import { validateJWT } from "../../middlewares/jwt.validator"

export default express
  .Router()
  .get("/", validateJWT, controller.allScholarship)
  .get("/:id", validateJWT, controller.getScholarshipById)
  .delete("/:id", validateJWT, controller.deleteScholarship)
  .post("/", validateJWT, validateJWT, validate(controller.validateNewScholarship()), controller.newScholarship)
  .put("/", validateJWT, validate(controller.validateNewScholarship()), controller.updateScholarship)
