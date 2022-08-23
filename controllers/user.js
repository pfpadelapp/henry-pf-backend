const User = require('../models/User')
const bcrypt = require('bcrypt')

async function getAllUsers() {
  try {
    const users = await User.find()
    return users
  } catch (e) {
    return e
  }
}

async function getUserById(userId) {
  console.log(typeof User)
  try {
    const user = await User.findById(userId)
    return user
  } catch (e) {
    return e
  }
}


async function createUser(name, lastName, email, password, user_metadata) {
  console.log(name, lastName, email, password, user_metadata)
  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      password,
      user_metadata
    })
    return newUser
  } catch (e) {
    return e
  }
}

async function deleteUserById(userId) {
  try {
    const deletedUser = await User.findByIdAndUpdate(
      userId,
      {
        'user_metadata.isActive': false
      },
      { new: true }
    )

    return deletedUser
  } catch (e) {
    return e
  }
}




async function updateUser(userId) {
  try {

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      // { 'user_metadata_telephone': telephone }, 
      { 
       'user_metadata.telephone': "999999999"
      },
      // {name},
      { new: true }
    )
    return updatedUser

  } catch (e) {
    return e
  }
}

async function ableUser(userId) {
  try {
    const ableUser = await User.findByIdAndUpdate(
      userId,
      { 'user_metadata.isActive': true },
      { new: true }
    )
    return ableUser
  } catch (e) {
    return e
  }
}

async function ableAdmin(userId) {
  try {
    const ableAdmin = await User.findByIdAndUpdate(
      userId,
      { 'user_metadata.isAdmin': true },
      { new: true }
    )
    return ableAdmin
  } catch (e) {
    return e
  }
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  deleteUserById,
  updateUser,
  ableUser,
  ableAdmin
}
