

import styled from "styled-components";

const MyButton = styled.button`

    background-color: ${props => props.color ? "blue" : "purple"};
    border:none;
    margin:2px;
    color:#fff;
    padding:12px 25px;
    display:inline-block;
    cursor:pointer;
    font-size:18px;

`;

export default MyButton;