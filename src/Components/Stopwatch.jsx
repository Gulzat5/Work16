import { useState } from "react";
import { UseStopwatch } from "../Hooks/UseStopwatch";
import { styled } from "styled-components";
export const StopWatch = () => {
  const [inputValue, setInputValue] = useState(1);
  const { Restart, Stop, StartCount, count, active } = UseStopwatch(inputValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>{count}</h2>
        <Input type="number" value={inputValue} onChange={handleInputChange} />
        <div>
          <Button onClick={StartCount}>Start</Button>
          <Button onClick={Stop}>Stop</Button>
          <Button onClick={Restart}> Restrat</Button>
        </div>
      </form>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 0px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  &:active {
    outline: none;
  }
`;

const Button = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  background: #fff;
  overflow: hidden;
  border: 2px solid #2c0b8e;
  color: #2c0b8e;

  &:hover {
    color: #fff;
  }
  &:after {
    height: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background: #2c0b8e;
  }
`;
