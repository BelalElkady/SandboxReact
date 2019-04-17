import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "reactstrap/lib/Breadcrumb";
import BreadcrumbItem from "reactstrap/lib/BreadcrumbItem";
import CommentForm from "./CommentForm";
function renderDish(dish) {
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
function renderComments(comments) {
  const listItems = comments.map(element => (
    <div key={element.id} className="container">
      <li>
        <p>{element.comment}</p>
        <p>
          <span>--</span>
          <span>{element.author}</span>
          <span>
            {" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(element.date)))}
          </span>
        </p>
      </li>
    </div>
  ));
  return (
    <div>
      <ul className="list-unstyled">
        <h4>Comments</h4>
        {listItems}
      </ul>

      <CommentForm />
    </div>
  );
}
const DishDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(props.dish)}</div>
        <div className="col-12 col-md-5 m-1">
          {renderComments(props.comments)}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
