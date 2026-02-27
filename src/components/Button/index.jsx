import { ButtonContainer } from "./style";

export default function Button({label, handleClick, buttonStyle}) {
  const handleButtonClick = () => {
    if(handleClick) {
      handleClick(label); 
    }
  }

  return (
    <ButtonContainer
        className={`${buttonStyle ? buttonStyle : ""}`}
        onClick={handleButtonClick}>
        {label}
    </ButtonContainer>
  )
}
