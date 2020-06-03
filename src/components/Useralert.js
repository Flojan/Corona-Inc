import React from "react";
import styled from "styled-components";

export const StyledUseralert = styled.div`
    background-color: ${props => props.type === true ? '#D6130D' : 'blue'};
    display: ${props => props.display === true ? 'block': 'none'};
    border: none;
    color: white;
    margin-left: 50px;
    margin-right: 50px;
    padding: 1px;
`;


const Useralert = ({type, info}) => ( 
    <StyledUseralert type={type} display={type} info={info}>
        <p>{info}</p>
    </StyledUseralert>
);

export default Useralert;