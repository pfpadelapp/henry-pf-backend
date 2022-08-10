const User = require('../models/User')

async function getAllAdmin() {
  try {
    const admins = await User.find({ isActive: true })
    return admins
  } catch (e) {
    return e
  }
}

async function getAdminById(adminId) {
  try {
    const admin = await User.findById(adminId)
    return admin
  } catch (e) {
    return e
  }
}

async function changeRole(adminId, userId) {
  const message = `user ${userId} now has admin role`
  try {
    const admin = await User.findById(adminId)
    if (admin.role === 'ADMIN') {
      await User.findByIdAndUpdate(userId, {
        role: 'ADMIN'
      })
    }
    return message
  } catch (e) {
    return e
  }
}

async function deleteUserById(userId) {
  try {
    const deletedUser = await User.findByIdAndUpdate(userId, {
      isActive: false
    })
    return deletedUser
  } catch (e) {
    return e
  }
}

module.exports = { getAdminById, getAllAdmin, changeRole, deleteUserById }
