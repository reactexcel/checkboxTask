import React, { Component } from "react";
import QuestionComponent from "../component/QuestionComponent";
import QuestionList from "../../utils/constant";
import { connect } from "react-redux";
import { getDropdownList } from "../../actions/actions";
import "../../style/questionblock.css";
import cloneDeep from "lodash/cloneDeep";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

class QuestionBlock extends Component {
  state = {
    QuestionList: []
  };

  componentDidMount() {
    this.setState({
      QuestionList: QuestionList.question
    });
    this.props.getDropdownList();
  }

  handelRadioClick = e => {
    const indexData = e.target.value.split(",");
    let QuestionList = cloneDeep(this.state.QuestionList);
    QuestionList[indexData[0]].options[indexData[1]].selected = !QuestionList[
      indexData[0]
    ].options[indexData[1]].selected;
    this.setState({
      QuestionList
    });
  };

  handelCheckboxClick = e => {
    console.log(e.target.name);

    let QuestionList = cloneDeep(this.state.QuestionList);
    QuestionList[e.target.name].selected = !QuestionList[e.target.name]
      .selected;
    this.setState({
      QuestionList
    });
  };

  render() {
    return (
      <div className="container">
        <div className="block">
          <div className="block-1">
            <i className="fa fa-caret-down" />
            Default Question Block
          </div>
          <div className="block-2">
            Block options{" "}
            <i className="fa fa-angle-down" style={{ fontSize: "15px" }} />
          </div>
        </div>
        {this.state.QuestionList.map((element, index) => (
          <div className={element.selected ? "style-container" : ""}>
            <QuestionComponent
              question={element}
              key={element.number}
              index={index}
              handelRadioClick={this.handelRadioClick}
              handelCheckboxClick={this.handelCheckboxClick}
              dropdownData={this.props.dropdownData}
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dropdownData: state.data
});
const mapDispatchToProps = dispatch => {
  return {
    getDropdownList: () => dispatch(getDropdownList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBlock);
