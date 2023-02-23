import Title from "../atoms/Titles";
import WrapperlInput from "../Molecules/WrapperInput";

function FormLogin() {
    return (
        <div>
            <Title> Universidad Politecnica De Chiapas</Title>
            <WrapperlInput 
                msn="Username"
                type="text"
                placeholder="Write UserName"
                />

            <WrapperlInput 
                msn="Password"
                type="password"
                placeholder="Write password"
                />
        </div>
      
      );
}

export default FormLogin;