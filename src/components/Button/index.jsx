import { Btn } from "./style";

export default function Button({children, handleClick}) {
  return (
    <Btn 
        className="btn"
        onClick={handleClick}>
        {children}
    </Btn>
  )
}
