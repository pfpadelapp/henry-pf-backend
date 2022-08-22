'use strict'
const { Router } = require('express')
const router = Router()

const {
  getReviews,
  deleteReviewById
} = require('../../controllers/reviews')

// A modo de prueba!!

router.get('/', async function (request, reply) {
  try {
    const reviews = await getReviews()
    return reply.send(reviews)
  } catch (e) {
    return e
  }
})

router.delete('/:reviewId/:fieldId/:userId', async function (request, reply) {
  const { reviewId, fieldId, userId } = request.params
  try {
    const deletedReview = await deleteReviewById(reviewId, fieldId, userId)
    return reply.send(deletedReview)
  } catch (e) {
    return e
  }
})

// router.post('/:id/reviews', async function(request, reply) {
//     const {fieldId} = request.params
//     try {
//         const { rating, review } = request.body

//         const newReviews = await registerReviews(fieldId, rating, review)
//         return reply.send(newReviews)
//     }catch(e) {
//         return e
//     }
// })

module.exports = router
