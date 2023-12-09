import { useEffect, useRef, useState } from "react";
const TesPages = () => {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);
  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setItem([...item, todo]);
      setTodo("");
    } else if (todo === "") {
      alert("Please write something");
    }
  };

  const handleChanges = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="flex items-center justify-center h-96">
      <form onSubmit={handleSubmit}>
        <input
          className="mr-2 outline outline-black"
          type="text"
          value={todo}
          onChange={handleChanges}
          ref={focusRef}
        />
        <button
          className="w-12 bg-blue-500 border-2 border-black rounded-sm "
          type="submit"
        >
          Add
        </button>
        <div className="mt-2">
          <ul>
            {item.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default TesPages;
