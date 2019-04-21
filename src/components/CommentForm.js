import React, { Component } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import FormFeedback from "reactstrap/lib/FormFeedback";

import axios from 'axios';
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handelOnChange = this.handelOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      isModalOpen: false,
      username: "",
      rate:"",
      comment:"",
      usernameTouched: false
    };
  }
  handelOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleOnBlur() {
    this.setState({
      usernameTouched: true
    });
  }
  handleSubmit(e){
    axios.post('http://localhost:3001/comments', {
      dishId: this.props.dishId,
      rating: this.state.rate,
      comment: this.state.comment,
      author: this.state.username,
      date: new Date().toLocaleString()
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  //  e.preventDefault();
    this.toggleModal();
  }

  validate(username) {
    const errors = {
      username: ""
    };

    if (this.state.usernameTouched && username.length < 2) {
      errors.username = "your name must be greater than 2 characters";
    } else if (this.state.usernameTouched && username.length > 15) {
      errors.username = "your name must be less tahn or eual 15 characters";
    }

    return errors;
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  render() {
    const errors = this.validate(this.state.username);
    return (
      <div>
        <Button outline color="secondary" onClick={this.toggleModal}>
          <span className="fa fa-pen fa-lg" />
          Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="rate">Rating</Label>
                <Input
                  type="select"
                  id="rate"
                  name="rate"
                  onChange={this.handelOnChange}
                  value={this.state.rate}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username">Your Name</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                  value={this.state.username}
                  valid={errors.username === ""}
                  invalid={errors.username !== ""}
                  onChange={this.handelOnChange}
                  onBlur={this.handleOnBlur}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">Comment</Label>

                <Input
                  type="textarea"
                  id="comment"
                  rows="6"
                  name="comment"
                  onChange={this.handelOnChange}
                  value={this.state.comment}
                />
              </FormGroup>

              <Button type="submit" value="submit" color="primary"  disabled={errors.username !== ""||!this.state.usernameTouched}>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default CommentForm;
