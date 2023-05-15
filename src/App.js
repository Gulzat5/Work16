import { UseCounter } from "./Hooks/Counter";
import { styled } from "styled-components";
import "./App.css";
import { StopWatch } from "./Components/Stopwatch";
import { Input } from "./Components/Input";
function App() {
  const { count, inc, dec, reset } = UseCounter();
  return (
    <div>
      <Input></Input>
      <hr />
      <StopWatch />
      <hr />
      <h1>{count}</h1>
      <ButtonCon>
        <Button onClick={() => dec(4)}>-</Button>
        <Button onClick={() => inc(2)}>+</Button>
        <Button onClick={reset}>Reset</Button>
      </ButtonCon>
    </div>
  );
}

export default App;
const ButtonCon = styled.div`
  display: flex;
`;
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* gap: 10px;
//   width: 00px;
//   height: 90px; */
//   gap: 20px;
//   margin-left: 40%;
// `;
const Button = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
