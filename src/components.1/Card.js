import React, { Component } from 'react';
import Thumb from './Thumb';

/*export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="card">
        <h1 className="headline">I am a Card</h1>
        <h2 className="paragraph">my goal is to {this.props.action} some {this.props.subject}</h2>
	    </div>
    )
  }
}*/

/*export default class Card extends Component {
  render() {
    let { action, subject } = this.props

    return (
      <div className="card">
        <h1 className="headline">I am Card</h1>
        <h2 className="paragraph">i {action} {subject}</h2>
      </div>
    )
  }
}*/

//-------------------------------------
//   Stateless Function Components
//-------------------------------------

/*export default (props) => {
  let { action, subject } = props
  return (
    <div className="card">
      <h1 className="headline">I am a Card</h1>
      <h2 className="paragraph">i {action} {subject}</h2>
    </div>
  )
}*/

/*export default ({ action, subject }) => {
  return (
    <div className="card">
      <h1 className="headline">I am a Card</h1>
      <h2 className="paragraph">i {action} {subject}</h2>
    </div>
  )
}*/
export default function Card (props) {
 let { action, subject } = props
 return (
   <div className="card">
     <h1 className="headline">I am a Card</h1>
     <h2 className="paragraph">my goal is to {action} some {subject}</h2>*/
  //   {/*<Thumb action={action} subject={subject} />*/}
    /* <Thumb {...props}/>
   </div>
 )
}