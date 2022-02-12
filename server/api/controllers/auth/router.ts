import express from "express"
import controller from "./authController"
import { validate } from "../../middlewares/validation.handler"

export default express
	.Router()
	.post("/register", validate(controller.validateRegister()), controller.register)
	.post("/login", validate(controller.validateLogin()), controller.login)
