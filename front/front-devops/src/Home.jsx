import React, { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [time, setTime] = useState(25);
  const [running, setRunning] = useState(false);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const toggleTimer = () => {
    setRunning(!running);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Focus Mode 🧠</h1>

        {/* Timer */}
        <div style={styles.timerBox}>
          <h2 style={styles.time}>{time}:00</h2>
          <button style={styles.primaryButton} onClick={toggleTimer}>
            {running ? "Pausar" : "Iniciar"}
          </button>
        </div>

        {/* Task Input */}
        <div style={styles.inputGroup}>
          <input
            style={styles.input}
            placeholder="Nova tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button style={styles.secondaryButton} onClick={addTask}>
            Adicionar
          </button>
        </div>

        {/* Task List */}
        <ul style={styles.list}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                ...styles.listItem,
                textDecoration: task.done ? "line-through" : "none",
                opacity: task.done ? 0.5 : 1,
              }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #1f2937, #111827)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
  },
  card: {
    backgroundColor: "#1f2937",
    padding: "40px",
    borderRadius: "16px",
    width: "400px",
    color: "white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  title: {
    marginBottom: "20px",
  },
  timerBox: {
    textAlign: "center",
    marginBottom: "25px",
  },
  time: {
    fontSize: "48px",
    margin: "10px 0",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  secondaryButton: {
    backgroundColor: "#10b981",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "10px",
    backgroundColor: "#111827",
    borderRadius: "8px",
    marginBottom: "8px",
    cursor: "pointer",
  },
};