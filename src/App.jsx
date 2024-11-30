import { useState } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItems';
import useTasks from './Hooks/useTask';

function App() {
  const [input, setInput] = useState('');
  const tasks = useTasks();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Por favor ingresa una tarea');
      return;
    }
    await addDoc(collection(db, 'tasks'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  const toggleComplete = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), {
      completed: !task.completed,
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  const editTask = async (task, newText) => {
    if (newText.trim() === '') {
      alert('La tarea no puede estar vacía');
      return;
    }
    await updateDoc(doc(db, 'tasks', task.id), {
      text: newText,
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden font-sans">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: 'transparent',
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 2,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Lista de Tareas
          </h1>
          <TaskForm input={input} setInput={setInput} addTask={addTask} />

          <div className="space-y-2 max-h-96 overflow-y-auto">
            <AnimatePresence>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
