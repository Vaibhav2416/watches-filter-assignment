import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <div
      data-testid="navbar"
      style={{ padding: "0.5rem 1rem", display: "flex" }}
    >
      <div data-testid="navbar-home-link" style={{ flex: 1 }}>
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
      {!isAuth && (
        <div>
          <button
            data-testid="navbar-login-button"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "black",
              color: "white",
              padding: "6px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "1.5rem",
            }}
          >
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              LOGIN
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
