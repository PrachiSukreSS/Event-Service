import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import EventForm from "../Components/EventForm";
import { fetchEvents, addEvent } from "../services/eventService";

const EventPage = () => {
  const [events, setEvents] = useState([]);

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
      const added = await addEvent(newEvent);
      setEvents((prev) => [added, ...prev]);
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  return (
    <div className="mt-24 bg-[#0a0112] min-h-screen text-gray-300 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-xl mx-auto py-1 ">
        <h3 className="text-center text-4xl md:text-5xl font-extrabold mb-8 mt-12 tracking-wide">
          Our Events
        </h3>
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <EventForm onSubmit={handleAddEvent} />
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
