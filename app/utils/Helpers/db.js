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
  ad_types: {
    classic: {
      id: 1,
      name: 'Classic Ad',
      price: 269.99,
    },
    standout: {
      id: 2,
      name: 'Standout Ad',
      price: 322.99,
    },
    premium: {
      id: 1,
      name: 'Premium Ad',
      price: 394.99,
    },
  },
  rules: [
    {
      offer: 3,
      minimum: 2,
      discount: 0,
      ad_type: 'classic',
      customer_id: 2,
    }, {
      offer: 0,
      minimum: 0,
      discount: 23,
      ad_type: 'standout',
      customer_id: 3,
    }, {
      offer: 0,
      minimum: 4,
      discount: 15,
      ad_type: 'premium',
      customer_id: 4,
    }, {
      offer: 5,
      minimum: 4,
      discount: 0,
      ad_type: 'classic',
      customer_id: 5,
    }, {
      offer: 0,
      minimum: 0,
      discount: 13,
      ad_type: 'standout',
      customer_id: 5,
    }, {
      offer: 0,
      minimum: 3,
      discount: 5,
      ad_type: 'premium',
      customer_id: 5,
    },
  ],
  ads: [
    {
      id: 1,
      title: 'Unilever product.',
      description: 'Description about Unilever product .',
      ad_type: 'classic',
      logo: null,
    },
    {
      id: 2,
      title: 'Apple product.',
      description: 'Longer description about Unilever product. Dollor ipsem lorel smit. Dollor ipsem lorel smit.',
      ad_type: 'standout',
      logo: 'Apple Logo',
    },
    {
      id: 3,
      title: 'Nike product.',
      description: 'Longer description about Nike product. Dollor ipsem lorel smit. Dollor ipsem lorel smit.',
      ad_type: 'premium',
      logo: 'Nike Logo',
    },
    {
      id: 4,
      title: 'Ford product.',
      description: 'Description about ford product .',
      ad_type: 'classic',
      logo: null,
    },
    {
      id: 5,
      title: 'Ford product.',
      description: 'Longer description about Ford product. Dollor ipsem lorel smit. Dollor ipsem lorel smit.',
      ad_type: 'standout',
      logo: 'Ford Logo',
    },
    {
      id: 6,
      title: 'Ford product.',
      description: 'Longer description about Ford product. Dollor ipsem lorel smit. Dollor ipsem lorel smit.',
      ad_type: 'premium',
      logo: 'Ford Logo',
    },

  ],
};
