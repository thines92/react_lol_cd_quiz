import React from "react";
import { setCanvasType } from "../actions/canvasActions";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="four wide column">
        <div className="ui vertical buttons">
          <button className="ui button" onClick={() => this.props.setCanvasType("quiz")}>
            Take a Quiz
          </button>
          <button className="ui button" onClick={() => this.props.setCanvasType('flashcard')}>Use Flashcards</button>
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
  setCanvasType,
})(Sidebar);
