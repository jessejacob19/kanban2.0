exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "jessDawg1",
          hash: "$2b$12$3nw24MySKfFMsHQzSUZua.8cUFYeCAFB0.eunPT5pA0ZiT2oJCnvy" //yeet
        },
        {
          id: 2,
          username: "zozo",
          hash: "$2b$12$3nw24MySKfFMsHQzSUZua.8cUFYeCAFB0.eunPT5pA0ZiT2oJCnvy"
        },
        {
          id: 3,
          username: "Raichung",
          hash: "$2b$12$3nw24MySKfFMsHQzSUZua.8cUFYeCAFB0.eunPT5pA0ZiT2oJCnvy"
        }
      ]);
    });
};
