import "./Card.scss"

<<<<<<< HEAD
import "./Card.scss";

const Card = ({veri}) => {
  return (
    <div className="container">
        {veri.map(eleman => {
            const {id, countries, capital, img, population} = eleman;
            return (
                <div className = "card" key = {id}>
                    <h1>{countries} </h1>
                    <img src={img} alt="" />
                    <h2>{capital} </h2>
                    <h4>{population} </h4>
                    <button className = "card-small">Small Button</button>
                    <button className = "card-large">Large Button</button>
                </div>
            )
        })}
    </div>
  )
}
export default Card;
=======

const Card = ({veri}) => {
//  {veri}= bu yazım verinin eşitinde ne varsa o demek yani App.js deki eşiti {data}. {data} nın {data}= bu yazım datanın eşiti demek yani object=dizinin elemanları
  return (
    <div className="container">

 {/* 
 map yapmadan alttaki gibi yapsaydık her card için aynı satırları yazmak zorunda kalırdık
<h1>{dataa[0].countries}</h1>
<img src={dataa[0].img}/>
 <h2>{dataa[0].capital}</h2> */}
 { veri.map((eleman)=>{
  //destructuring
  const {id, countries, capital, img,population} = eleman
  return(

<div className="card" key={id}    >
{/* react üstte unique bir veri istiyor, data nın içinde gezip verileri ayrıştırırken emin olabilmek için */}
 <h1>{ countries }</h1>
      <img src={img }/>
<h2> {capital}</h2>
<h4>{population}</h4>
  
  <button className="card--small">SMALL</button>
  <button className="card--large">LARGE</button>
      </div>


  )
 })    }

      
    </div>
  )
}

export default Card
>>>>>>> 57cdfed57daefb255f3340d4ebb052fd4b875efd
