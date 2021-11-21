import React, { Component } from "react";
import Error from "../Error";

export default class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <Error error='Неизвестная ошибка'/>;
    }
    return this.props.children;
  }
}