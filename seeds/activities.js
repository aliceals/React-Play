
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        { activity_id: 1, activity_name: 'skiing' },
        { activity_id: 2, activity_name: 'club' },
        { activity_id: 3, activity_name: 'beach holiday' }
      ]);
    });
};
