import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET
const expiresIn = process.env.JWT_SECRET_EXP

class JWTService {

  sign(id: number): Promise<string> {
    const payload = { id }
    return new Promise((res, rej) => {
      jwt.sign(payload, secret, { expiresIn }, (err, token: string) => {
        if (err) { rej(err) }
        return res(token)
      })

    })
  }

  verify(token: string): string {

    const { id } = jwt.verify(token, secret)
    return id

  }

}

export default JWTService