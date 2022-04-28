import React, { useState } from 'react';
import propTypes from 'prop-types';

const ContactCreate = ({ onCreate }) => {
  const [createInfo, setCreateInfo] = useState({ name: '', phone: '' });

  const handleChange = event => {
    setCreateInfo({
      ...createInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = event => {
    event.preventDefault();
    const contact = {
      name: createInfo.name,
      phone: createInfo.phone,
    };
    onCreate(contact);
    setCreateInfo({
      name: '',
      phone: '',
    });
  };

  return (
    <>
      <h2>Create Contact</h2>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={createInfo.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="phone"
          defaultValue={createInfo.phone}
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
