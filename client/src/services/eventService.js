import axios from "axios";

// 🔗 Backend Base URL from .env (e.g., http://localhost:5000/api)
const BASE_URL = `${import.meta.env.VITE_API_URL}/events`;

/**
 * 📥 Fetch all events from backend
 */
export const fetchEvents = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

/**
 * ➕ Add a new event
 * @param {FormData} eventData - Includes title, date, description, image
 */
export const addEvent = async (eventData) => {
  const res = await axios.post(BASE_URL, eventData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/**
 * ✏️ Update an existing event
 * @param {string} id - MongoDB Event ID
 * @param {FormData} updatedData - Updated title, date, description, optional image
 */
export const updateEvent = async (id, updatedData) => {
  const res = await axios.put(`${BASE_URL}/${id}`, updatedData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/**
 * ❌ Delete an event by ID
 * @param {string} id - MongoDB Event ID
 */
export const deleteEvent = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
