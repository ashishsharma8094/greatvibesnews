import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Search = () => {
  const [category, setcategory] = useState("story");
  const [parameter, setparameter] = useState("Popularity");
  const [duration, setduration] = useState("All time");
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <form
        className="mx-2 my-2"
        onSubmit={(e) => e.preventDefault()}
        style={{ marginLeft: "auto" }}
      >
        <span className="mx-1 my-2">
          <input
            style={{ marginTop: "2px", marginBottom: "2px" }}
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </span>
        <span className="dropdown mx-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              paddingTop: "1px",
              paddingBottom: "1px",
              color: "black",
              backgroundColor: "#DBE2EF",
              border: "0",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          >
            {category}
          </button>
          <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setcategory("story");
              }}
            >
              Stories
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setcategory("Comments");
              }}
            >
              Comments
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setcategory("All");
              }}
            >
              All
            </p>
          </span>
        </span>
        <span className="dropdown mx-1">
          <span>By </span>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              paddingTop: "1px",
              paddingBottom: "1px",
              color: "black",
              backgroundColor: "#DBE2EF",
              border: "0",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          >
            {parameter}
          </button>
          <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setparameter("Popularity");
              }}
            >
              Popularity
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setparameter("Date");
              }}
            >
              Date
            </p>
          </span>
        </span>
        <span className="dropdown mx-1">
          <span>for </span>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              paddingTop: "1px",
              paddingBottom: "1px",
              color: "black",
              backgroundColor: "#DBE2EF",
              border: "0",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          >
            {duration}
          </button>
          <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setduration("All time");
              }}
            >
              All time
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setduration("Past 24 hours");
              }}
            >
              Last 24 hours
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setduration("Past week");
              }}
            >
              Past week
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setduration("Past month");
              }}
            >
              Past month
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="dropdown-item"
              onClick={() => {
                setduration("Past year");
              }}
            >
              Past year
            </p>
            <DateRangePicker
              placeholder="Select Date Range"
              className="dropdown-item"
              onClick={() => {
                setduration("Custom dates");
              }}
            />
          </span>
        </span>
      </form>
    </>
  );
};

export default Search;
