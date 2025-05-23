import React from "react";

function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New Task"
        value={newTask.title || ""}
        onChange={handleChange}
      ></input>
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details... "
            value={newTask.description || ""}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}

export default NewTask;
