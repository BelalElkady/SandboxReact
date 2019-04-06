import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.renderDish = this.renderDish.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <strong>{dish.name}</strong>
            </CardTitle>
            <CardText> {dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  renderComments(dish) {
    if (dish != null) {
      const listItems = dish.comments.map(element => (
        <div key={element.id} className="container">
          <li>
            <p>{element.comment}</p>
            <p>
              <span>--</span>
              <span>{element.author}</span>
              <span>, {element.date}</span>
            </p>
          </li>
        </div>
      ));
      return (
        <ul className="list-unstyled">
          <h4>Comments</h4>
          {listItems}
        </ul>
      );
    } else {
      return <div />;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
