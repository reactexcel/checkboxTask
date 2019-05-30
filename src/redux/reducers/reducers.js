import { handleActions } from "redux-actions";
import update from "immutability-helper";

const initialState = {
  data: []
};
const getDropdownSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload }
  });

export default handleActions(
  {["GET_DROPDOWN_SUCCESS"]: getDropdownSuccess},
  initialState
);
