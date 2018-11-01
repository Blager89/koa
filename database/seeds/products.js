exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          name: 'rowValue1',
          path: '/files/music/toronto.mp3',
          price: '99',
          author: 'Em',
          category: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'rowValue2',
          path: '/files/music/tesrx.mp3',
          price: '99',
          author: 'Az',
          category: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    });
};
