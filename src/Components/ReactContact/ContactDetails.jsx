import React, { useState } from 'react';

const ContactDetails = ({ isSelectedItem, reMove, editContact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editInfo, setEditInfo] = useState({
    id: isSelectedItem.id,
    name: isSelectedItem.name,
    phone: isSelectedItem.phone,
  });

  const handelToggle = () => {
    if (!isEdit) {
      setEditInfo({
        id: isSelectedItem.id,
        name: isSelectedItem.name,
        phone: isSelectedItem.phone,
      });
    } else {
      editContact(editInfo);
    }
    setIsEdit(!isEdit);
    console.log(isEdit);
  };

  const handleChange = event => {
    setEditInfo({
      ...editInfo,
      [event.target.name]: event.target.value,
    });
  };

  const detail = (
    <div>
      <p>{isSelectedItem.name}</p>
      <p>{isSelectedItem.phone}</p>
    </div>
  );

  const edit = (
    <form>
      <p>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={editInfo.name}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={editInfo.phone}
          onChange={handleChange}
        />
      </p>
    </form>
  );

  const view = isEdit ? edit : detail;

  const noDetail = <div>No select</div>;

  return (
    <>
      <h2>Details</h2>
      {isSelectedItem.id ? view : noDetail}
      <p>
        <button onClick={handelToggle}>{isEdit ? 'OK' : 'Edit'}</button>
        <button onClick={() => reMove(isSelectedItem.id)}>Remove</button>
      </p>
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
