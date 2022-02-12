import bcrypt from "bcryptjs"

export default class PasswordService {
	public async generatePasswordHash(rawPassword: string): Promise<string> {
		return await bcrypt.hash(rawPassword, 10)
	}

	public async validatePassword(passwordRaw: string, passwordHash: string): Promise<boolean> {
		return await bcrypt.compare(passwordRaw, passwordHash)
	}
}
