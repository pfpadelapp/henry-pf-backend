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
      user_metadata,
      picture: 'https://thumbs.dreamstime.com/b/creative-design-padel-player-symbol-padel-player-symbol-131629171.jpg'
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




async function updateUser(userId, newname, telephone, pic) {
  try {

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name: newname,
       'user_metadata.telePhone': telephone,
        picture: pic
      },
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
      { 
        'user_metadata.isAdmin': true,
        'user_metadata.rol': "Admin"
    },
      { new: true }
    )
    return ableAdmin
  } catch (e) {
    return e
  }
}

async function google(given_name, email, telePhone, family_name, picture) { // obj {}
  try {
    const newUserG = await User.create({
      name: given_name,
      lastName: family_name,
      email,
      password: given_name + email,
      picture: picture,
      'user_metadata.telePhone' : telePhone,
      'user_metadata.rol' : "player",
      'user_metadata.isActive' : true,
      'user_metadata.isAdmin' : false,
      'user_metadata.isSuperAdmin' : false,
      email_verified: true
    })
    return newUserG
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
  ableAdmin,
  google
}
