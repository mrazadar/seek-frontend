

const storage = localStorage;

const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => JSON.parse(storage.getItem(key));

const removeItem = (key) => {
  storage.removeItem(key);
};

const appStorage = {
  setItem,
  getItem,
  removeItem,
};

export default appStorage;
