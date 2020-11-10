import React from "react";
import ListItem from "./ListItem";
import "./BookList";

class BookList extends React.Component {
  render() {
    return (
      <div className="bookList">
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default BookList;
