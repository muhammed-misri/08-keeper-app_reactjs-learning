// Render all the notes inside notes.js as a seperate Note component.

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// console.log(notes)
// we have now 4 elements
function App() {
  return (
    <div>
      {/*  pass props here  */}

      {/* */}
      <Header />

      {/* our function .. with arrow style -- arrow style mean:
      ... defined func inside another function .... (inside map)*/}

      {/*function createNotes(noteItem){ */}
      {notes.map((noteItem) => (
        // return(
        <Note
          // for everry note : key for mapping, title and content of the node
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
