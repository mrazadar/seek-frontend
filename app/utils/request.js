import find from 'lodash/find';
import db from './Helpers/db';

//
export const getCustomers = () => db.customers;

export const signIn = (customer) => {
  const found = find(db.customers, (c) => (c.email === customer.email && c.password === customer.password));
  if (found) {
    return found;
  }
  return new Error('Invalid email or password');
};

export const getRules = () => db.rules;
export const addRules = (payload) => db.rules.push(payload);


export const getProducts = () => db.products;
export const addProduct = (payload) => db.products.push(payload);

const request = (method, payload) => new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(method(payload));
    }, 2000);
  } catch (error) {
    reject(error);
  }
});


export default request;
