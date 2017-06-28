import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListContacts extends Component{

  state = {
    query: ''
  };

  onChangeInput = (event) => this.setState({
    query: event.target.value
  });

  render() {
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
                className='search-contacts'
                placeholder='Search contacts'
                value={this.state.query}
                onChange={this.onChangeInput}
                autoFocus
          />
        </div>
        <ol className='contact-list'>
          {this.props.contacts.map((contact, index) => (
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
