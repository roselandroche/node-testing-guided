const supertest = require('supertest')
const server = require('./index')
const db = require('./data/config')

beforeEach(async () => {
    await db.seed.run()
})

test("welcome route", async () => {
    const res = await supertest(server).get('/')
    // correct status code?
    expect(res.status).toBe(200)
    // correct data format?
    expect(res.type).toBe('application/json')
    // correct data?
    expect(res.body.message).toBe('Welcome')
})

test("create hobbit route", async () => {
    const res = await supertest(server)
        .post('/hobbits')
        .send({ name: 'gaffer' })
    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body).toEqual({ id: 5, name: 'gaffer' })
})

test("get hobbit list", async () => {
    const res = await supertest(server)
        .get('/hobbits')
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0].name).toBe('sam')
    expect(res.body[0].id).toBe(1)
})