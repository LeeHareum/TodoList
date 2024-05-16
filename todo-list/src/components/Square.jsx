import PropTypes from "prop-types";
import "../components/Square.css";

const Square = ({ todo, onDelete, onCompleted, onCancel }) => {
  return (
    <div className="todo-card">
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className="button">
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          삭제하기
        </button>
        {todo.isDone ? (
          <button className="completed-btn" onClick={() => onCancel(todo.id)}>
            취소
          </button>
        ) : (
          <button
            className="completed-btn"
            onClick={() => onCompleted(todo.id)}
          >
            완료
          </button>
        )}
      </div>
    </div>
  );
};

Square.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Square;
