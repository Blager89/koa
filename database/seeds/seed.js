// const categories = [
//   {
//     id: 1,
//     name: 'Pop',
//   },
//   {
//     id: 2,
//     name: 'Rap',
//   },
//   {
//     id: 3,
//     name: 'Disco',
//   },
//   {
//     id: 4,
//     name: 'Rock',
//   }
// ];
// const products = [
//   {
//     id: 1,
//     name: 'rowValue1',
//     media: 1,
//     price: '99',
//     author: 'Em',
//     category: '1',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     id: 2,
//     name: 'rowValue2',
//     media: 1,
//     price: '99',
//     author: 'Az',
//     category: '2',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }
// ];
const roles = [
  {
    id: 1,
    name: 'admin',
  },
  {
    id: 2,
    name: 'user',
  }
];
// const media = [
//   {
//     id: 1,
//     product_id: 1,
//     file_key: 'image.img',
//     bucket: 'resources/images',
//     type: 'cover',
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     id: 2,
//     product_id: 1,
//     file_key: 'track.mp3',
//     bucket: 'resources/tracks',
//     type: 'track',
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     id: 3,
//     product_id: 1,
//     file_key: 'image1.img',
//     bucket: 'resources/images',
//     type: 'cover',
//     created_at: new Date(),
//     updated_at: new Date(),
//   },{
//     id: 4,
//     product_id: 2,
//     file_key: 'track1.mp3',
//     bucket: 'resources/tracks',
//     type: 'track',
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
// ];

exports.seed = async knex => {
  // await knex('categories').insert(categories);
  // await knex('media').insert(media);
  // await knex('products').insert(products);
  // await knex('media').insert(roles);
};

exports.seedData = {
  // categories,
  roles,
  // products,
  // media
};
