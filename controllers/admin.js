const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Owner = require('../models/Owner')

async function getAllAdmins() {
  try {
    const admin = await Admin.find()
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

async function searchUsers(name) {

    try {
      const users = await User.find({ name: { $regex: name, $options: 'i' }})
      const userFilter = users.map(u => {
        return {
          _id: u._id,
          name: u.name,
          email: u.email,
          isActive: u.user_metadata.isActive,
          role: u.role
        }
      })
      return userFilter
    } catch (e) {
      return e
    }
  }

async function searchOwner(name) {
  try{
    const owner = await Owner.find({ name: { $regex: name, $options: 'i' }})
    const ownerFilter = owner.map(o => {
      return {
        _id: o._id,
        name: o.name,
        email: o.email,
        isActive: o.user_metadata.isActive,
        role: o.role
      }
    } )
    return ownerFilter
  }catch(e){
    return e
  }
}

async function createAdmin(name, email, username, password ) {
  try {
    const verifyEmail = await Admin.find({email})
    console.log(verifyEmail)
    if(verifyEmail.length > 0) {
      return 'This email already exists'
    }
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


  async function ableAdmin(adminId) {
    try {
      const ableAdmin = await Admin.findByIdAndUpdate(
        adminId,
          { isActive: true },
          // { new: true }
      )
      return ableAdmin
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
    searchOwner,
    ableAdmin
  }
