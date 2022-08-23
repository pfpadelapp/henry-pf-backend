const User = require('../models/User');

async function rolUser() {
    try {
        const usersPlayer = await User.find({ 'user_metadata.rol': 'player' })
        return usersPlayer
      } catch (e) {
        return e
      }
}

async function rolOwner() {
    try {
        const usersOwner = await User.find({ 'user_metadata.rol': 'owner' })
        return usersOwner
      } catch (e) {
        return e
      }
}


module.exports = {
    rolUser,
    rolOwner
  }
  