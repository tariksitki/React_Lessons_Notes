// onChange event:
// const Pre_class = () => {
//     const handleChange = function (e) {
//         console.log(e.target.value);
//     }

//     return (
//         <input type="text" onChange={handleChange} />
//     )

// };

// export default Pre_class;

// direkt onchange icinde func:
// const Pre_class = () => {

//     return (
//         <input type="text" onChange={(e) => {
//             console.log(e.target.value);
//         }} />
//     )

// };

// export default Pre_class;

// const Pre_class = () => {
//     return (
//         <input type="text" onChange={function(e) {
//             console.log(e.target.value);
//         } } />
//     )
// };
// export default Pre_class;

// event handler a parameter gönderme:
// Not: class icinde tanimlanan func larda const let kullanilmaz. kendine ait bir method olur

// import React, {Component} from "react";

// export default class Salute extends Component {
//         myEvent = (argument) => {
//             return (
//                 console.log(argument)
//             )
//         }

//         render () {
//             return (
//                 <div>
//                     <button onClick={() => this.myEvent("React Argument")}>React Button </button>

//                     <button onClick={() => {
//                         this.myEvent("Js");
//                     }} >Js Button </button>
//                 </div>
//             )
//         }
//     };

// onclick icine direkt kendi func imizi yazarsak, direkt cagrilir. bu nedenle önce () => kullanmaliyiz

//////// bind konusu:

// 3 tane yöntem var:
// 1: constructor icinde bind
// 2: onclick icinde bind
// 3: event in func inini tanimlarken arrow olarak tanimlamak

// import React, { Component } from "react";

// export default class Salute extends Component {
//   // bind ikinci method:
//   // constructor (props) {
//   //     super(props);
//   //     this.myEvent = this.myEvent.bind(this);
//   // }

//   // 3. Method: event handler i arrow yapmak
     // arrow func tanimlamasini asagida onclick icinde de yapabilirz
//   // önce asagidan gönderilen degeri almak icin number yazdik. sonra da e mizi yaziyoruz
//   myEvent = (number, e) => {
//     console.log(number);
//   };

//   render() {
//     return (
//       <div>
//         {/* bind birinci method */}
//         {/* <button onClick={this.myEvent.bind(this)}>React Button </button> */}

//         {/* onclick icinde event handler a deger gönderme bind iki deger alir. eger this yazmaz isek 33 ü this olarak algilar 
// iki deger aldigi icin ayni an da hem bind edip hem de deger gönderebiliriz  */}
//         <button onClick={this.myEvent.bind(this, 33)}>React Button </button>
//       </div>
//     );
//   }
// }




        // func component kullandigimizda, onclick icerisinde event handler 
        // cagrilirken this kullanmiyoruz. bu nedenle func componentlarda 
        // this kullanimi tamamen ortadan kalkiyor

    // export default function Pre_Class () {
    //     const buttonHandler = function () {
    //         console.log("Hello World");
    //     }

    //     return (
    //         <div>   
    //             <button onClick={buttonHandler}>
    //                 Func Component
    //             </button>
    //         </div>
    //     )
    // } 








    // import React, { Component } from 'react'
    
    // export default class Pre_class extends Component {

    //     constructor(props) {
    //       super(props)
    //         // baslangicta this kullandigimiz icin state icinde this e gerek yok
    //       this.state = {
    //          message : "Hello"
    //       }
    //     }

    //     eventHandler () {
    //         this.setState({
    //             message : "Good Bye"
    //         })
    //     }

    //   render() {
    //     return (
    //       <div>
    //           <div>{this.state.message}</div>
    //           <button onClick={this.eventHandler.bind(this)}> Button </button>
    //       </div>
    //     )
    //   }
    // }





            /// class component da eventhandler sadece console 
            // da bir yazi yazdiracak ise bu durumda bind islemine 
            // gerek yok. 

    // import React, { Component } from 'react'
    
    // export default class Pre_class extends Component {
    //     eventHandler () {
    //         console.log("clicked button");
    //     }

    //   render() {
    //     return (
    //       <div>
    //           <button onClick={this.eventHandler} >Click</button>
    //       </div>
    //     )
    //   }
    // }
    
    

    