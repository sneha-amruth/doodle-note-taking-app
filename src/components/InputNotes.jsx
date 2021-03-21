import { useState } from "react";
//import ColorPalette from "../Images/palette.svg";

function InputNotes(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function clickHandler(e) {
    e.preventDefault();
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
      <form className="input-area">
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
        <button className="add-note" onClick={clickHandler}>
          Add
        </button>
        {/*<img
          className="color-palette"
          src={ColorPalette}
          alt="Color pallete Logo"
        />*/}
      </form>
    </div>
  );
}

export default InputNotes;
