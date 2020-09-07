import React from "react";
import { fetchData } from "../actions/dataActions";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

class Container extends React.Component {
  componentDidMount = () => {
    this.props.fetchData();
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segments two column grid">
          <div className="four wide column">
            <div className="ui segment">
              <Sidebar />
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui segment">
              <Canvas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.data;
};
export default connect(mapStateToProps, {
  fetchData,
})(Container);
