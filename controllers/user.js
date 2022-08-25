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

async function google(given_name, email, telePhone, family_name) { // obj {}
  try {
    const newUserG = await User.create({
      given_name,
      lastName: family_name,
      email,
      password: given_name + email,
      picture: 'https://thumbs.dreamstime.com/b/creative-design-padel-player-symbol-padel-player-symbol-131629171.jpg',
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

// ------GOOGLE ----//
// email: "lair.yamila.belen@gmail.com" email_verified: true family_name: "Lair" given_name: "Yamila Belen" locale: "es-419" name: "Yamila Belen Lair" nickname: "lair.yamila.belen" picture: "https://lh3.googleusercontent.com/a-/AFdZucqtgUGFIarCXKb1pghXDqSXD3rhsOvWqIpUKBT8qg=s96-c" sub: "google-oauth2|100915668923603980549" updated_at: "2022-08-25T03:15:50.446Z"




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
