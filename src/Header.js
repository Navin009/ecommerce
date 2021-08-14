import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="/images/logo.png"
        alt="Amazon"
      />
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello</span>
          <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Return</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">you</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <div className="header_basket">
          <ShoppingCartIcon className="header_basketIcon" />
          <span className="header_optionTwo header_basketCounter">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
