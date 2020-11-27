import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Component
import Game from "../components/Game";
import Loader from "../components/Loader";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";

export default function Home() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //FETCH DATA
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back
  const { popular, newGames, upcoming, searched, isLoading } = useSelector(
    (state) => state.games
  );
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2>Upcoming Games</h2>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </>
        )}
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
