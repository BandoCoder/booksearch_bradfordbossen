import React from "react";
import "./App.css";
import BookList from "./BookList/BookList";
import Form from "./Form/Form";
import Head from "./Head/Head";

const apiKey = "AIzaSyCdw50mE7o3WRq4zwOeKj-4TSX1232j8YQ";
class App extends React.Component {
  state = {
    results: [],
    q: "",
    printType: "all",
    filter: "",
  };

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };
  bookSearch = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&printType=${this.state.printType}`;
    if (this.state.filter !== "") {
      url += `&filter=${this.state.filter}&key=${apiKey}`;
    } else {
      url += `&key=${apiKey}`;
    }

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ results: res.items ? res.items : [] }));
  };
  render() {
    return (
      <div className="App">
        <Head />
        <Form
          {...this.state}
          search={this.bookSearch}
          updateState={this.updateState}
        />
        <hr />
        <BookList {...this.state} />
      </div>
    );
  }
}
export default App;
