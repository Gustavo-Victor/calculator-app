import { Container, Content, Grid, } from "./style"; 
import Button from "./components/Button"; 
import Input from "./components/Input";

export default function App() {
  return ( 
    <Container>
      <Content>
        <Input />
        <Grid>
          <Button label={7} />
          <Button label={8} />
          <Button label={9} />
          <Button label={"DEL"} />

          <Button label={4} />
          <Button label={5} />
          <Button label={6} />
          <Button label={"+"} />

          <Button label={1} />
          <Button label={2} />
          <Button label={3} />
          <Button label={"-"} />

          <Button label={"."} />
          <Button label={0} />
          <Button label={"/"} />
          <Button label={"x"} />

          <Button label={"RESET"} reset={true} />
          <Button label={"="} equal={true} />
        </Grid>
      </Content>
    </Container>
  )
} 