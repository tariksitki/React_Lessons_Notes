
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import {toggleTodoFunc, deleteTodoFunc} from "../../redux/actions.jsx/TodoActions";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodoFunc(id))  
    // burada toggle func in yaptigi islem sunun ile aynidir
    // dispatch({type : toggle_todo, payload : id})
  };

  const handleDelete = () => {
    dispatch(deleteTodoFunc(id))
  };
    // style in bu sekilde verilmesi güzel
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
