/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_FAVORITES = createActionName('ADD_FAVORITES');

/* action creators */
export const createAction_addFavorites = payload => ({ payload, type: ADD_FAVORITES });

/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = true;
        }
        return product;
      });
    default:
      return statePart;
  }
}
