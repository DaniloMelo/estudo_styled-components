import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import { Wrapper } from "./components/Wrapper";

function App() {

  const [count, setCount] = useState(0)


  return (
    <Wrapper>
      <Display>{count}</Display>
      <div>
        <Button bgColor='#F65' hoverColor='red' click={_ => setCount(count - 1)}>Decrementar</Button>
        <Button click={_ => setCount(count + 1)}>Incrementar</Button>
      </div>
    </Wrapper>
  )
}

export default App
