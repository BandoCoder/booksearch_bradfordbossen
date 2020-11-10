import React from "react";
import "./BookList.css";

function BookList(props) {
  const { results } = props;
  return (
    <div className="bookList">
      <ul>
        {results.map((result, index) => (
          <li className="listItem">
            <div className="bookInfo">
              <h2>{result.volumeInfo.title}</h2>
              <p>{result.volumeInfo.authors}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
