import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadDetail, loadingDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../utils";
import { popup } from "../animation";

import SubLoader from "./SubLoader";

export default function Game({ name, released, image, id }) {
  const stringPathId = id.toString();
  const { isLoading } = useSelector((state) => state.detail);
  //Load details
  const dispatch = useDispatch();
  const loadDetailHandler = (e) => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
    // document.querySelector(".loader").classList.add("active");
    const game_id = document.getElementById(`${id}`);
    game_id.classList.add("active");
  };

  const showLoader = () => {};

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      id="game"
    >
      <Link to={`games/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
        <div className="loader" id={id}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .loader {
    display: none;
  }
  .active {
    display: inline-block !important;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    div {
      position: absolute;
      width: 6px;
      height: 6px;
      background: #ddd;
      border-radius: 50%;
      animation: lds-default 1.2s linear infinite;
    }
    div:nth-child(1) {
      animation-delay: 0s;
      top: 37px;
      left: 66px;
    }
    div:nth-child(2) {
      animation-delay: -0.1s;
      top: 22px;
      left: 62px;
    }
    div:nth-child(3) {
      animation-delay: -0.2s;
      top: 11px;
      left: 52px;
    }
    div:nth-child(4) {
      animation-delay: -0.3s;
      top: 7px;
      left: 37px;
    }
    div:nth-child(5) {
      animation-delay: -0.4s;
      top: 11px;
      left: 22px;
    }
    div:nth-child(6) {
      animation-delay: -0.5s;
      top: 22px;
      left: 11px;
    }
    div:nth-child(7) {
      animation-delay: -0.6s;
      top: 37px;
      left: 7px;
    }
    div:nth-child(8) {
      animation-delay: -0.7s;
      top: 52px;
      left: 11px;
    }
    div:nth-child(9) {
      animation-delay: -0.8s;
      top: 62px;
      left: 22px;
    }
    div:nth-child(10) {
      animation-delay: -0.9s;
      top: 66px;
      left: 37px;
    }
    div:nth-child(11) {
      animation-delay: -1s;
      top: 62px;
      left: 52px;
    }
    div:nth-child(12) {
      animation-delay: -1.1s;
      top: 52px;
      left: 62px;
    }

    @keyframes lds-default {
      0%,
      20%,
      80%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
    }
  }
`;
