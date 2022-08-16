// const User = require('../models/user');
// const PadelField = require('../models/PadelField');
const Reviews = require('../models/Reviews')

// A modo de prueba!!

async function getReviews() {
  try {
    const reviews = await Reviews.find({ isActive: true })
    return reviews
  } catch (e) {
    return e
  }
}

async function deleteReviewById(reviewId) {
  try {
    const review = await Reviews.findByIdAndUpdate(reviewId, {
      isActive: false
    })
    return review
  } catch (e) {
    return e
  }
}

module.exports = {
  getReviews,
  deleteReviewById
}
