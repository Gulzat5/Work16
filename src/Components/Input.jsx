import React from "react";
import { UseInput } from "../Hooks/UseInput";
import { styled } from "styled-components";

export function Input() {
  const email = UseInput("", "email");
  const password = UseInput("", "password");
  const date = UseInput("", "date");

  const onValide = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };
  return (
    <Container>
      <div>
        <label htmlFor="email">Email</label>
        <InputValidation
          type="email"
          id="email"
          value={email.value}
          onChange={email.onchange}
          onBlur={onValide.email}
        />
        <Button type="submit" onClick={onValide.email}>
          submit
        </Button>
      </div>
      {email.error && <span> {email.error}</span>}

      <div>
        <label htmlFor="password">Password</label>
        <InputValidation
          id="password"
          type="password"
          value={password.value}
          onChange={password.onchange}
          onBlur={onValide.password}
        />
        <Button type="submit" onClick={onValide.password}>
          submit
        </Button>
      </div>
      {email.error && <span> {password.error}</span>}
      <div>
        <label htmlFor="date">Date</label>
        <InputValidation
          type="date"
          value={date.value}
          onChange={date.onchange}
        />
        <Button type="submit" onClick={onValide.date}>
          submit
        </Button>
      </div>
      {date.error && <span> {date.error}</span>}
    </Container>
  );
}
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
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #2c0b8e;
  }
`;

const InputValidation = styled.input`
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

const Container = styled.div`
  background-color: #87cefa;
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin-left: 30%;
`;
