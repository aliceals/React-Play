
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { people_id: 1, people_name: 'Hugo' },
        { people_id: 2, people_name: 'Freya' },
        { people_id: 3, people_name: 'Phil' }
      ]);
    });
};
