const { Schema, model } = require('mongoose')

const bookingSchema = new Schema(
  {
    idUser: {
      type: String,
      require: true
    },
    idField: {
      type: String,
      require: true
    },
    date: {
      type: Date,
      require: true
    },
    name: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number
    },
    isActive: Boolean
  },
  {
    timestamps: true,
    versionKey: false
  }
)

bookingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

const Booking = model('booking', bookingSchema)

module.exports = Booking
