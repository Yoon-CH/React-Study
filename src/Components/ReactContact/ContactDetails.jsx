import React from 'react';

const ContactDetails = ({ isSelectedItem, reMove }) => {
  const detail = (
    <div>
      <p>{isSelectedItem.name}</p>
      <p>{isSelectedItem.phone}</p>
    </div>
  );
  const noDetail = <div>No select</div>;

  return (
    <>
      <h2>Details</h2>
      {isSelectedItem.id ? detail : noDetail}
      <button onClick={() => reMove(isSelectedItem.id)}>Remove</button>
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
