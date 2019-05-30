import * as actions from "../actionCreators/actionCreators";
import settingOption from "../../helpers/constant";

export const getDropdownList = () => {
  return (dispatch, getState) => {
    dispatch(actions.getDropdownSuccess(settingOption.dropDownList));
  };
};
