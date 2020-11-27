import React from "react";
import styled from "styled-components";

export default function Loader() {
  return <StyledLoader></StyledLoader>;
}

const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #ff6767;
    border-color: #ff6767 transparent #ff6767 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
