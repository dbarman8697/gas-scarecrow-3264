const express = require('express')
const { AgencyModel } = require('../Model/Agency.model')
const { interestedModel } = require('../Model/interestedVolunteer.model')
const { eventModel } = require('../Model/event.model')
const { VolunteerModel } = require('../Model/Volunteer.model')
const volunteer = express.Router()


volunteer.get('/event', async (req, res) => {
    try {
        const event = await eventModel.find()
        res.status(200).json({ event })
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})


volunteer.post("/intrestedvol/:id", async (req, res) => {
    const { id } = req.params

    const user = await VolunteerModel.findById(req.body.userId)
    try {
        const interestedVol = new interestedModel(
            {
                eventId: id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            }
        )
        await interestedVol.save()
        res.status(200).json({ msg: `You showed intrested in ${event.name}` })
    } catch (error) {

    }
})

module.exports = { volunteer }

