import React, { Component } from "react";
import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishWithId from "./DishWithIdComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      leaders: LEADERS
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <Home
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter(
                    promotion => promotion.featured
                  )[0]
                }
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
              />
            )}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
