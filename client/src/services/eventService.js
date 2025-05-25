/// FILE: src/services/eventService.js
import axios from "axios";

// adjust based on backend route
// eventService.js
const BASE_URL = `${import.meta.env.VITE_API_URL}/events`;

export const fetchEvents = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const addEvent = async (eventData) => {
  const res = await axios.post(BASE_URL, eventData);
  return res.data;
};
