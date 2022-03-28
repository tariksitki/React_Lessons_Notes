import { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = { message: "Hello" };
  //! arrow fonksiyon kullanılmadığında bind işlemi gerekli
  // handleClick() {
  //   console.log("click");
  //   this.setState({ message: "Goodbye" });
  // };[method1]

  //! arrow foksiyon kullanıldığında bind işlemine gerek yok

  handleClick() {
    //// Önemli:  class yapisinda setstate icinde {} kullanilir.
    this.setState({ message: "GoodBye" });
  }

  render() {
    return (
      <div>
        <h2>EventBinding</h2>
        <p>{this.state.message} </p>

        {/* [method1]*/}
        {/* <button onClick={this.handleClick.bind(this)} >Click</button> */}

        {/* Method2  */}
        {/* <button onClick={() => this.handleClick()} >Click</button> */}
        {/* Method3 func i tanimladigimiz yerde arrow olarak tanimlamak */}

        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
