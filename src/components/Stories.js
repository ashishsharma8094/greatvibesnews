import React from "react";
import { useGlobalContext } from "./Context";
import moment from "moment/moment";
import url from "url";

const getHostname = (givenurl) => {
  if (givenurl === null) return "Anonymous";
  return url.parse(givenurl).hostname;
};

const timeago = (givenDate) => {
  return moment(givenDate).fromNow();
};

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center ">
        <div
          className="spinner-border"
          style={{ color: "#DBE2EF", width: "3rem", height: "3rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const {
            title,
            story_title,
            author,
            objectID,
            url,
            story_url,
            num_comments,
            created_at,
            points,
          } = curPost;
          return (
            <div className="card border-dark my-2 w-75 mx-auto" key={objectID}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: "3px" }}>
                  {title !== null ? title : story_title}
                </h5>
                <p
                  className="card-text text-muted"
                  style={{ marginBottom: "10px" }}
                >
                  By <span> {author}</span> |{" "}
                  <span> {num_comments !== null ? num_comments : 0} </span>
                  comments | <span>{points !== null ? points : 0}</span> Points
                  | <span>{timeago(created_at)}</span> |{" "}
                  <span>{getHostname(url !== null ? url : story_url)}</span>
                </p>
                <div className="card-button">
                  <a
                    className="btn btn-primary"
                    style={{
                      border: "0",
                      color: "Blue",
                      backgroundColor: "#DBE2EF",
                    }}
                    href={url !== null ? url : story_url}
                  >
                    Read More
                  </a>
                  <p
                    className="btn btn-primary mx-1"
                    style={{
                      border: "0",
                      color: "Blue",
                      backgroundColor: "#DBE2EF",
                      margin: "0",
                      cursor: "pointer",
                    }}
                    onClick={() => removePost(objectID)}
                  >
                    Hide
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
