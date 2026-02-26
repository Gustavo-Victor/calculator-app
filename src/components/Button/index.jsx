import { ButtonContainer } from "./style";

export default function Button({label, handleClick, equal, reset}) {
  return (
    <ButtonContainer 
        className={`${equal ? "equal" : ""} ${reset ? "reset" : ""}`}
        onClick={handleClick}>
        {label}
    </ButtonContainer>
  )
}
