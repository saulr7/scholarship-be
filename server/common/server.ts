import express from "express"
import { Application } from "express"
import path from "path"
import bodyParser from "body-parser"
import http from "http"
import os from "os"
import cookieParser from "cookie-parser"
import cors from "cors"
import errorHandler from "../api/middlewares/error.handler"
import UserModel from "../../shared/models/UserModel"
import passport from "passport"
import logger from "./logger"

const app = express()

export default class ExpressServer {
	constructor() {
		const root = path.normalize(__dirname + "/../..")
		app.set("appPath", root + "client")

		//initialize authentication
		app.use(passport.initialize())
		require("./authConfig")(passport)

		app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || "100kb" }))
		app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || "100kb" }))
		app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || "100kb" }))
		app.use(cookieParser(process.env.SESSION_SECRET))
		app.use(express.static(`${root}/public`))
		app.use(cors())

		app.use(logger)
	}

	router(routes: (app: Application) => void): ExpressServer {
		app.enable("case sensitive routing")
		app.enable("strict routing")
		routes(app)
		app.use(errorHandler)
		return this
	}

	listen(p: string | number = process.env.PORT): Application {
		const welcome = port => () =>
			console.log(
				`up and running in ${process.env.NODE_ENV || "development"} @: ${os.hostname()} on port: ${port}}`
			)
		http.createServer(app).listen(p, welcome(p))
		return app
	}
}

declare module "express-serve-static-core" {
	interface Request {
		user: UserModel
	}
}
