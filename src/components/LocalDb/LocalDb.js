// using local storage as data base
const addToDb = id => {
    const savedData = getDb();
    let shopping_cart = {};
    if (!savedData) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(savedData);
        if (shopping_cart[id]) {
            return;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

const getStoredData = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredData };

