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
        <div className="ui two column grid">
          <Sidebar />
          <Canvas />
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
