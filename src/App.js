import React, { Component } from 'react';
import ListContacts from './ListContacts.js';

class App extends Component {
  state = {
    contacts: [
      {
        'id': 'ryan',
        'name': 'Ryan Florence',
        'email': 'ryan@reacttraining.com',
        'avatarURL': 'http://localhost:5001/ryan.jpg'
      },
      {
        'id': 'michael',
        'name': 'Michael Jackson',
        'email': 'michael@reacttraining.com',
        'avatarURL': 'http://localhost:5001/michael.jpg'
      },
      {
        'id': 'tyler',
        'name': 'Tyler McGinnis',
        'email': 'tyler@reacttraining.com',
        'avatarURL': 'http://localhost:5001/tyler.jpg'
      }
    ]
  };
  removeContact = (contact) => {
    this.setState((oldState) => ({
      contacts: oldState.contacts.filter((c) => c.id!==contact.id)
    }));
  };
  render() {
    return (
      <div>
        <ListContacts removeContact={this.removeContact}
                      contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
