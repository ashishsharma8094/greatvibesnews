import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { query, searchPost } = useGlobalContext();
  const { fecthApiData, API } = useGlobalContext();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ padding: "1rem", backgroundColor: "#DBE2EF" }}
      >
        <a href="/">
          <b
            className="navbar-brand"
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => fecthApiData(API)}
          >
            HackerNews
          </b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto align-middle">
            <li className="nav-item active">
              <a
                href="/"
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  fecthApiData(API);
                }}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            {/* <li className="nav-item active">
              <a href="/search" className="nav-link" style={{cursor:"pointer" }} onClick={() => {
                fecthApiData(API);
                }} >
                Search
              </a>
            </li> */}
          </ul>
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
          </form>
          <span class="input-group-append">
            <button
              class="btn btn-secondary border-left-0 border"
              type="button"
            >
              Search
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
