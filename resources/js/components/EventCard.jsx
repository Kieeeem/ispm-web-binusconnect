// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ category, title, image }) => {
  return (
    <div className="event-card bg-white rounded-[12px] border shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[150px] object-cover rounded-t-lg"
      />

      <div className="event-info">
        <span className="text-xs font-medium px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-blue-600 uppercase w-fit">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-blue-500 text-sm cursor-pointer hover:underline">
          Selengkapnya
        </p>
      </div>
    </div>
  );
};

export default EventCard;
