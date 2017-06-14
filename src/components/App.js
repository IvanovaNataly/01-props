import React, { Component } from 'react';
import TopBar from './TopBar'; 
import List from './List'; 
import Card from './Card';

export default class App extends Component {
    constructor() {
        super();
        this.state = { profile: {
                name: "Trevor",
                age: "30/06/1978",
                url: "/static/icons/trevor.png"
            }
        }
    }

    updateUserState(user) {
        this.setState({profile: user});
    }

    render() {
        return (
        <div className="app">
            <TopBar/>
            <main className="content clearfix">
                <List updateUser={this.updateUserState.bind(this)}/>
                <Card card={this.state.profile}/>
            </main>
        </div>
        )
    }

}
