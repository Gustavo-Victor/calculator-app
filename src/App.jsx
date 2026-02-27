import { useState, useEffect } from "react";
import { evaluate } from "mathjs"
import Header from "./components/Header"; 
import Button from "./components/Button"; 
import Input from "./components/Input";
import Footer from "./components/Footer";
import { Container, Content, Grid, } from "./style";
import ThemeProviderContainer from "./theme/ThemeProviderContainer";
import { blueTheme, grayTheme, purpleTheme } from "./theme/";


export default function App() {
  const[currentNumber, setCurentNumber] = useState("0");
  const [themeObject, setThemeObject] = useState(blueTheme);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      localStorage.setItem("theme", "blue");
    }
    return storedTheme || "blue";
  });

  const handleAddValue = (value) => {
    setCurentNumber(prev => prev === "0" ? String(value) : String(prev + value)); 
  }

  const handleReset = () => {
    setCurentNumber("0"); 
  }

  const handleErase = () => {
    setCurentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : "0"); 
  }

  const handleCalculate = () => {
      try {
        const result = evaluate(currentNumber); 
        setCurentNumber(String(result)); 
       }
        catch (error) {
          setCurentNumber("Error");
          console.log(error); 
        }
  }

  const toggleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    if (theme === "blue") {
      setThemeObject(blueTheme);
    } else if (theme === "gray") {
      setThemeObject(grayTheme);
    } else if (theme === "purple") {
      setThemeObject(purpleTheme);
    }
  }, [theme]);
  
  return ( 
    <ThemeProviderContainer theme={themeObject}>
      <Container>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Input value={currentNumber} />
        <Content>
          <Grid>
            <Button label={"7"} handleClick={handleAddValue} />
            <Button label={"8"} handleClick={handleAddValue} />
            <Button label={"9"} handleClick={handleAddValue} />
            <Button label={"DEL"} buttonStyle={"del"} handleClick={() => handleErase()} />

            <Button label={"4"} handleClick={handleAddValue} />
            <Button label={"5"} handleClick={handleAddValue} />
            <Button label={"6"} handleClick={handleAddValue} />
            <Button label={"+"} handleClick={handleAddValue} />

            <Button label={"1"} handleClick={handleAddValue} />
            <Button label={"2"} handleClick={handleAddValue} />
            <Button label={"3"} handleClick={handleAddValue} />
            <Button label={"-"} handleClick={handleAddValue} />

            <Button label={"."} handleClick={handleAddValue} />
            <Button label={"0"} handleClick={handleAddValue} />
            <Button label={"/"} handleClick={handleAddValue} />
            <Button label={"x"} handleClick={() => handleAddValue("*")} />

            <Button label={"RESET"} buttonStyle={"reset"} handleClick={handleReset} />
            <Button label={"="} buttonStyle={"equal"} handleClick={() => handleCalculate()} />
          </Grid>
        </Content>
        <Footer />
      </Container>
    </ThemeProviderContainer>
  )
} 