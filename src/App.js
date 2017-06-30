import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContacts from './CreateContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts});
    })
  }

  removeContact = (contact) => {
    this.setState((oldState) => ({
      contacts: oldState.contacts.filter((c) => c.id!==contact.id)
    }));

    ContactsAPI.remove(contact);
  };

  createContact(contact) {
    console.log(contact);
    ContactsAPI.create(contact).then(contact => {
      this.setState((state) => ({
        contacts: state.contacts.concat([ contact ])
      }));
    })
  }

  render() {

    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts removeContact={this.removeContact}
                        contacts={this.state.contacts}
                        />
          )
        }>
        </Route>
        <Route exact path='/create' render={ ({ history }) => (
          <CreateContacts
            onCreateContact={(contact) => {
              this.createContact(contact);
              history.push('/');
            }}
          />
        )}>
        </Route>
      </div>
    );
  }
}

export default App;
