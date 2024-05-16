import { useState } from "react";
import Square from "../src/components/Square.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "할일1", content: "내용1" },
    {
      id: 2,
      title: "할일2",
      content: "내용2",
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (!title || !content) return;
    const newTodo = { id: todos.length + 1, title, content, isDone: false };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
    );
  };

  const handleCancel = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: false } : todo))
    );
  };

  return (
    <div className="all">
      <div className="todo-list">
        <p>My Todo List</p>
        <div
          style={{
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginLeft: "10px",
            }}
          >
            <p>제목</p>
            <input
              type="text"
              id="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>할일</p>
            <input
              type="text"
              id="content-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleAddTodo} style={{ marginRight: "20px" }}>
              추가하기
            </button>
          </div>
        </div>
        <p>Working 📝</p>
        <div className="todo-cards">
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <Square
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onCompleted={handleCompleted}
              />
            ))}
        </div>
        <p>Done 😺 !</p>
        <div className="done-cards">
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <Square
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onCancel={handleCancel}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
