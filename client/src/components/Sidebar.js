import React from "react";
import { setCanvas } from "../actions/canvasActions";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  setCanvas(type) {
      this.props.setCanvas(type);
  }

  render() {
    return (
      <div className="four wide column">
        <div className="ui vertical buttons">
          <button className="ui button" onClick={() => this.setCanvas("quiz")}>
            Take a Quiz
          </button>
          <button className="ui button">Take a Quiz</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.canvas,
  };
};

export default connect(mapStateToProps, {
  setCanvas,
})(Sidebar);
