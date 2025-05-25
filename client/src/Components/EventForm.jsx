import React, { useState } from "react";

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    imgSrc: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", date: "", description: "", imgSrc: "" });
    setIsOpen(false); // Close form after submit
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      {/* Button to toggle form */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 bg-purple-700 hover:bg-purple-900 text-white font-semibold px-6 py-3 ml-37 rounded shadow-md transition "
      >
        {isOpen ? "Close Form ✖️" : "Add Event ➕"}
      </button>

      {/* Conditionally render form */}
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-80 p-6 rounded-xl shadow-xl text-white"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Event Date"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            required
          />
          <input
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-900 text-white font-semibold px-6 py-2 rounded w-full shadow-md transition"
          >
            Add Event
          </button>
        </form>
      )}
    </div>
  );
};

export default EventForm;
