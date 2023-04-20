export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Satu Mare
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Homepage <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Community
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Main attractions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
