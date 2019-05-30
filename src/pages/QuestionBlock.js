import React, { Component } from "react";
import QuestionComponent from "../component/QuestionComponent";
import QuestionList from "../helpers/constant";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getDropdownList } from "../redux/actions/actions";
import "../style/questionblock.css";
import cloneDeep from "lodash/cloneDeep";

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
    let x = e.target.name.split(",");
    let QuestionList = cloneDeep(this.state.QuestionList);
    QuestionList[x[0]].options[x[1]].selected = !QuestionList[x[0]].options[
      x[1]
    ].selected;
    this.setState({
      QuestionList
    });
  };

  handelCheckboxClick = e => {
    let QuestionList = cloneDeep(this.state.QuestionList);
    QuestionList[e.target.name].selected = !QuestionList[e.target.name]
      .selected;
    this.setState({
      QuestionList
    });
  };

  render() {
    return (
      <Container>
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
            />
          </div>
        ))}
      </Container>
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
