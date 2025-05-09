import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <Link className="Link" to="/home">
        <div className="logo-container">
          <svg
            className="logo"
            fill="#29414b"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            preserveAspectRatio="xMinYMin"
          >
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-16.395a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3zm-6 7v.022a6 6 0 1 0 12 0v-.022a1 1 0 0 0-2 0v.022a4 4 0 1 1-8 0v-.022a1 1 0 0 0-2 0zm6-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1z" />
          </svg>
          <h3 className="title">audiosphere</h3>
        </div>
      </Link>
      {/* <button className="favorites-button">
        <Link className="Link" to="/favorites">
          Favorites
        </Link>
      </button> */}
    </nav>
  );
}