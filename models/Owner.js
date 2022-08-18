const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const ownerSchema = new Schema(
  {
    name: {
      type: String,

      trim: true
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true
    },
    contact: {
      type: Number,
      unique: true,
      require: true
    },
    password: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      default: 'owner'
    },
    username: {
      type: String,
      trim: true
    },
    padelFields: [],
    isActive: Boolean
  },
  {
    timestamps: true,
    versionKey: false
  }
)

ownerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

ownerSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const Owner = model('owner', ownerSchema)

module.exports = Owner
