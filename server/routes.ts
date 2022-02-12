import { Application } from "express"
import authRouter from "./api/controllers/auth/router"

export default function routes(app: Application): void {
	app.use("/auth", authRouter)
}
