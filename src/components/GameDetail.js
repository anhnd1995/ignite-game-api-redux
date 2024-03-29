import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Import redux
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../utils";
// Image
import playstation4 from "../img/PS4.svg";
import playstation5 from "../img/PS5.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import xboxX from "../img/xbox-X.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

import { exitDetail } from "../actions/detailAction";

export default function GameDetail({ pathId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      dispatch(exitDetail());
      document.body.style.overflow = "auto";
      const game_id = document.getElementById(`${pathId}`);
      game_id.classList.remove("active");
      history.push("/");
    }
  };

  // Render Platform Icon
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation5;
      case "PlayStation 4":
        return playstation4;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xboxX;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;

      default:
        return gamepad;
    }
  };

  // Star icon render
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.map((screen) => (
                <motion.img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .rating img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  flex-grow: 3;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    flex: 0 1 50px;
    margin-left: 1.5rem;
    height: 50px;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;
