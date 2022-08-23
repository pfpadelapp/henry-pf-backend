'use strict'

const { Router } = require('express')
// Importar todos los routers;
const field = require('./field/index')
const owner = require('./owner/index')
const user = require('./user/index')
const booking = require('./booking/index')
const reviews = require('./reviews/index')
const payment = require('./payment/index')
const admin = require('./admin/index')
const roles = require('./roles/index')

const router = Router()

// Configurar los routers
router.use('/field', field)
router.use('/owner', owner)
router.use('/user', user)
router.use('/booking', booking)
router.use('/reviews', reviews)
router.use('/payment', payment)
router.use('/admin', admin)
router.use('/roles', roles)

module.exports = router
