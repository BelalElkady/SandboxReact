import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
   
  }

  

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>
                <strong>{dish.name}</strong>
              </CardTitle>
              <CardText> {dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderComments(...dish) {
     if (dish.comments != null) {
      console.log("dsa");
    dish.comments.map(element => {
      return (
        // <div className="col-12 col-md-5 m-1">
        //   <h4>Comments</h4>
        //   <ul>
        //     <li key={element.id}>
        <p>{element.comment}</p>
        //       <p>
        //         <span>--</span>
        //         <span>{element.author}</span>
        //         <span>, {element.date}</span>
        //       </p>
        //     </li>
        //   </ul>
        // </div>
      );
    });
     } else {
      console.log("dsfsda");
      return <div gfdgfd/>;
     }
  }
  render() {
    return (
      <div>
        {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish)}
      </div>
    );
  }
}

export default DishDetail;
