const config = require('../../knexfile').development
const connection = require('knex')(config)

function getActivities(db = connection, id) {
    return db('activities').where('activity_id', id).first()
}

function getLocation(db = connection, id) {
    return db('location').where('location_id', id).first()
}

function getPeople(db = connection, id) {
    return db('people').where('people_id', id).first()
}

module.exports = {
    getActivities,
    getLocation,
    getPeople
}