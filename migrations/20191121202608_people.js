
exports.up = function (knex) {
    return knex.schema.createTable('people', table => {
        table.increments('people_id')
        table.string('people_name')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('people')
};
