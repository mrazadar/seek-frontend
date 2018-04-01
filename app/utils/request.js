import find from 'lodash/find';
import db from './Helpers/db';

//
export const getCustomers = () => db.customers;

export const signIn = (customer) => new Promise((resolve, reject) => {
  const found = find(db.customers, (c) => (c.email === customer.email && c.password === customer.password));
  if (found) {
    resolve(found);
  }
  reject(new Error('Invalid email or password'));
});

export const getRules = () => db.rules;
export const addRules = (payload) => db.rules.push(payload);


export const getProducts = () => db.products;
export const addProduct = (payload) => db.products.push(payload);

const request = ({ method, payload }) => method(payload.payload);// {

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
