

import styled, {css} from "styled-components";

export default styled.a`
    font-size: 1rem;
    transition: ease 0.25s all;
    text-decoration: none;
    color: #fff;

    ${props => props.secondary && 
    css`
        background-color: red;
        border-radius: 8px;
        padding: 15px;

        :hover {
            font-size : 3rem;
            opacity : 0.6;
        }
        
    `}
`;

// hover disarida da calisiyor