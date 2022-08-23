const User = require('../models/User');
const PadelField = require('../models/PadelField');
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

async function deleteReviewById(reviewId, fieldId, userId) {
  try {
    const review = await Reviews.findByIdAndUpdate(reviewId, {
      isActive: false
    })

    await PadelField.findByIdAndUpdate(fieldId, {
      $pull: {
        review: {
          reviewId: review.id
        }
      }
    })

    await User.findByIdAndUpdate(userId, {
      $pull: {
        review : {
          reviewId: review.id
        }
      }
    })
    return review.save()
  } catch (e) {
    return e
  }
}

module.exports = {
  getReviews,
  deleteReviewById
}
