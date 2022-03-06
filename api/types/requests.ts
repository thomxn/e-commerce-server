declare global{
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: UserIdentityToken
    }
  }
}
export interface UserCredentials {
  email: string
  password: string
}

export interface UserIdentityToken {
  _id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}
