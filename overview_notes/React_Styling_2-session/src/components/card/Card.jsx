

// //  {veri}= bu yazım verinin eşitinde ne varsa o demek yani App.js deki eşiti {data}. {data} nın {data}= bu yazım datanın eşiti demek yani object=dizinin elemanları


import "./Card.scss";
import "../../sass/style.scss";

const Card = ({veri}) => {
  console.log(veri);
  return (
    <div className="container">
        {veri.map(item => {
          const {id, img, countries, capital, population} = item;
          console.log(id);
          return (
            //  react üstte unique bir veri istiyor, data nın içinde gezip verileri ayrıştırırken emin olabilmek için
            <div className="card" key = {id}>
              <h1> {countries} </h1>
              <img src= {img} alt="" />
              <h2>{capital} </h2>
              <h4>{population} </h4>

              <button className="card--small" >Small</button>
              <button className="card--large" >Large</button>
          </div>
          )
        }) }
    </div>  
  )
};

export default Card;