import React, { useState } from 'react';

const ContactDetails = ({ isSelectedItem, reMove, editContact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editInfo, setEditInfo] = useState({
    id: isSelectedItem.id,
    name: isSelectedItem.name,
    phone: isSelectedItem.phone,
  });

  const handelToggle = () => {
    setIsEdit(!isEdit);
    if (!isEdit) {
      console.log(`전 : ${JSON.stringify(editInfo)}`);
      setEditInfo({
        id: isSelectedItem.id,
        name: isSelectedItem.name,
        phone: isSelectedItem.phone,
      });
    } else {
      console.log(`후: ${JSON.stringify(editInfo)}`);
      editContact(editInfo);
    }
    console.log(isEdit);
  };

  const handleChange = event => {
    setEditInfo({
      ...editInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeyPress = event => {
    if (event.charCode === 13) {
      handelToggle();
    }
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
          onKeyDown={handleKeyPress}
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
    id: '',
    name: '',
    phone: '',
  },
};

export default ContactDetails;
