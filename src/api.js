// Base URL
const base_url = "https://api.rawg.io/api/";

//Geeting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
console.log(currentDate);
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering+-added&page_size=10`;

// New Games
const new_games = `games?date=${lastYear},${currentDate}&ordering=-released&page_size+=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

export const newGamesURL = () => `${base_url}${new_games}`;

// GAME DETAILS API

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

//Game Screenshot
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

// Searched game

export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
