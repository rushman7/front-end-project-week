import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import './App.css';
import Notes from './Notes/Notes';
import NewNote from './NewNote/NewNote';
import ViewNote from './Notes/ViewNotes';
import Note from './Notes/Note';

class App extends Component {
    render() {
        return (
            <div className="container">
            <SideNav />
                <Switch>
                    <Route exact path="/"
                        render = {(props) => <Notes />}
                    />
                    {/* <Route path="/notes/:id/" component={Note} 
                    /> */}
                    <Route path="/newNote"
                        render = {(props) => <NewNote />}
                    />
                    {/* <Route path="/notes/:id" component={ViewNote}
                    /> */}
                </Switch>
            </div>
        );
    }
}

export default App;