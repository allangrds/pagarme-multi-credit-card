import request from 'supertest'

import { app } from '../../src/start/app'

describe('Route testing', () => {
  it('Should return an http 200 and a "message" property (route: GET /)', async () => {
    const res = await request(app).get('/')

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
})
