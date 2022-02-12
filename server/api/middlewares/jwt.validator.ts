import { Request, Response, NextFunction } from "express"
import JWTService from "../services/jwtService"


/**
 * Middleware to validate jwt
 * performs the validation checks and rejects or forwards the request
 */
export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {

  try {

    const token = req.header("x-token") || ""
    new JWTService().verify(token)
    return next()

  } catch (error) {
    return res.status(401).json({ ok: false, msg: "invalid token" });
  }

}
