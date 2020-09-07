import React from "react";
import { connect } from "react-redux";
import Quiz from "./Quiz";

class Canvas extends React.Component {
    render() {
        console.log(this);
        return (
            <div className="twelve wide column">
                Canvas
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {})(Canvas);