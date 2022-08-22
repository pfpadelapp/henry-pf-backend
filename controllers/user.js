const User = require('../models/User')
const bcrypt = require('bcrypt')

async function getAllUsers() {
  try {
    const users = await User.find({ 'user_metadata.isActive': true })
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


async function createUser(nickname, name, lastName, contact, email, password, user_metadata) {
  try {
    const newUser = await User.create({
      nickname,
      name,
      lastName,
      contact,
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
    const deletedUser = await User.findByIdAndUpdate(userId, {
      'user_metadata.isActive': false}, 
      { new: true })

    return deletedUser
  } catch (e) {
    return e
  }
}

async function updateUser(userId, password, nickname, contact, user_metadata) {
  try {
    if (password !== undefined) {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { password: hash, contact, nickname, user_metadata },
        { new: true }
      )
      return updatedUser
    }
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

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  deleteUserById,
  updateUser,
  ableUser
}
