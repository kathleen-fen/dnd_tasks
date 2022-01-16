import React, { useRef } from "react";
import styled from "styled-components";

const TextAreaContainer = styled.textarea`
  outline: none;
  border: 0;
  width: 100%;
  background-color: transparent;
`;

export const TextArea = (props) => {
  const inputEl = useRef(null);

  return (
    <TextAreaContainer
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
