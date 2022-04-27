import React from 'react';

const ContactInfo = ({ contact, onClick }) => {
  return <div onClick={onClick}>{contact.name}</div>;
};

export default ContactInfo;
