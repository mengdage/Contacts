import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeStringRegexp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';


class ListContacts extends Component{

  state = {
    query: ''
  };

  updateQuery = (query) => this.setState({
    query: query.trim()
  });

  clearQuery = () => (
    this.setState({
      query: ''
    })
  );

  render() {
    let { query } = this.state,
        { removeContact, contacts } = this.props;
    let showingContacts;
    if (query) {
      const match = new RegExp(escapeStringRegexp(query), 'i');
      showingContacts = contacts.filter((c) => match.test(c.name));
    } else {
      showingContacts = contacts;
    }
    showingContacts.sort(sortBy('name'));

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
                className='search-contacts'
                placeholder='Search contacts'
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                autoFocus
          />
          <Link to="/create"
             className='add-contact'>
             Create contact
          </Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length} contacts</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

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
                            () => removeContact(contact)
                           }
                   className='contact-remove'>
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
