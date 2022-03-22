
const internalStyle = {
    div : {
        backgroundColor : "green",
        width : "90%",
        border : "2px solid black",
        margin : "auto"
    },
    parag : {
        color : "#ffaacc",
        textDecoration : "underline",
        textAlign : "center"
    }
}

    /// disarida tanimladigimiz bu object, func icinde de tanimlanabilir
    // app.js den gelen color özelligini hemen gelir gelmez destructure ettigimiz icin asagi da background yaninda yazarken tekrar {} e gerek kalmadi


const Inline = ({colorr, textColor}) => {
    return ( 
                /// inline
        <div>
            <div style={{backgroundColor : colorr , color : textColor}}>
                <h1>Inline Style Div</h1>
            </div>
                 {/* internal  */}
            <div style={internalStyle.div}>
                <h2 style={internalStyle.parag}>Internal Style Div</h2>
            </div>
        </div>
    )
};

export default Inline;