
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        { location_id: 1, location_name: 'Fiji' },
        { location_id: 2, location_name: 'Samoa' },
        { location_id: 3, location_name: 'France' }
      ]);
    });
};
