import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import axios from 'axios';

function getDishes() {
  return axios.get('http://localhost:3001/dishes');
}


function getComments() {
  return axios.get('http://localhost:3001/comments');
}
class DishWithId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
  
      comments: []
    };
  }

  async componentDidMount() {

    // Make a request for a user with a given ID
    axios.all([getDishes(),getComments()])
      .then(axios.spread((dishes,comments)=>{
        // handle success
         this.setState({

          dishes:dishes.data,

          comments: comments.data
          });
  
      }))
      .catch(function (error) {
        // handle error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
      .then(function () {
        // always executed
      });
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
