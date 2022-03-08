import 'jest'
import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import app from '../../api/app'
import logger from '../../api/utils/logger'

// Disable all logs
logger.silent = true

const createUserPath = '/api/v1/users'
describe('/user endpoint', () => {
  it('can create user', async () => {
    await request(app)
      .post(createUserPath)
      .send({
        name: 'Joe Freeman',
        email: 'test@ecommsupport.com',
        password: '!@QWDF'
      })
      .set('Accept', 'application/json')
      .expect((res: request.Response) => {
        // eslint-disable-next-line no-console
        res.body.name = 'Joe Freeman'
      })
      .expect(StatusCodes.CREATED)
    //   .end(async (_, response) => {
    //       if(response.body?._id) {
    //         await userService.deleteUserById(response.body._id)
    //       }
    //   })
  })
  it('can validate email', async () => {
    await request(app)
      .post(createUserPath)
      .send({
        name: 'Joe Freeman',
        email: 'jjandycom',
        password: '!@QWDF'
      })
      .set('Accept', 'application/json')
      .expect(StatusCodes.BAD_REQUEST)
  })
})
