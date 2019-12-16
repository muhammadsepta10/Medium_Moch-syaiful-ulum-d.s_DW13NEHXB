import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";
import { Link } from "react-router-dom";

// list of items

const list = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "One Zero",
    url: "/OneZero"
  },
  {
    name: "Elemental",
    url: "null"
  },
  {
    name: "Gen",
    url: "null"
  },
  {
    name: "Zora",
    url: "null"
  },
  {
    name: "Forge",
    url: "url"
  },
  {
    name: "Human Parts",
    url: "url"
  },
  {
    name: "Marker",
    url: "url"
  },
  {
    name: "Level",
    url: "url"
  },
  {
    name: "Heated",
    url: "url"
  },
  {
    name: "Modus",
    url: "url"
  },
  {
    name: "More",
    url: "url"
  }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;
    const { url } = el;

    return (
      <Link to={url}>
        <MenuItem text={name} key={name} selected={selected} />
      </Link>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "";

class CategoryScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
export default CategoryScroll;
