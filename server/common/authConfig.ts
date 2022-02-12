import UserModel from "../../shared/models/UserModel"
import { Strategy, ExtractJwt } from "passport-jwt"
import UserService from "../api/services/userService"

require("dotenv").config()
const secret = process.env.JWT_SECRET || "def_secret"

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret
}

module.exports = (passport) => {
	passport.use(
		new Strategy(opts, async (payload, done) => {
			try {
				let user = await new UserService().getById(payload.id)

				if (user) {
					return done(null, user)
				}
				return done(null, false)
			} catch (error) {
				return done(null, false)
			}
		})
	)
}
