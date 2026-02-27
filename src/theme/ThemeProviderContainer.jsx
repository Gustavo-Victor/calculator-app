import { ThemeProvider } from "styled-components"; 

export default function ThemeProviderContainer({children, theme}) {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}
