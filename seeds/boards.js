
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {
          id: 101, 
          name: 'todo doing done', 
          accountId: 1
        },
        {
          id: 102, 
          name: 'yeet', 
          accountId: 1
        }
      ]);
    });
};