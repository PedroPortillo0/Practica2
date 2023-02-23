import styled from 'styled-components';


const StyledInput = styled.input`
 border: 1px solid red;
`;

function Input({type, placeholder}){
    return(
        <StyledInput type={type} placeholder= {placeholder} />
    )
}
export default Input;