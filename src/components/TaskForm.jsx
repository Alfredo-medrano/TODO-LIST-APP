import PropTypes from 'prop-types';

function TaskForm({ input, setInput, addTask }) {
  return (
    <form onSubmit={addTask} className="flex mb-4">
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="bg-accent text-white px-6 rounded-r-md hover:bg-accent-dark transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Agregar
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
