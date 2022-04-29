import React from 'react';

const ContactDetails = ({ isSelected, contact }) => {
  const detail = (
    <div>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
    </div>
  );
  const noDetail = <div>No select</div>;

  return (
    <>
      <h2>Details</h2>
      {isSelected ? detail : noDetail}
      <button>Remove</button>
    </>
  );
};

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  },
};

export default ContactDetails;
