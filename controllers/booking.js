const Booking = require('../models/Booking')
const { sendMail } = require('../utils/email')
const { getUserById } = require('./user')
const { getFieldById } = require('./field')
const User = require('../models/User')
const Field = require('../models/PadelField')
const {emailBooking} = require('../utils/emailTemplate.js');

const horarios = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const { name, image, price } = Field

async function getBookingsFields(idField) {
  try {
    const bookings = await Booking.find({
      isActive: true,
      idField
    })
    return bookings
  } catch (e) {
    return e
  }
}

async function setNewBooking(idUser, idField, date) {
  try {
    const newBooking = await Booking.create({
      idUser,
      idField,
      date,
      isActive: true
    })
    const user = await getUserById(idUser);
    const field = await getFieldById(idField);
    const actualDate = new Date();
    const subject = 'Confirmacion de reservacion';
    const newDate = `${actualDate.toString().slice(8,10)} ${actualDate.toString().slice(4,7)} ${actualDate.getFullYear()}`;
    const dateBooking = new Date(date);
    const day = `${dateBooking.toString().slice(8,10)} ${dateBooking.toString().slice(4,7)} ${dateBooking.getFullYear()}`;
    const hour = `${dateBooking.toString().slice(16,18)}:00 hrs.`;
    const emailBody = emailBooking(user.name, newDate, field.name, field.location, field.price, day, hour);
    sendMail(user.email, emailBody, subject);

    await User.findByIdAndUpdate(idUser, {
      $push: {
        history: {
          name,
          image,
          price,
          newBooking
        }
      }
    })

    return newBooking
  } catch (e) {
    return e
  }
}

async function deleteBooking(idBooking) {
  try {
    const deletedBooking = await Booking.findByIdAndUpdate(idBooking, {
      isActive: false
    })

    return deletedBooking
  } catch (e) {
    return e
  }
}

async function getHours(idField, day) {
  try {
    const bookings = await Booking.aggregate([
      {
        $project: {
          day: {
            $dateToString: {
              format: '%d/%m/%Y',
              date: '$date'
            }
          },
          hour: {
            $dateToString: {
              format: '%H',
              date: '$date',
              timezone: '-00:00'
            }
          }
        }
      }
    ])

    const dayBooking = bookings.filter((d) => d.day === day)

    const hourBooking = dayBooking.map((d) => Number(d.hour))

    const horarioFinal = []

    for (let i = 0; i < horarios.length; i++) {
      if (!hourBooking.includes(horarios[i])) horarioFinal.push(horarios[i])
    }

    return horarioFinal
  } catch (e) {
    return e
  }
}

module.exports = { getBookingsFields, setNewBooking, deleteBooking, getHours }
