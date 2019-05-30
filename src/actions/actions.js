import * as actions from "../actionCreators/actionCreators";
import settingOption from "../utils/constant";

export const getDropdownList = () => {
  return (dispatch) => {
    dispatch(actions.getDropdownSuccess(settingOption.dropDownList));
  };
};
