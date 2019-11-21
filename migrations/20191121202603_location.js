
exports.up = function (knex) {
    return knex.schema.createTable('location', table => {
        table.increments('location_id')
        table.string('location_name')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('location')
};
