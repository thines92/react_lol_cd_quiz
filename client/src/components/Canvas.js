import React from "react";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import Flashcard from "./Flashcard";

class Canvas extends React.Component {
    renderCanvasType() {
        switch (this.props.canvas.type) {
            case 'quiz':
                return <Quiz />
            case 'flashcard':
                return <Flashcard />
            default:
                return 'Canvas type not found'
        }
    }

    render() {
        console.log(this);
        return (
            <div className="twelve wide column">
                {this.renderCanvasType()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {})(Canvas);