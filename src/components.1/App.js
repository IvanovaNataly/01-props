import React, { Component } from 'react';
import Card from './Card'; 
import TopBar from './TopBar'; 

export default class App extends Component {

    render() {
        return (
        <div className="app">
            <TopBar/>
            <h1 className="headline white-text">I am the main Application!!!</h1>
            <Card action="greet" subject="people"/>		
        </div>
        )
    }

}

/*export default ()=> {
    return (
      <div className="app">
         <TopBar/>
		 <h1 className="headline white-text">I am the main Application</h1>
		 <Card action="greet" subject="people"/>		
	  </div>
    )
}*/