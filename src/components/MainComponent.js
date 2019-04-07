import React, { Component } from "react";
import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishId: null
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDishId: dishId
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante con fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu
          dishes={this.state.dishes}
          onClick={dishID => this.onDishSelect(dishID)}
        />

        <div className="row">
          <DishDetail
            dish={
              this.state.dishes.filter(
                dish => dish.id === this.state.selectedDishId
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;