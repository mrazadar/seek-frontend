export default {
  customers: [
    {
      id: 1,
      username: 'default',
      email: 'default@seek.com',
      password: '123',
    }, {
      id: 2,
      username: 'unilever',
      email: 'unilever@seek.com',
      password: '123',
    }, {
      id: 3,
      username: 'apple',
      email: 'apple@seek.com',
      password: '123',
    }, {
      id: 4,
      username: 'nike',
      email: 'nike@seek.com',
      password: '123',
    }, {
      id: 5,
      username: 'ford',
      email: 'ford@seek.com',
      password: '123',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Classic Ad',
      price: 269.99,
      type: 'classic',
    }, {
      id: 2,
      name: 'Standout Ad',
      price: 322.99,
      type: 'standout',
    }, {
      id: 1,
      name: 'Premium Ad',
      price: 394.99,
      type: 'premium',
    },
  ],
  rules: [
    {
      offer: 3,
      minimum: 2,
      discount: 0,
      product_id: 1,
      customer_id: 2,
    }, {
      offer: 0,
      minimum: 0,
      discount: 23,
      product_id: 2,
      customer_id: 3,
    }, {
      offer: 0,
      minimum: 4,
      discount: 15,
      product_id: 3,
      customer_id: 4,
    }, {
      offer: 5,
      minimum: 4,
      discount: 0,
      product_id: 1,
      customer_id: 5,
    }, {
      offer: 0,
      minimum: 0,
      discount: 13,
      product_id: 2,
      customer_id: 5,
    }, {
      offer: 0,
      minimum: 3,
      discount: 5,
      product_id: 3,
      customer_id: 5,
    },
  ],

};
