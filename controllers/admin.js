const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')

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
    updatedAdmin
  }