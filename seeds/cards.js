
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 301, 
          columnId: 201,
          title: "seed data",
          description: "inputing the seed data",
          position: "(0,0)"
        },
        {
          id: 302, 
          columnId: 201,
          title: "migrations",
          description: "making migrations",
          position: "(1,0)"
        },
        {
          id: 303, 
          columnId: 202,
          title: "react",
          description: "doing all the components",
          position: "(0,0)"
        },
        {
          id: 304, 
          columnId: 202,
          title: "redux",
          description: "finished the store",
          position: "(0,1)"
        },
        {
          id: 305, 
          columnId: 203,
          title: "readme",
          description: "user stories and stretch goals",
          position: "(0,0)"
        },
      ]);
    });
};
