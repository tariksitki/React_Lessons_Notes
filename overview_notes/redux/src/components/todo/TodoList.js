
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import {clearTodoFunc} from "../../redux/actions.jsx/TodoActions"

// action ve dispatch yardimi ile reducer a gönderdigimiz ve reducer da list e eklenen verilerimizi simdi burada sergileyecegiz. func cekmek icin dispatch, burada veri cekmek icin ise useSelector.

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch =  useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoFunc());
  };

  return (
    <div>
      <div>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
          // bu gönderim sekli önemli ve güzel. yakalarken ise destructure ile yakalayabiliyoruz.
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
