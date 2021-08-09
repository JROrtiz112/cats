import {
  CREATE_CAT,
  DELETE_CAT,
  UPDATE_CAT,
  CLEAR_CAT
} from './mutations'

const createCat = ({ commit }: any, payload: Cat) => commit(CREATE_CAT, payload);
const deleteCat = ({ commit }: any, payload: Cat) => commit(DELETE_CAT, payload);
const updateCat = ({ commit }: any, payload: Cat) => commit(UPDATE_CAT, payload);
const clearCat = ({ commit }: any) => {
  return (commit(CLEAR_CAT))
};

export default {
  createCat,
  deleteCat,
  updateCat,
  clearCat
}
