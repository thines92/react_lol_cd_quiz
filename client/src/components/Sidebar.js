import React from "react";
import { setCanvasType } from "../actions/canvasActions";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  render() {
    return (
        <div className="ui vertically divided grid center aligned">
          <div className="row">
            <div
              className="fluid ui segment button"
              onClick={() => this.props.setCanvasType("quiz")}
            >
              Take a Quiz
            </div>
          </div>
          <div className="row">
            <div
              className="fluid ui segment button"
              onClick={() => this.props.setCanvasType("flashcard")}
            >
              Use Flashcards
            </div>
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
