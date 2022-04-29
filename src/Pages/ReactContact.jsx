import React, { useState } from 'react';
import ContactInfo from '../Components/ReactContact/ContactInfo';
import ContactDetails from '../Components/ReactContact/ContactDetails';
import ContactCreate from '../Components/ReactContact/ContactCreate';

const ReactContact = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Alice', phone: '010 - 0000 - 1111' },
    { id: 2, name: 'Brad', phone: '010 - 0000 - 2222' },
    { id: 3, name: 'Cab', phone: '010 - 0000 - 3333' },
    { id: 4, name: 'Druid', phone: '010 - 0000 - 4444' },
  ]);
  const [keyword, setKeyword] = useState('');
  const [selectKey, setSelectKey] = useState(-1);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  const handleClick = key => {
    setSelectKey(key);
    console.log(selectKey);
  };

  const handleCreate = contact => {
    setData(data => [...data, contact]);
  };

  const mapToComponent = data => {
    data.sort();
    data = data.filter(contact => {
      return contact.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    return data.map((contact, i) => {
      return (
        <ContactInfo contact={contact} key={i} onClick={() => handleClick(i)} />
      );
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
      <ContactDetails isSelected={selectKey !== -1} contact={data[selectKey]} />
      <ContactCreate onCreate={handleCreate} />
    </>
  );
};

export default ReactContact;
