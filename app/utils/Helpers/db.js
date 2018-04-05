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
    {
      id: 6,
      username: 'Admin',
      email: 'admin@seek.com',
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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qR0cTznWpeZwtTi4YQX_KVFLUo_ke6-g3ypbPQuq873w6NyM',
    },
    {
      id: 3,
      title: 'Nike product.',
      description: 'Longer description about Nike product. Dollor ipsem lorel smit. Dollor ipsem lorel smit.',
      ad_type: 'premium',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAkFBMVEX/////ZgD/WwD/YwD/XwD/XQD/WAD///3/agD/+PP/x67/ilD/ZwD/7OL/6Nv/1cH/0Lr/9O3/bxX/4dL/t5f/lmT/ror/ch3/3Mv/TgD/p3//q4T/9vD/nG7/g0P/k1//din/vqD/fTf/ybH/j1j/bw//s5D/0b3/o3j/u57/jln/fT7/hEv/5t7/eTH/wZ/ybob/AAAETElEQVR4nO3aaWOiMBAG4CUXnqVCFeuxaq1uu+12//+/20GwKhAFPBLZ9/kuiUNmkon++AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCBrukJZDQNjestDQ2sMfw7dM2M7DXMjJur12r/9EwNPnx+NDV0StMb+c/TB2PjB8o3Nva+4OmneuZPpooE6Qq2MDf6dhKtvqOYejFasyYdzg2+COJ6ozljQqjXwOw8Qi5GBoePsoIJziUfmd7QX4WjTJUpyoqGktxxOFu9m12ZZMwcPjcxMGWFz6RwiFAvFuxgj8px5PutR6Ws+KTiwJ1NIFjfbImIdSXNRd02R3utfmeTFREu2bh30+E1XD/K06/bDUgnKCoOwklwFi4Mna/T+tGkxPhGo9FeIbdZEZeIT2Pn67SWimbEbjGfbmvG98MQlQiD5+u0LtvMSV47V5u/3sLv4rDNjM7AihKRmMez61x1kGD9IQ6XAwVChS1LSkRsJON5ta82AmWFTIchyoz28GpDVhKoZGbXOXU3vbd5KividLSpRCT8ZJpicPlnB08fOcshKhGOyRZcI0kPCsX6sg+mExTPWw5Rifiy7Npw40E5VwjFptvenaAOS4R6taxEJF6+X9vFasVD3G3nxoFL8Wa6BddYst0sZxd4Xm+ZdNv5gWArC0tEzN2bND/3stv1xiG1mZow2NKC66zl3lTZGSs36ra1WREHgs1saMF1JgevUFa94/2+g9LiUo4tLRGJ0UEoeFjhEdRtr5Rmr/h+MPNtacF1JvJwyqxV8gHpbjs/M5S5n7gKG6RC4chJ8Q/TCcphR7MiCUTfuvN1lpuOROF7LMqK8FRWxJnBrWrBtVosM3fxefpjlBWZbjs/ELa14HpfOV9HhEcLPXXbokBWbJ7E7LmlO2XXfRyu6YHmTU6yd1B6NrbgegNNrks+yKyMpjd4Ob1X7MLJ1yUKsHkr7RcTKhwtH5ouLQ+32fXep/7xg2QqEOqr7KZsWH5+bL+OYEp2wjBsSEXNduEwRGG07ZbutEVmK80GhJeIwYaUtrbgx/RPHwtK4qxhbQt+lL5UVAyEnbd0BTQvuyioBb+7ErHVzR41K6MW3PgfZc7w59gGUi4QzH+/k/N1vuBCq4JacItv6Qq5zKoQyupbumIuUCvofG3HH2XONDl3B+HK+lu6ohpnBeIubumKmp1xxLqvFvykAj1IPs7Eug4lYqdXbQvhan5nLXgBrxUyhFrw+pSInaDssuBUIu74fH3MrNR+ercteBFlmlM6RdzLRX4lw6IpIlgtS8S+xyKxiP5lWtMSsW946tc+ztis7gsi0Wsr/Z4qmGgva1sqs7y5ylkZXEjFp4//URw2hlNHSZFc9HNOUWDS7y/q1GUU5waL6WfoCKocq4/fo8WwXj1GBa7r1vnsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR/wDn8kvVlqYGR4AAAAASUVORK5CYII=',
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
      logo: 'http://www.carlogos.org/logo/Ford-logo-2003-1366x768.png',
    },
    {
      id: 6,
      title: 'Ford product.',
      description: 'Longer description about Ford product. Dollor ipsem lorel smit. Dollor ipsem lorel smit.',
      ad_type: 'premium',
      logo: 'http://www.carlogos.org/logo/Ford-logo-2003-1366x768.png',
    },

  ],
};
