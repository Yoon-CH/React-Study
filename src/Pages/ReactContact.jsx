import React, { useState } from 'react';
import ContactDetail from '../Components/ReactContact/ContactDetail';

const ReactContact = () => {
  const [data, setData] = useState([
    { name: 'Alice', phone: '010 - 0000 - 1111' },
    { name: 'Brad', phone: '010 - 0000 - 2222' },
    { name: 'Cab', phone: '010 - 0000 - 3333' },
    { name: 'Druid', phone: '010 - 0000 - 4444' },
  ]);
  const [keyword, setKeyword] = useState('');

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  const mapToComponent = data => {
    data.sort();
    data = data.filter(contact => {
      return contact.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    return data.map((contact, i) => {
      return <ContactDetail contact={contact} key={i} />;
    });
  };

  return (
    <>
      <h1>Contact</h1>
      <input
        onChange={handleChange}
        type="text"
        name="keyword"
        placeholder="Search"
        value={keyword}
      />
      <div>{mapToComponent(data)}</div>
    </>
  );
};

export default ReactContact;
