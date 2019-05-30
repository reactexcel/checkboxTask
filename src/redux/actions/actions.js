import * as actions from "../actionCreators/actionCreators";
import settingOption from "../../helpers/constant";

export const getDropdownList = () => {
  return (dispatch) => {
    dispatch(actions.getDropdownSuccess(settingOption.dropDownList));
  };
};
