import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

/**
 * Middleware accepting an array of validation constraints
 * performs the validation checks and rejects or forwards the request
 */
export const validate = (validations) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map((validation) => validation.run(req)))

		const errors = validationResult(req)
		if (errors.isEmpty()) {
			return next()
		}

		res.status(400).json({ error: errors.array() }).end()
	}
}
