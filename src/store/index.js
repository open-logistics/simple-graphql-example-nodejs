import Assert from 'assert';

// In memory...
const items = [];

export async function saveInventoryItem(newItem) {
  const { key, location, quantity } = newItem;

  Assert(typeof key === 'string', 'Expected key to be a string');
  Assert(!!key, 'Expected key to have a value');
  Assert(typeof location === 'string', 'Expected location to be a string');
  Assert(!!location, 'Expected location to have a value');
  Assert(typeof quantity === 'number', 'Expected quantity to be a number');
  Assert(!isNaN(quantity), 'Expected quantity to be a number (found NaN)');
  Assert(Math.floor(quantity) === quantity, 'Expected quantity to be an integer');

  const item = await getInventoryItem({ key, location });

  const index = item ? items.indexOf(item) : -1;

  if (index > -1) {
    items[index] = newItem;
  } else {
    items.push(newItem);
  }

  return newItem;
}

export async function incrementInventoryItem(newItem) {
  const { key, location, quantity } = newItem;

  Assert(typeof key === 'string', 'Expected key to be a string');
  Assert(!!key, 'Expected key to have a value');
  Assert(typeof location === 'string', 'Expected location to be a string');
  Assert(!!location, 'Expected location to have a value');
  Assert(typeof quantity === 'number', 'Expected quantity to be a number');
  Assert(!isNaN(quantity), 'Expected quantity to be a number (found NaN)');
  Assert(Math.floor(quantity) === quantity, 'Expected quantity to be an integer');

  const item = await getInventoryItem({ key, location });

  const index = item ? items.indexOf(item) : -1;

  if (index > -1) {
    return items[index] = {
      ...newItem,
      quantity: item.quantity + quantity
    };
  } else {
    items.push(newItem);
    return newItem;
  }

}

export async function deleteInventoryItem({ key, location }) {
  Assert(typeof key === 'string', 'Expected key to be a string');
  Assert(!!key, 'Expected key to have a value');
  Assert(typeof location === 'string', 'Expected location to be a string');
  Assert(!!location, 'Expected location to have a value');

  const item = await getInventoryItem({ key, location });

  const index = item ? items.indexOf(item) : -1;

  if (index > -1) {
    items.splice(index, 1);
  }

  return item;
}

export async function getInventoryItem({ key, location }) {
  Assert(typeof key === 'string', 'Expected key to be a string');
  Assert(!!key, 'Expected key to have a value');
  Assert(typeof location === 'string', 'Expected location to be a string');
  Assert(!!location, 'Expected location to have a value');

  return items
    .find(({ key: otherKey, location: otherLocation }) => key === otherKey && location === otherLocation);
}

export async function listInventoryItems({ location = null }) {
  Assert(!location || typeof location === 'string', 'Expected location to be a string');

  let toReturn = items.slice(0);

  if (location) {
    toReturn = toReturn.filter(({ location: otherLocation }) => location === otherLocation);
  }

  return toReturn;
}
