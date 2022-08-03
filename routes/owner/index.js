'use strict'
const {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwnerById,
  // getAllOwnersSort
} = require('../../controllers/owner')
const Owner = require('../../models/Owner')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (_, reply) {
    const owners = await getAllOwners()
    return reply.send(owners)
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
      return reply.send(newOwner)
    } catch (e) {
      return e
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

  //  ruta de ordenamiento
  fastify.get('/sort', async function (request, reply) {
    try {

      const result =  await Owner.find({ isActive: true }).sort({ name: -1 })

      // if(data) {
      //   return reply.send(data)
      // }
      // // console.log(data)
      //  return err
      
      // console.log(owners)
      // return reply.send(owners)
      return reply.send(result)
      
    } catch (error) {
      return error
    }
  })
}



