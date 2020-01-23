const db = require("../data/config")

function list() {
  return db("hobbits")
}

function findById(id) {
  return db('hobbits').where({ id }).first()
}

async function insert(hobbit) {
  const id = await db("hobbits").insert(hobbit)
  return findById(id[0])
}

function update(id, changes) {
  return null
}

function remove(id) {
  return null
}

module.exports = {
  list,
  findById,
  insert,
  update,
  remove,
}