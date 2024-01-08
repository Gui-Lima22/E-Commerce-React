import "@fortawesome/fontawesome-free/css/all.css"
import styled from "styled-components";
import {MDBIcon} from "mdb-react-ui-kit";
import {InputHTMLAttributes} from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    border: 1px solid;
    border-radius: 8px;
    background-color: var(--background-color);
    
    padding: 10px 16px;
    
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;
    
    i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const PrimaryInputWithIcon = (props: InputProps) => {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <MDBIcon fas icon="search" />
        </InputContainer>
    );
}

export default PrimaryInputWithIcon;