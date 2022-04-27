import React from 'react';

const ContactDetails = ({ isSelected, contact }) => {
  const detail = (
    <div>
      <h2>Details</h2>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
    </div>
  );
  const noDetail = <div>No select</div>;

  return <>{isSelected ? detail : noDetail}</>;
};

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  },
};

export default ContactDetails;
