  /// class based component de component i import cok önemli

// import React, {Component} from "react";
  // 2. method:

import React from "react";
import {Component} from "react";
  // Cok önemli: Component import ederken {} icinde

const footerStyle = {
  textAlign : "center",
  backgroundColor : "blue",
  color : "white"
}
  class Footer extends Component {
    render () {
      return (
        <div>
          <h1 style={footerStyle}>Footer CopyRight {new Date().getFullYear()} </h1>
        </div>
      )
    }
  };

  export default Footer; 







