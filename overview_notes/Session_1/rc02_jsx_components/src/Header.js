

/// styling with global variable:

const HeaderStyle = {
    fontFamily : "arial",
    fontSize : "2rem",
    color : "black",
    textTransform : "lowercase"
};

function Header () {
    return (
                //// inline styling:
        <div style={{backgroundColor : "red", color : "white", textAlign : "center"}}>

                {/* Global styling (Burada tek süslü cünkü degisken kendisi bir object)*/}
            <h1 style={HeaderStyle}> Hello World Header</h1>
            <p>Hello World p</p>
        </div>
    )
};




        /// styling with local variable:

    function Header2 () {
        const localVar = {
            color : "purple",
            backgroundColor : "yellow",
            textDecoration : "underline"
        }
            return (
                <div style={localVar}>
                    <h1> Hello World Header</h1>
                    <p>Hello World p</p>
                </div>
            )
        };

        // default u bir kere kullanmaya izin veriyor. diger export da da {} istiyor. ama bunu cagirirken de {}

export {Header};
export default Header2;


