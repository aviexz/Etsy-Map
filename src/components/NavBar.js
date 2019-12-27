import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            backgroundColor: "#fafafa"
          }}
        >
          <li
            style={{
              display: "block",
              color: "black",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
              float: "left"
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "25px"
              }}
            >
              SALES
              <span style={{ color: "#F57020" }}> MAP</span>
            </a>
          </li>
          <a href="www.google.com">
            <li
              style={{
                float: "right",
                display: "block",
                color: "black",
                textAlign: "center",
                padding: "14px 16px",
                textDecoration: "none"
              }}
            >
              Log In
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

export default NavBar;
