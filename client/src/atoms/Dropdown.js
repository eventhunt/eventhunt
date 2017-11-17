import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const styleText1 = {
  display: "inline",
  float: "right",
  fontFamily: "lato",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#ffffff",
};

const styleText2 = {
  background:"transparent",
  fontFamily: "lato",
  marginTop: "23px",
  marginRight: "30px",
  marginLeft: "30px",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#ffffff",
  padding:"0",
  border:"0",

};

export default class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={styleText1}>
        <DropdownToggle caret style={styleText2}>AYU DWIYASTRI</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>change photo</DropdownItem>
          <DropdownItem>Update bio</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}