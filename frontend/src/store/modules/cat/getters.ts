const getCat = (state: { cats: Cat[]; }): Cat[] => {
  return state.cats;
};


export default {
  getCat
};