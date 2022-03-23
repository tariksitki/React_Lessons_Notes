
import React, { Component } from 'react';

  // PropTypes:
import PropTypes from 'prop-types';


    class Card extends React.Component {
          /// state i kullanmak icin en uygun yer constructor
          // constructor, extend ettigimiz react component den gelir

          constructor () {
            super();

            this.state = {
              showContent : "State Text"
            };
          }

      static defaultProps = {
        cardText : "Default Text"
      }

        render() {
          return (
            <div className="card">
                  <img src= {this.props.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title{this.props.number} </h5>
                    <p className="card-text">{this.props.cardText} </p>
                    <p className="card-text"><small className="text-muted">{this.props.cardTime} </small></p>
                  </div>
                          {/* state Text */}
                  <p>{this.state.showContent} </p>
              </div>
          )
        }
    }



    /// Default Props:  componentin kendi dosyasinda export etmeden önce yazilir.
    // app js den yada veri tabanindan veri gelmediginde default olur
  
    // bunun yerine static de kullanilabilir:
// Card.defaultProps = {
//   cardText : "Default Text"
// };

Card.propTypes = {
  cardTime : PropTypes.string.isRequired
}
// eger array verirsek ve gelen veri de string olursa console da hata aliriz
// required oldugunda veri gelmez ise yine console da hata aliriz

export default Card;


