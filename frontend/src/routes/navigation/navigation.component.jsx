import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <h3>Infopedia</h3>
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
