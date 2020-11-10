import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    return (
      <li className="listItem">
        <div className="bookImage">
          <img src="#" alt="Book" />
        </div>
        <div className="bookInfo">
          <h2>Book Title</h2>
          <p>Author: </p>
          <p>Price: </p>
          <p>Description</p>
        </div>
      </li>
    );
  }
}

export default ListItem;
