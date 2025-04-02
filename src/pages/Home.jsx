import React, { useState } from "react";
import {
  FaMusic,
  FaPaintBrush,
  FaFootballBall,
  FaUtensils,
  FaTheaterMasks,
  FaList,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import Events  from "../../api"
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaTicketAlt, FaMicrophoneAlt } from "react-icons/fa";



const Home = () => {
  const [events, setEvents] = useState(Events)
    const [searchParams , setSearchParams] = useSearchParams()
    const categoryFilter = searchParams.get("category")


    const displayFilter = categoryFilter ? 
    events.filter(event => event.category === categoryFilter) : 
    events

   

    const eventsElem = displayFilter.map((items)=>{
      return (
        <div key={items.id} className="events-box">
          <Link to={`/${items.id}`}
          state={{
            search: `?${searchParams.toString()}`, 
            category: categoryFilter 
        }}
          >
        <img src={items.image} alt={items.name} />
        <h3><FaMicrophoneAlt className="event-icon" /> {items.name}</h3>
        <p><FaMoneyBillWave className="event-icon"  /> Rs {items.price}</p>
        <p><FaCalendarAlt className="event-icon"  /> Date: {items.date}</p>
        <p><FaMapMarkerAlt className="event-icon"  /> Location: {items.location}</p>
        <button className={items.ticket_available ? "buy-ticket" : "sold-out"}>
          <FaTicketAlt className="ticket-icon" /> {items.ticket_available ? "Buy Ticket" : "Sold Out"}
        </button>
        </Link>
      </div>
     
      )
    })

    function handleFilterChange(key, value) {
      setSearchParams(prevParams => {
          if (value === null) {
              prevParams.delete(key)
          } else {
              prevParams.set(key, value)
          }
          return prevParams
      })
  }

  return (
    <div className="home-container">
      <h2>Event Based On Categories</h2>
      <div className="button-section">
        <button onClick={() => handleFilterChange("category", null)}
          className={categoryFilter === null ? "selected" : "" }>
          <FaList /> All
        </button>
        <button onClick={() => handleFilterChange("category", "Live")}
          className={categoryFilter === "Live" ? "selected": ""}>
          <FaMusic /> Live Music
        </button>
        <button onClick={() => handleFilterChange("category", "Art & Theater")}
          className={categoryFilter === "Art & Theater" ? "selected" : ""}>
          <FaPaintBrush /> Art
        </button>
        <button onClick={() => handleFilterChange("category", "Sports")}
          className={categoryFilter === "Sports" ? "selected" :  ""}
          >
          <FaFootballBall /> Sports
        </button>
        <button onClick={() => handleFilterChange("category", "Foods")}
          className={categoryFilter === "Foods" ? "selected" : ""}
          >
          <FaUtensils /> Food
        </button>
        <button onClick={() => handleFilterChange("category", "Theaters")}
          className={categoryFilter === "Theaters" ? "selected" : ""}
          >
          <FaTheaterMasks /> Theater
        </button>
      </div>
      <div className="events-container">
        {eventsElem}
      </div>
    </div>
  );
};

export default Home;
