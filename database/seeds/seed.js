const faker = require('faker');

const categories = [
  {
    id: 1,
    name: 'Pop'
  },
  {
    id: 2,
    name: 'Rap'
  },
  {
    id: 3,
    name: 'Disco'
  },
  {
    id: 4,
    name: 'Rock'
  }
];
const products = [
  {
    id: 1,
    name: 'rowValue1',
    media_id: 1,
    price: '99',
    author: 'Em',
    category_id: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'rowValue2',
    media_id: 2,
    price: '99',
    author: 'Az',
    category_id: '2',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
const roles = [
  {
    id: 1,
    name: 'admin'
  },
  {
    id: 2,
    name: 'user'
  }
];
const media = [
  {
    id: 1,
    product_id: 1,
    file_key: 'image.img',
    bucket: 'resources/images',
    type: 'cover',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    product_id: 1,
    file_key: 'track.mp3',
    bucket: 'resources/tracks',
    type: 'track',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 3,
    product_id: 1,
    file_key: 'image1.img',
    bucket: 'resources/images',
    type: 'cover',
    created_at: new Date(),
    updated_at: new Date()
  }, {
    id: 4,
    product_id: 2,
    file_key: 'track1.mp3',
    bucket: 'resources/tracks',
    type: 'track',
    created_at: new Date(),
    updated_at: new Date()
  }
];
const userRoles = [
  {
    user_id: 1,
    role_id: 1
  },
  {
    user_id: 1,
    role_id: 2
  },
  {
    user_id: 2,
    role_id: 2
  },
  {
    user_id: 3,
    role_id: 2
  },
  {
    user_id: 4,
    role_id: 2
  },
  {
    user_id: 5,
    role_id: 2
  },
  {
    user_id: 6,
    role_id: 1
  }

];
const users = [
  {
    id: 6,
    fullname: 'admin',
    email: 'admin@gmail.com',
    password: 123123,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 5,
    fullname: `${faker.name.findName()}`,
    email: faker.internet.email(),
    password: 1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 1,
    fullname: `${faker.name.findName()}`,
    email: faker.internet.email(),
    password: 1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    fullname: `${faker.name.findName()}`,
    email: faker.internet.email(),
    password: 1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 3,
    fullname: `${faker.name.findName()}`,
    email: faker.internet.email(),
    password: 1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 4,
    fullname: `${faker.name.findName()}`,
    email: faker.internet.email(),
    password: 1,
    created_at: new Date(),
    updated_at: new Date()
  }
];
exports.seed = async knex => {
  await knex('products').insert(products);
  await knex('roles').insert(roles);
  await knex('users').insert(users);
  await knex('user_roles').insert(userRoles);
  await knex('categories').insert(categories);
  await knex('media').insert(media);
};

exports.seedData = {
  products,
  users,
  roles,
  userRoles,
  categories,
  media
};
