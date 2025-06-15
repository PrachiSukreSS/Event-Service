import React, { useEffect, useState } from "react";
import EventCard from "../Components/Eventcard";
import EventForm from "../Components/EventForm";
import {
  fetchEvents,
  addEvent,
  deleteEvent,
  updateEvent,
} from "../services/eventService";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  // 🔄 Fetch Events on Mount
  const loadEvents = async () => {
    try {
      const data = await fetchEvents();
      setEvents(data);
    } catch (error) {
      console.error("❌ Failed to load events:", error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  // ➕ Add Event
  const handleAddEvent = async (newEvent) => {
    try {
      const added = await addEvent(newEvent);
      setEvents((prev) => [added.event, ...prev]); // added.event because backend sends { message, event }
    } catch (error) {
      console.error("❌ Failed to add event:", error);
    }
  };

  // ❌ Delete Event
  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (error) {
      console.error("❌ Failed to delete event:", error);
    }
  };

  // ✏️ Edit Event (basic version using prompt)
  const handleEdit = async (id) => {
    const eventToEdit = events.find((e) => e._id === id);
    if (!eventToEdit) return;

    const newTitle = prompt("Edit Title:", eventToEdit.title);
    const newDate = prompt("Edit Date:", eventToEdit.date);
    const newDescription = prompt("Edit Description:", eventToEdit.description);

    if (!newTitle || !newDate || !newDescription) return;

    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("date", newDate);
    formData.append("description", newDescription);

    try {
      const response = await updateEvent(id, formData);
      const updated = response.event;

      setEvents((prev) =>
        prev.map((event) => (event._id === id ? updated : event))
      );
    } catch (error) {
      console.error("❌ Failed to update event:", error);
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
          <EventCard
            key={event._id}
            id={event._id}
            title={event.title}
            date={event.date}
            description={event.description}
            imgSrc={event.imgSrc}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
