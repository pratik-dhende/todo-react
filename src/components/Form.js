import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name, category);
    setName("");
    setCategory("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Category
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Task
      </button>
    </form>
  );
}

export default Form;
