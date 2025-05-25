import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import EventForm from "../Components/EventForm";
import { fetchEvents, addEvent } from "../services/eventService"; // ✅

const EventPage = () => {
  const [events, setEvents] = useState([]);

  // Fetch from MongoDB backend
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to load events:", error);
      }
    };
    loadEvents();
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      const added = await addEvent(newEvent); // ✅ Save to backend
      setEvents((prev) => [added, ...prev]); // ✅ Add to frontend
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  return (
    <div className="mt-24 bg-[#040313] min-h-screen text-white">
      <h1 className="text-center text-3xl font-bold mb-4 mt-10">Our Events</h1>
      <EventForm onSubmit={handleAddEvent} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {events.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
