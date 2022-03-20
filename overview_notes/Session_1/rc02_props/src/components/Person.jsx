import Message from "./Message.jsx";


        /// eger cok parameter yoksa asagidaki daha mantikli
        // ama cok varsa normal destructur
const Person = function({name, tel, img}) {
    // console.log(props);
        // en kolay yöntem yolda destructur
        // ama normal de yapilabilir 
    // let {name, tel, img} = props;
    // destuctur etmeden her seferinde props.tel de kullanilabilir
    return (
        // <div>
        //     <Message />
        //     <p>{props.name}</p>
        //     <p>{props.tel}</p>
        //     <img src={props.img} alt="" />
        // </div>

        <div>
        <Message name = {name} />
        <p>{name}</p>
        <p>{tel}</p>
        <img src={img} alt="" />
    </div>
    )
};

export default Person;