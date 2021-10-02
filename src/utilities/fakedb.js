// Add item in Database
const addToDb = id => {
  const exists = getDb();
  let localShoppingCart = {};
  if (!exists) {
    localShoppingCart[id] = 1;
  }
  else {
    localShoppingCart = JSON.parse(exists);
    if (localShoppingCart[id]) {
      const newCount = localShoppingCart[id] + 1;
      localShoppingCart[id] = newCount;
    }
    else {
      localShoppingCart[id] = 1;
    }
  }
  updateDb(localShoppingCart);
}

const getDb = () => localStorage.getItem('localShoppingCart');

// Update item in database
const updateDb = cart => {
  localStorage.setItem('localShoppingCart', JSON.stringify(cart));
}

// Remove item from database
const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const localShoppingCart = JSON.parse(exists);
    delete localShoppingCart[id];
    updateDb(localShoppingCart);
  }
}

// Get item from database
const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

// Clear the database
const clearTheCart = () => {
  localStorage.removeItem('localShoppingCart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }
