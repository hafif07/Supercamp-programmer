import React, { Component } from "react";
import Program3hari from "../../../Component/Program3hari/Program3hari";

class Program3HariContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Program3hari />
      </div>
    );
  }
}
export default Program3HariContainer;
