import React, { Component } from "react";
import "../App.css";
import Menu from "./MenuComponent";
import DishWithId from "./DishWithIdComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios';


function getPromotions() {
  return axios.get('http://localhost:3001/promotions');
}

function getDishes() {
  return axios.get('http://localhost:3001/dishes');
}

function getLeaders() {
  return axios.get('http://localhost:3001/leaders');
}

function getComments() {
  return axios.get('http://localhost:3001/comments');
}

function getFeedback(){
  return axios.get('http://localhost:3001/feedback');
  }
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      promotions: [],
      comments: [],
      leaders: [],
      feedback:[]
    };
  }


  async componentDidMount() {

    // Make a request for a user with a given ID
    axios.all([getPromotions(),getDishes(),getLeaders(),getComments(),getFeedback()])
      .then(axios.spread((Promos,dishes,leaders,comments,feedback)=>{
        // handle success
         this.setState({
          promotions:Promos.data,
          dishes:dishes.data,
          leaders:leaders.data,
          comments: comments.data,
          feedback:feedback.data
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
      <div>
        <Header />
      
        {
      
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
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Redirect to="/home" />
              </Switch> }

        <Footer />
      </div>
    );
  }
}

export default Main;
