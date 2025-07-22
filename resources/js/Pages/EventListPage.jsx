// src/pages/EventListPage.jsx
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import '../css/EventListPage.css';
import { FiSearch } from 'react-icons/fi';
import '@fontsource/poppins'; // Mengimpor semua varian font

const dummyEvents = [
  { id: 1, category: 'WEBINAR', title: 'Digital Banking Basics', image: '/images/contoh_webinar.png' },
  { id: 2, category: 'LOMBA', title: 'Tech Innovation Challenge', image: '/images/contoh_webinar.png' },
  { id: 3, category: 'COMSERV', title: 'Community Service Event', image: '/images/contoh_webinar.png' },
  { id: 4, category: 'WORKSHOP', title: 'Hands-on Coding', image: '/images/contoh_webinar.png' },
  { id: 5, category: 'WEBINAR', title: 'AI in Business', image: '/images/contoh_webinar.png' },
  { id: 6, category: 'LOMBA', title: 'Hackathon 2025', image: '/images/contoh_webinar.png' },
  { id: 7, category: 'WEBINAR', title: 'Digital Banking Basics', image: '/images/contoh_webinar.png' },
  { id: 8, category: 'LOMBA', title: 'Tech Innovation Challenge', image: '/images/contoh_webinar.png' },
  { id: 9, category: 'COMSERV', title: 'Community Service Event', image: '/images/contoh_webinar.png' },
  { id: 10, category: 'WORKSHOP', title: 'Hands-on Coding', image: '/images/contoh_webinar.png' },
  { id: 11, category: 'WEBINAR', title: 'AI in Business', image: '/images/contoh_webinar.png' },
  { id: 12, category: 'LOMBA', title: 'Hackathon 2025', image: '/images/contoh_webinar.png' },
];

const EventListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents =
    selectedCategory === 'All'
      ? dummyEvents
      : dummyEvents.filter((event) => event.category === selectedCategory);

  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Navigation Bar</h1>

      <div className="search-wrapper">
        <FiSearch size={20} className="search-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search event favoritmu"
          className="event-search"
        />
      </div>
        
      <div className="category-buttons">
        {['All', 'Webinar', 'Lomba', 'ComServ', 'Workshop'].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : 'inactive' }
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="event-grid">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            category={event.category}
            title={event.title}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default EventListPage;
