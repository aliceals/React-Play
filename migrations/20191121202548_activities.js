
exports.up = function (knex) {
    return knex.schema.createTable('activities', table => {
        table.increments('activity_id')
        table.string('activity_name')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('activites')
};
