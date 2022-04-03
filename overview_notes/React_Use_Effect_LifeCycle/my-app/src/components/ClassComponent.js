
import React, {Component} from "react";

class ClassComponent extends React.Component {
  // önceden props kullanabilmek icin constructor tanimliyorduk ve super ile de props lari aliyorduk. simdi disarida tanimlayabiliyoruz
  // constructor (props) {
  //   super(props)
  //   this.state = {count : 0}
  // }

  state = {count : 0};
  // tanimlarken this yok cagirirken var

    // class yapida method tanimlanir. const gerek yok
  handleIncrease = () => {
    return (
      this.setState({count : this.state.count + 1})
    )
  }

    /// Önemli: Class yapilarda, state yeni bir veri ekledigimizde eskisi silinmez.
    // eskisi tutulur yenisi ilave edilir. console dan bakabilirz ama func yapilarda, eskisi tutulmaz yenisi üzerine overwrite edilir.Bu nedenle func yapilarda {...state} ile eskisini tutar yenisini ilave ederiz.
    handleAddName = () => this.setState({name : "Felix"});

  componentDidMount() {
    console.log("ComponentDidMount")
    // component imiz dogar dogmaz count 1 artsin diyoruz. State degistigi icin render da yeniden calisacak
    // state her degistiginde render calisir ama didmount sadece ilk dogunca 1 defa
    // bu methodlarin hepsi mount evresinin asamasidir
    // this.handleIncrease();
  }
  // Bu methodu baska yerde cagirmaya gerek yok direkt calisir


      // ilk sayfa yenilendiginde calismaz. update edilince önce render calisir sonra update calisir.
  componentDidUpdate = (prevProps, prevState) => {
    console.log("ComponentDidUpdate");
    // Bu method da bir degisiklik oldugu icin, icerisine eski props ve state leri property olarak alir. Her seferinde bir önceki hallerini alir. komple eskileri getirmez . Burada isimler anahtar kelime degil sadece yerleri önemli. isimler degisebilir ama yerler degismez
    // burada props dan kasit parent dan gelen propslardir
    console.log(prevProps);
    console.log(prevState);

      // kosullu islemler yapilabilir
    prevState.count !== this.state.count && console.log("State Updated"); 
  }


  render () {
    // console.log(this.state);

    // calisma sirasi: önce constructor, sonra render sonra componentDidMount
    console.log("Render");

    return (
      <div className="class">
          <h2>Class Component</h2>
          <h3>Count: {this.state.count}</h3>
          <button onClick={this.handleIncrease}>Increase</button> <br />

          <span>Name: {this.state.name}</span> <br />
          <button onClick={this.handleAddName}>Add Name</button>
      </div >
    )
  }
}

export default ClassComponent;