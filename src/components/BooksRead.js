import React, { Component } from "react";
import * as slug from "slug";

class BooksRead extends Component {
  componentDidMount(){
    this.props.history.push(`/portfolio/${slug('Books Read')}/`)
  }
  render() {
    return <div />;
  }
}

export default BooksRead;
