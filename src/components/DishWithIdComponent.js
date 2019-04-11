import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
class DishWithId extends Component {
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
      <DishDetail
        dish={
          this.state.dishes.filter(
            dish => dish.id === parseInt(this.props.match.params.dishId, 10)
          )[0]
        }
        comments={this.state.comments.filter(
          comment =>
            comment.dishId === parseInt(this.props.match.params.dishId, 10)
        )}
      />
    );
  }
}

export default DishWithId;
