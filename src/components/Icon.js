import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25px;
  padding-left: 8px;
  cursor: pointer;
`;

export const Icon = (props) => {
  return (
    <ImgContainer onClick={props.onClick}>
      <img src={props.img} alt="icon" />
    </ImgContainer>
  );
};
