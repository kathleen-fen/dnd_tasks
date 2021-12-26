import "./Loader.css";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: gray;
  filter: opacity(50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <Container id="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
