import React, { useRef } from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  background-color: transparent;
`;

export const Input = (props) => {
  const inputEl = useRef(null);

  return (
    <InputContainer
      ref={inputEl}
      onBlur={props.onBlur}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      autoFocus
      onKeyDown={props.onKeyDown}
    />
  );
};
