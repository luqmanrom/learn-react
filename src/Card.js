import React, { Component } from 'react';
import $ from 'jquery';

class Card extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {}

  }

  componentDidMount() {
    let component = this;
    $.get('https://api.github.com/users/' + this.props.user, function(data) {
      component.setState(data);
    })
    
  }
  render() {
    return (
        <div>
          <h1>Hello , {this.state.name}</h1>
        </div>
    );
  }
}

export default Card;
