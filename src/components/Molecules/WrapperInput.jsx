import Label from "../atoms/Label";
import Input from "../atoms/Input";
import styled from 'styled-components';

const StyledWrapperInput = styled.div`
border: 1px solid red;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction: column;
`;

function WrapperlInput({msn,type,placeholder}) {
    return ( 
        <StyledWrapperInput>
        <Label msn={msn}/>
        <Input type={type} placeholder={placeholder}/>
        </StyledWrapperInput>
     );
}

export default WrapperlInput;