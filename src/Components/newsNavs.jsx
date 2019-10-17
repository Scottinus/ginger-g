import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {connect} from "react-redux"
import News from "./News";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  toggleFilter:(event) =>
  dispatch(handleFilter(event))
})

const handleFilter= (event) =>{
  return async function(
    dispatch,
    getState
){
  var filter= event
  console.log(filter)
  dispatch({
    type:"FILTER_NAV",
    payload: event
})
}
}

 class NewsNav extends React.Component {
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
      
      <div>
        <Nav tabs id="news-nav">
          <NavItem>
            <NavLink href="#" onClick={() => this.props.toggleFilter("Weekly")}>Weekly Sales</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.toggleFilter("Monthly")}>Monthly Sales</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.toggleFilter("New")}>Newest</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.toggleFilter("Indies")}>Best Indies</NavLink>
          </NavItem>
        </Nav>
        <News/>
      </div>

    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsNav);
