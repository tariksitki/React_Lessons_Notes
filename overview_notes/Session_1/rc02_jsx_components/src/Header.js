

const pStyle = {
    fontFamily : "Tahoma",
    color : "yellow"
};

function Header() {

    return (
        <div style={{backgroundColor : "purple", color : "white", textAlign : "center" }}>
            <h1>Clarusway</h1>
            <p style={pStyle}>Hello World</p>
            {/* pStyle zaten object 
            3. yöntem css dosyasi yapip import etmek */}
        </div>
    );

};

export default Header;  

