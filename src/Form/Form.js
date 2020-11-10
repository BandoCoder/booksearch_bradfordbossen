import React from "react";
import "./Form.css";

function Form(props) {
  const { q, printType, filter } = props;

  return (
    <form className="bookSearch" onSubmit={(e) => props.search(e)}>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        name="searchField"
        placeholder="e.g. Harry Potter"
        value={q}
        onChange={(e) => props.updateState("q", e.target.value)}
      />
      <div className="filters">
        <label className="printType">Print Type:</label>
        <select
          id="printType"
          value={printType}
          onChange={(e) => props.updateState("printType", e.target.value)}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label className="bookType" htmlFor="bookType">
          Book Type:
        </label>
        <select
          id="bookType"
          name="bookFilter"
          value={filter}
          onChange={(e) => props.updateState("filter", e.target.value)}
        >
          <option value="None">Select one.....</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="paid-eboos">Paid Ebooks</option>
        </select>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Form;
