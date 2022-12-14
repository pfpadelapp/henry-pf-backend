const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = new Schema(
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
    password: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      default: 'Admin'
    },
    username: {
      type: String,
      trim: true
    },
    isActive: Boolean
  },
  {
    timestamps: true,
    versionKey: false
  }
)

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

adminSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const Admin = model('admin', adminSchema)

module.exports = Admin
