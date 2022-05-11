import * as React from "react";
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  MenuItemProps,
} from "piral";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
);

const defaultTiles = (
  <>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://piral.io/">Piral</a>
        <br />
        for next generation portals
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <br />
        for writing scalable web apps
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://reactjs.org/">React</a>
        <br />
        for building components
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="http://getbootstrap.com/">Bootstrap</a>
        <br />
        for layout and styling
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://sass-lang.com">Sass</a>
        <br />
        for crafting custom styles
      </div>
    </div>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the landing page</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  Layout: ({ children }) => (
    <>
      <div>
        <header>
          <Menu type="general" />
        </header>
        {children}
      </div>
      <Footer></Footer>
    </>
  ),
  MenuContainer: ({ children }) => {
    return (
      <div id="navigation">
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <ul className="navbar-nav flex-grow">{children}</ul>
          </div>
        </nav>
      </div>
    );
  },
  MenuItem,
};
