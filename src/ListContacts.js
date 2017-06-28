import React, { Component } from 'react';


function ListContacts(props) {

  return (
    <ol className='contact-list'>
      {props.contacts.map((contact, index) => (
        <li className='contact-list-item' key={index}>
          <div className='contact-avatar' style={
            { backgroundImage: `url(${contact.avatarURL})` }
          }></div>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <div className='contact-remove'>
            Remove
          </div>
        </li>
      ))}
    </ol>
  );
}

export default ListContacts;
