import { useState } from "react";

function InputNotes(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function submitHandler(e) {
    e.preventDefault();
    if (!note.title.trim() && !note.content.trim()) {
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }
  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form className="input-area" onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          name="title"
          value={note.title}
          placeholder="Title"
        ></input>
        <textarea
          onChange={changeHandler}
          name="content"
          value={note.content}
          placeholder="Doodle your thoughts"
          rows="3"
        ></textarea>
        <button className="add-note" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputNotes;
