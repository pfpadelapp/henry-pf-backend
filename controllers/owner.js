const Owner = require('../models/Owner')

async function getAllOwners() {
  try {
    const owners = await Owner.find({ isActive: true })
    return owners
  } catch (e) {
    return e
  }
}

// ruta de ordenamiento
// async function getAllOwnersSort() {
  // try {
  //   const owners = await Owner.find({ isActive: true }).sort({ name: 1 }).exec((err, data) => {
  //     if(error) {
  //       return error
  //     }
  //     return data
  //   })
  //   return owners
  // } catch (error) {
  //   return error
  // }
// }

async function getOwnerById(ownerId) {
  try {
    const owner = await Owner.findById(ownerId)
    return owner
  } catch (e) {
    return e
  }
}

async function createOwner(name, contact, email, username, password) {
  try {

    const newOwner = await Owner.create({
      name: name.toLowerCase(),
      contact,
      email,
      username,
      password,
      isActive: true
    })
    return newOwner
  } catch (e) {
    return e
  }
}

async function deleteOwnerById(ownerId) {
  try {
    const deletedOwner = await Owner.findByIdAndUpdate(ownerId, {
      isActive: false
    })
    return deletedOwner
  } catch (e) {
    return e
  }
}

module.exports = { getOwnerById, getAllOwners, createOwner, deleteOwnerById }
