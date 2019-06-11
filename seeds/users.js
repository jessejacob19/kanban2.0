
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'jessDawg1',
          hash: 'example1'
        },
        {
          id: 2, 
          username: 'zozo',
          hash: 'example2'
        },
        {
          id: 3, 
          username: 'Raichung',
          hash: 'example3'
        },
      ]);
    });
};