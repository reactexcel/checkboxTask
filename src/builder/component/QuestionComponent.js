import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import MenuComponent from "./MenuComponent";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    position: "relative"
  },
  paper: {
    position: "absolute",
    top: 36,
    right: 0,
    left: 0
  },
  fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    "&:nth-child(2n)": {
      marginRight: theme.spacing(3)
    }
  }
});

class QuestionComponent extends Component {
  render() {
    let {
      question,
      handelRadioClick,
      handelCheckboxClick,
      index,
      dropdownData
    } = this.props;
    return (
      <div
        className={question.selected ? "selected" : "" + " question"}
        style={{ background: question.selected ? "#f0f3f7" : "transparent" }}
      >
        <div xs={3} lg={1} className={question.selected ? "border-class" : ""}>
          <div className="setting">
            <Checkbox
              checked={question.selected}
              onChange={handelCheckboxClick}
              value="checkedB"
              color="default"
              name={index}
            />
            {question.number}
            <MenuComponent dropdownData={dropdownData} />
          </div>
        </div>
        <div xs={9} lg={11} className="col-section">
          <div className="option">
            <div>{question.header}</div>
            <div className="choice">
              {question.options.map((element, i) => (
                <div>
                  <Radio
                    checked={element.selected}
                    onClick={handelRadioClick}
                    value={[index, i]}
                    color="default"
                    name="radio-button-demo"
                    aria-label="D"
                  />
                  {element.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QuestionComponent);
