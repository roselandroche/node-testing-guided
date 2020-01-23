const supertest = require('supertest')
const server = require('./index')

test("welcome route", async () => {
    const res = await supertest(server).get('/')
    // correct status code?
    expect(res.status).toBe(200)
    // correct data format?
    expect(res.type).toBe('application/json')
    // correct data?
    expect(res.body.message).toBe('Welcome')
})