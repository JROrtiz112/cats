export const CREATE_CAT = 'CREATE_CAT';
export const DELETE_CAT = 'DELETE_CAT';
export const UPDATE_CAT = 'UPDATE_CAT';
export const CLEAR_CAT = 'CLEAR_CAT';

export default {
  [CREATE_CAT]: (state: { cats: Cat[] }, payload: Cat) => {
    const newCats = state.cats;
    newCats.push(payload);
    return (state.cats = newCats)
  },
  [UPDATE_CAT]: (state: { cats: Cat[] }, payload: Cat) => (state.cats = state.cats.map((cat) => {
    if (cat.id === payload.id) {
      return {...payload};
    }
    return cat;
  })),
  [DELETE_CAT]: (state: { cats: Cat[] }, payload: Cat) => {
    const newCats = state.cats;
    newCats.splice(state.cats.findIndex(item => item.id === payload.id),1);
    return (state.cats = newCats)
  },
  [CLEAR_CAT]: (state: { cat: Cat }) => (state.cat = {id: '', name: '', color: '', eyesColor: '', age: null})
}
