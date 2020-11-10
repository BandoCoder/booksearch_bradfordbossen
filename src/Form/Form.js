import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <form className="bookSearch">
        <label htmlFor="search">Search: </label>
        <input type="text" name="searchField" placeholder="e.g. Harry Potter" />
        <button type="submit">Search</button>
        <div className="filters">
          <label className="printType" htmlFor="printType">
            Print Type:{" "}
          </label>
          <select id="printType" name="printFilter">
            <option value="None">Select one.....</option>
          </select>
          <label className="bookType" htmlFor="bookType">
            Book Type:{" "}
          </label>
          <select id="bookType" name="bookFilter">
            <option value="None">Select one.....</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
