import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoFunc } from "../../redux/actions.jsx/TodoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoFunc(text));
    setText("");
  };
  // input ile user dan todo ismi aliyoruz. bunu kendi redux imiza göndermemiz ve bu todo yu olusturmamiz lazim. bunun icin func cagirma islemlerini useDispatch ile yapiyoruz. daha sonra gösterme islemini todoList de yapiyoruz.
  
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange = {(e) => setText(e.target.value)}
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;
