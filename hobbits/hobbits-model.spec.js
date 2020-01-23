const db = require("../data/config")
const hobbitsModel = require("./hobbits-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("hobbits model", () => {
    test("list", async () => {
        const res = await hobbitsModel.list()
        expect(res).toHaveLength(4)
    })

    test("findById", async () => {
        const res = await hobbitsModel.findById(1)
        expect(res.name).toBe('sam')
    })

    test("insert", async () => {
        await hobbitsModel.insert({ name: 'bilbo' })
        const hobbits = await db('hobbits').select()
        expect(hobbits).toHaveLength(5)
    })

    test("update", async () => {
        await hobbitsModel.update(1, {name: 'samwise'})
        const updatedHobbit = await hobbitsModel.findById(1)
        expect(updatedHobbit.name).toBe('samwise')
    })

    test("remove", async () => {
        await hobbitsModel.remove(1)
        const hobbits = await hobbitsModel.list()
        expect(hobbits).toHaveLength(3)
    })
})