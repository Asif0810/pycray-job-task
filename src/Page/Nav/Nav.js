import React from "react";

const Nav = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar  border-red-400">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>API Docs</a>
              </li>
              <li>
                <a>About us</a>
              </li>

              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <div className="navbar">
                  <a style={{ borderRadius: "30px" }} className="btn">
                    Get started for free
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>API Docs</a>
            </li>
            <li>
              <a>About us</a>
            </li>

            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Terms of Service</a>
            </li>
            <li>
              <div className="navbar">
                <a style={{ borderRadius: "30px" }} className="btn">
                  Get started for free
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
