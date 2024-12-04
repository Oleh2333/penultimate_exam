import React from "react";

export default function SearchNote(props) {




  return (
    <div>
    <h2>Пошук</h2>
    <input
      type="text"
      placeholder="Пошук"
      onChange={(e) => {
        props.filter(e.target.value);
      }}
    />
  </div>
  );
}
