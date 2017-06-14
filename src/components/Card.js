import React, { Component } from 'react';

export default class Card extends Component {
    componentWillReceiveProps(nextProps) {
        this.render();
    }

    render() {
        return (
          <div className="card-area">
              <div className="card clearfix">
                  <img className="cardImg" src={this.props.card.url}  />
                  <h3>{this.props.card.name}</h3>
                  <p>{this.props.card.age}</p>
              </div>
          </div>
        )
    }
}