import React from 'react';

const ContactDetail = ({ contact }) => {
  return (
    <div>
      {contact.name} {contact.phone}
    </div>
  );
};

export default ContactDetail;
