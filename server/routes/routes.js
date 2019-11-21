const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/activities', (req, res) => {
    db.getActivities()
        .then(activity => {
            res.body(activity)
        })
})

router.get('/location', (req, res) => {
    db.getLocation()
        .then(location => {
            res.body(location)
        })
})

router.get('/people', (req, res) => {
    db.getPeople()
        .then(people => {
            res.body(people)
        })
})