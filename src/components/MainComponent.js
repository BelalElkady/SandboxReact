import React, { Component } from "react";
import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
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
        <Header />

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

        <Footer />
      </div>
    );
  }
}

export default Main;
