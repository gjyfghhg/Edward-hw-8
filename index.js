const List = ({ todos, handleDelete, handleDone, handleunDone }) => {
  return (
    <div>
      {todos.map((v, i) => {
        return (
          <div key={i} className="todo">
            <input
              onChange={v.isDone ? () => handleunDone(i) : () => handleDone(i)}
              type="checkbox"
              checked={v.isDone}
            />
            <span style={{ color: v.isDone ? "green" : "black" }}>
              {v.title}
            </span>
            <button onClick={() => handleDelete(i)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
