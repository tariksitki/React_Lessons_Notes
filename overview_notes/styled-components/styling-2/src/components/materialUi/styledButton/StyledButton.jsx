

import {Button} from "@mui/material";
import { makeStyles } from "@mui/styles";


const kendiStilim = makeStyles({
    btn : {
        background : 'Linear-gradient(45deg, #FF688B, #FF8E53)',
        border: 0,
        borderRadius: 7,
        color: 'red',
        padding: '10px 50px',
        marginBottom: '1rem',
        fontSize:"25px"
    },

    header : {
        color : "white"
    }
});


// kendistilim obje tutan bi fonksiyon olmuş oluyor burda
const StyledButton = () => {
    const classes = kendiStilim();

    return (
        <button className={classes.btn}> Kendi Stilimiz</button>
    )
}

export default StyledButton;