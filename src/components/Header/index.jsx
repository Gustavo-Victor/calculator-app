import { HeaderContainer, ThemeContainer } from "./style";

export default function Header({toggleTheme, currentTheme}) {
    const changeTheme = (theme) => { 
        // console.log(theme); 
        toggleTheme(theme);
    }

  return (
    <HeaderContainer>
        <span className="logo">calc</span>

        <ThemeContainer>
            <span>THEME</span>
            <div className="theme-info">
                <div className="theme-options">
                    <span className={currentTheme === "blue" ? "active" : ""} onClick={() => changeTheme("blue")}>1</span>
                    <span className={currentTheme === "gray" ? "active" : ""} onClick={() => changeTheme("gray")}>2</span>
                    <span className={currentTheme === "purple" ? "active" : ""} onClick={() => changeTheme("purple")}>3</span>
                </div>
                <div className="theme-toggler">
                    <button 
                        className={`theme-toggler-button ${currentTheme === "blue" ? "active" : ""}`}
                        value={1}
                        onClick={() => changeTheme("gray")}></button>
                    <button 
                        className={`theme-toggler-button ${currentTheme === "gray" ? "active" : ""}`}
                        value={1}
                        onClick={() => changeTheme("purple")}></button>
                    <button 
                        className={`theme-toggler-button ${currentTheme === "purple" ? "active" : ""}`}
                        value={1}
                        onClick={() => changeTheme("blue")}></button>
                </div>
            </div>
        </ThemeContainer>
    </HeaderContainer>
  )
}
