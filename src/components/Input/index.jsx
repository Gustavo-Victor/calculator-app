import { InputContainer } from "./style";

export default function Input({value}) {
  return (
    <InputContainer>
      <input type="text" value={value}  readOnly/>
    </InputContainer>
  ); 
}
