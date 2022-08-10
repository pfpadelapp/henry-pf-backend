'use strict'
const {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwnerById
} = require('../../controllers/owner')
const { pagination } = require('../../utils/pagination')
const bcrypt = require('bcrypt')
require('dotenv')
const owner = require('../../models/Owner')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    try {
      const { page, limit } = request.query
      const owners = await getAllOwners()
      const result = pagination(owners, page, limit)
      return reply.send(result)
    } catch (e) {
      return reply.lo.error(e)
    }
  })

  fastify.get('/:ownerId', async function (request, reply) {
    const { ownerId } = request.params
    try {
      const owner = await getOwnerById(ownerId)
      return reply.send(owner)
    } catch (e) {
      return e
    }
  })

  fastify.post('/', async function (request, reply) {
    const { name, contact, email, username, password } = request.body
    try {
      const newOwner = await createOwner(
        name,
        contact,
        email,
        username,
        password
      )
      const token = fastify.jwt.sign({ newOwner })
      return reply.send({ newOwner, token })
    } catch (e) {
      return e
    }
  })

  fastify.post('/login', function (request, reply) {
    const { email, password } = request.body
    try {
      owner.findOne({ email }).then((owner) => {
        if (!owner) return reply.status(400).send({ msg: 'Owner not exist' })
        bcrypt.compare(password, owner.password, (err, data) => {
          if (err) throw err
          if (data) {
            const ownerId = data.id
            const accessToken = fastify.jwt.sign({ ownerId })
            return reply.status(200).send({ msg: 'Login success', accessToken })
          } else {
            return reply.status(401).send({ msg: 'Invalid credencial' })
          }
        })
      })
    } catch (err) {
      reply.send(err, 'este errawr')
    }
  })

  fastify.delete('/:ownerId', async function (request, reply) {
    const { ownerId } = request.params
    try {
      const deletedOwner = await deleteOwnerById(ownerId)
      return reply.send(deletedOwner)
    } catch (e) {
      return e
    }
  })
}
