import 'jest'
import { hashPassword, comparePasswords } from '../../api/utils/cipher'
import logger from '../../api/utils/logger'

describe('Cipher utility', () => {
  beforeAll(() => {
    logger.silent = true
  })
  it('should generate hashed text from input', async () => {
    const hashedPassword = hashPassword('password')
    console.log(hashedPassword)
    expect(typeof hashedPassword).toEqual('string')
  })
  it('should succed in comparing hashed and original password', async () => {
    const originalPassword = 'passwordOriginal'
    const hashedPassword = hashPassword(originalPassword)
    expect(comparePasswords(originalPassword, hashedPassword)).toEqual(true)
  })
})
