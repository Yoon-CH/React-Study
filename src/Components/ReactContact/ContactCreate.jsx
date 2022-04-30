import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';

const ContactCreate = ({ onCreate }) => {
  const [createInfo, setCreateInfo] = useState({ name: '', phone: '' });
  const nextId = useRef(4);

  const handleChange = event => {
    setCreateInfo({
      ...createInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: (nextId.current += 1),
      name: createInfo.name,
      phone: createInfo.phone,
    };
    onCreate(contact);
    setCreateInfo({ name: '', phone: '' });
  };

  return (
    <>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={createInfo.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={createInfo.phone}
          onChange={handleChange}
        />
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

ContactCreate.propTypes = {
  onCreate: propTypes.func,
};

ContactCreate.defaultProps = {
  onCreate: () => {
    console.error('onCreate not defined');
  },
};

export default ContactCreate;
