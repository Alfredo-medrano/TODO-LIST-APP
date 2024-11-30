import { useState } from 'react';
import { FiTrash2, FiCheckCircle, FiCircle, FiEdit3 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    removed: { opacity: 0, y: 10 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="removed"
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-md shadow hover:shadow-lg border border-gray-200"
    >
      <div className="flex items-center flex-grow mb-2 sm:mb-0">
        <button
          onClick={() => toggleComplete(task)}
          className="text-green-500 hover:text-green-700 transition duration-200 mr-3"
        >
          {task.completed ? (
            <FiCheckCircle size={24} />
          ) : (
            <FiCircle size={24} />
          )}
        </button>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow p-1 border-b border-gray-300 focus:outline-none focus:border-primary"
          />
        ) : (
          <span
            className={`select-none ${
              task.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={() => {
                editTask(task, newText);
                setIsEditing(false);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Guardar
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setNewText(task.text);
              }}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-yellow-500 hover:text-yellow-600 transition duration-200 transform hover:scale-110"
            >
              <FiEdit3 size={24} />
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-600 transition duration-200 transform hover:scale-110"
            >
              <FiTrash2 size={24} />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskItem;
