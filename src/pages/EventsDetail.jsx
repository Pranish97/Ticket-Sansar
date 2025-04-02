import React, { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import events from "../../api";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaTicketAlt, FaMicrophoneAlt } from "react-icons/fa";

const EventsDetail = () => {
  const { id } = useParams();
  const eventDetail = events.find((item) => item.id === parseInt(id));
  const location = useLocation();

  const search = location.state?.search || "";
  const category = location.state?.category || "";

  console.log(location);
  return (
    <div className="event-detail-container">
      <NavLink to={`..${search}`} relative="route" className="back-link">
        Back to {category} Page
      </NavLink>
      <div className="event-content">
        <img src={eventDetail.image} alt={eventDetail.name} />
        <div className="event-detail-text">
          <h3>
            <FaMicrophoneAlt className="event-icon" /> {eventDetail.name}
          </h3>
          <p>
            <FaMoneyBillWave className="event-icon" /> Rs {eventDetail.price}
          </p>
          <p>
            <FaCalendarAlt className="event-icon" /> Date: {eventDetail.date}
          </p>
          <p>
            <FaMapMarkerAlt className="event-icon" /> Location:{" "}
            {eventDetail.location}
          </p>
          <button
            className={eventDetail.ticket_available ? "buy-ticket" : "sold-out"}
          >
            {eventDetail.ticket_available ? "Buy Ticket" : "Sold Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
