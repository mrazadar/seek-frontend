import find from 'lodash/find';
import db from './Helpers/db';

export const fetchAds = () => new Promise((resolve) => {
  resolve(db.ads);
});

export const fetchAdTypes = () => new Promise((resolve) => {
  resolve(db.ad_types);
});

export const fetchCustomers = () => new Promise((resolve) => {
  resolve(db.customers);
});

export const fetchCustomersNames = () => new Promise((resolve) => {
  resolve(db.customers.map((c) => c.username));
});

export const signIn = (customer) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const found = find(db.customers, (c) => (c.email === customer.email && c.password === customer.password));
    if (found) {
      resolve(found);
    }
    reject(new Error('Invalid email or password'));
  }, 2000);
});

export const getRules = () => db.rules;

export const addRule = (payload) => new Promise((resolve) => {
  db.rules.push(payload);
  resolve({ success: true, message: 'Rule added successfully.', rules: db.rules });
});


export const getProducts = () => db.products;
export const addProduct = (payload) => db.products.push(payload);

const request = ({ method, payload }) => {
  const reqData = payload && payload.payload;
  return method(reqData);
};
// {

  // return  new Promise((resolve, reject) => {
    // setTimeout(() => {
      // try {
        // if(method==='signIn'){

          // method(signIn(payload));
        // }
      // } catch (error) {
        // reject(error);
      // }
      // }, 2000);

//   })
// };


export default request;
