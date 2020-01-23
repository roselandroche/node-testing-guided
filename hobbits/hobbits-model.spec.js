const db = require("../data/config")
const hobbitsModel = require("./hobbits-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("hobbits model", () => {
    test("findById", async () => {
        const res = await hobbitsModel.findById(1)
        expect(res.name).toBe('sam')
    })
    test("insert", async () => {
        await hobbitsModel.insert({ name: 'bilbo' })
        const hobbits = await db('hobbits').select()
        expect(hobbits).toHaveLength(5)
    })
})