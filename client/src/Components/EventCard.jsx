import React from "react";
import PropTypes from "prop-types";

const EventCard = ({
  id,
  title,
  date,
  description,
  imgSrc,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-[#130229] bg-opacity-50 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer relative">
      <img
        src={imgSrc || "../Images/default.jpg"}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
        onError={(e) => {
          e.target.src = "../Images/default.png";
        }}
      />

      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="text-sm text-gray-200 mt-1">{description}</p>

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => onEdit(id)}
          className="bg-cyan-500 hover:bg-cyan-800 text-white text-sm px-3 py-1 rounded-lg transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-400 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EventCard;
