import React from "react";
import "./App.css";
import BookList from "./BookList/BookList";
import Form from "./Form/Form";
import Head from "./Head/Head";

function App() {
  return (
    <div className="App">
      <Head />
      <Form />
      <BookList />
    </div>
  );
}

export default App;
