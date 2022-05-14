import React, { useEffect, useState } from 'react';
import ContactInfo from '../Components/ReactContact/ContactInfo';
import ContactDetails from '../Components/ReactContact/ContactDetails';
import ContactCreate from '../Components/ReactContact/ContactCreate';

const sample = [
  { id: 1, name: 'Alice', phone: '010 - 0000 - 1111' },
  { id: 2, name: 'Brad', phone: '010 - 0000 - 2222' },
  { id: 3, name: 'Cab', phone: '010 - 0000 - 3333' },
  { id: 4, name: 'Druid', phone: '010 - 0000 - 4444' },
];

const ReactContact = () => {
  const [data, setData] = useState();
  const [keyword, setKeyword] = useState('');
  const [selectKey, setSelectKey] = useState({
    id: null,
    name: null,
    phone: null,
  });

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  const handleClick = item => {
    console.log(`item: ${JSON.stringify(item)}`);
    setSelectKey({ ...item });
  };

  const handleCreate = contact => {
    setData(data => [...data, contact]);
  };

  const handleEdit = upDateInfo => {
    setData(
      data.map(info =>
        info.id === upDateInfo.id ? { ...info, ...upDateInfo } : info
      )
    );
    handleClick(upDateInfo);
  };

  const handleRemove = id => {
    setData(data.filter(item => item.id !== id));
    setSelectKey({ id: null, name: null, phone: null });
  };

  const mapToComponent = data => {
    data?.sort();
    data = data?.filter(contact => {
      return contact.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    return data?.map(contact => {
      return (
        <ContactInfo
          contact={contact}
          key={contact.id}
          onClick={() => handleClick(contact)}
        />
      );
    });
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const local = localStorage.getItem('data');

  useEffect(() => {
    console.log(`1first!!!`);
    console.log(`2getData: ${local}, typeof: ${typeof local}`);
    if (!local) {
      console.log(`3data없음`);
      setData(sample);
      localStorage.setItem('data', JSON.stringify(sample));
    } else {
      console.log(`4data있음`);
      const getData = JSON.parse(local);
      setData(getData);
    }
  }, []);

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
      <ContactDetails
        isSelectedItem={selectKey}
        reMove={handleRemove}
        editContact={handleEdit}
      />
      <ContactCreate onCreate={handleCreate} />
    </>
  );
};

export default ReactContact;
