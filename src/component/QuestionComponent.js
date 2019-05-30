import React from "react";
import { Row, Col, Form, Dropdown } from "react-bootstrap";

export default function QuestionComponent({
  question,
  handelRadioClick,
  handelCheckboxClick,
  index,
  dropdownData
}) {
  return (
    <Row
      className={question.selected ? "selected" : "" + " question"}
      style={{ background: question.selected ? "#f0f3f7" : "transparent" }}
    >
      <Col xs={3} lg={1} className={question.selected ? "border-class" : ""}>
        <div className="setting">
          <Form.Check
            type="checkbox"
            label={question.number}
            checked={question.selected}
            onClick={handelCheckboxClick}
            name={index}
          />
          <Dropdown>
            <Dropdown.Toggle>
              <i
                className="fa fa-cog 2x"
                aria-hidden="true"
                style={{ fontSize: "25px" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownData.map(value => (
                <>
                  {value.text === "scoring" && <Dropdown.Divider />}
                  <Dropdown.Item>{value.text}</Dropdown.Item>
                  {value.text === "scoring" && <Dropdown.Divider />}
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col xs={9} lg={11} className="col-section">
        <div className="option">
          <div>{question.header}</div>
          <div className="choice">
            {question.options.map((element, i) => (
              <div>
                <Form.Check
                  type="radio"
                  label={element.text}
                  checked={element.selected}
                  onClick={handelRadioClick}
                  name={[index, i]}
                  key={i}
                />
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}
