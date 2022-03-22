
import "./styleSheet.css";

const StyleSheet = ({secenek}) => {
    // let isSecenek = secenek == true ? "once" : "sonra";
    let isSecenek = secenek == true ? "once" : "sonra";
    return (
        <>
            <img className = "logo" src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg" alt="" />
            
            <div>
                <h1 className="header">External Css </h1>
                <p className="once">External Css After</p>
                <p className="sonra">External Css Before</p>

                  {/* props kullanimi */}
                <p className= {secenek == true ? "once" : "sonra"} >External Css with Props</p>

                <p className = {isSecenek} >External Css with Props</p>
            </div>
        </>
    )
};

export default StyleSheet;