const express = require('express')
const { AgencyModel } = require('../Model/Agency.model')
const volunteer = express.Router()


app.get('/getagency', async (req, res) => {
    try {
        const agencies = await AgencyModel({})
    } catch (error) {

    }
})