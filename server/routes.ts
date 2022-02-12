import { Application } from "express"
import authRouter from "./api/controllers/auth/router"
import scholarshipRouter from "./api/controllers/schoolarship/routes"

export default function routes(app: Application): void {
	app.use("/auth", authRouter)
	app.use("/scholarship", scholarshipRouter)
}
