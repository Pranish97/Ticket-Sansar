import React from "react";
import {
  FaMusic,
  FaPaintBrush,
  FaFootballBall,
  FaUtensils,
  FaTheaterMasks,
  FaList,
} from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams , setSearchParams] = useSearchParams()
    const categoryFilter = searchParams.get("category")

  return (
    <div className="home-container">
      <h2>Event Based On Categories</h2>
      <div className="button-section">
        <button>
          <FaList /> All
        </button>
        <button>
          <FaMusic /> Live Music
        </button>
        <button>
          <FaPaintBrush /> Art
        </button>
        <button>
          <FaFootballBall /> Sports
        </button>
        <button>
          <FaUtensils /> Food
        </button>
        <button>
          <FaTheaterMasks /> Theater
        </button>
      </div>
    </div>
  );
};

export default Home;
