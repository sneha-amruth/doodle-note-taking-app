import React from "react";

function Notes(props) {
  function clickHandler() {
    props.onDelete(props.id);
  }
  return (
    <div className="saved-note">
      <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div>
        <button className="delete-note" onClick={clickHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Notes;
