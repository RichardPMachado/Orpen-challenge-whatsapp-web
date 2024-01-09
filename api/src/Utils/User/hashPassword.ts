import bcrypt from 'bcrypt'

const saltRounds = 10

export async function hashPassword(pass: string) {
  return bcrypt.hashSync(pass, saltRounds)
}

export async function compareHash(
  password: string,
  hashPassed: string,
): Promise<boolean> {
  // _RPM
  return bcrypt.compareSync(password, hashPassed)
}