const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Owner = require('../models/Owner')

async function getAllAdmins() {
  try {
    const admin = await Admin.find({ isActive: true })
    return admin
  } catch (e) {
    return e
  }
}

async function getAdminById(adminId) {
    try {
      const admin = await Admin.findById(adminId)
      return admin
    } catch (e) {
      return e
    }
  }

async function searchUsers(username) {

    try {
      const users = await User.find({ username: { $regex: username, $options: 'i' }})
      const userFilter = users.map(u => {
        return {
          _id: u._id,
          username: u.username,
          email: u.email,
        }
      })
      return userFilter
    } catch (e) {
      return e
    }
  }

async function searchOwner(username) {
  try{
    const owner = await Owner.find({ username: { $regex: username, $options: 'i' }})
    const ownerFilter = owner.map(o => {
      return {
        _id: o._id,
        username: o.username,
        email: o.email,
      }
    } )
    return ownerFilter
  }catch(e){
    return e
  }
}

  
async function createAdmin(name, email, username, password ) {
    try {
      const newAdmin = await Admin.create({
        name,
        email,
        username, 
        password,
        isActive: true,
        // role: null
      })
      return newAdmin
    } catch (e) {
      return e
    }
  }

  async function deleteAdminById(AdminId) {
    try {
      const deletedAdmin = await Admin.findByIdAndUpdate(AdminId, {
        isActive: false
      })
      return deletedAdmin
    } catch (e) {
      return e
    }
  }
  
  async function updatedAdmin(AdminId, password, username) {
    try {
      if (password !== undefined) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const updatedAdmin = await Admin.findByIdAndUpdate(
          AdminId,
          { password: hash, username },
          { new: true }
        )
        return updatedAdmin
      }
    } catch (e) {
      return e
    }
  }


module.exports = {
    getAdminById,
    getAllAdmins,
    createAdmin,
    deleteAdminById,
    updatedAdmin,
    searchUsers,
    searchOwner
  }