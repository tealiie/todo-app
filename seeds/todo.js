
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo').insert({id: 1, task: 'you better move'}),
        knex('todo').insert({id: 2, task: 'you better dance'}),
        knex('todo').insert({id: 3, task: 'yelling timber'})
      ]);
    });
};
