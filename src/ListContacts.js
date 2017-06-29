import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeStringRegexp from 'escape-string-regexp';
import sortBy from 'sort-by';


class ListContacts extends Component{

  state = {
    query: ''
  };

  updateQuery = (query) => this.setState({
    query: query.trim()
  });

  render() {
    let showingContacts;
    if (this.state.query) {
      const match = new RegExp(escapeStringRegexp(this.state.query), 'i');
      showingContacts = this.props.contacts.filter((c) => match.test(c.name));
    } else {
      showingContacts = this.props.contacts;
    }
    showingContacts.sort(sortBy('name'));
    console.log(sortBy('name'));
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
                className='search-contacts'
                placeholder='Search contacts'
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                autoFocus
          />
        </div>
        <ol className='contact-list'>
          {showingContacts.map((contact, index) => (
            <li className='contact-list-item' key={index}>
              <div className='contact-avatar' style={
                { backgroundImage: `url(${contact.avatarURL})` }
              }></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <div onClick={
                            () => this.props.removeContact(contact)
                           } className='contact-remove'>
                Remove
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default ListContacts;
