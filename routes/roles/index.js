'use strict'
const { Router } = require('express')
const router = Router()

const { rolUser, rolOwner } =  require('../../controllers/roles');


router.get('/player', async function (request, reply) {
    try {
      const usersRol = await rolUser()
      return reply.send(usersRol)
    } catch (e) {
      return(e)
    }
  })


router.get('/owner', async function (request, reply) {
    try{
        const ownerRol = await rolOwner()
        return reply.send(ownerRol)
    }catch(e){
        return e
    }
})

module.exports = router