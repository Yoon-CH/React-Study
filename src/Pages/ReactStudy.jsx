import React, { useEffect, useRef, useState } from 'react';
import BasicJSX from './React/BasicJSX';
import InputInfoList from './React/InputInfoList';
import InputState from './React/InputState';
import LifeCycle from './React/LifeCycle';
import PropsState from './React/PropsState';

function ReactStudy() {
  const [useInfo, setUseInfo] = useState([]);
  const [keyword, setKeyword] = useState('');

  const id = useRef(-1);

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  const handleData = data => {
    setUseInfo(useInfo.concat({ ...data, id: (id.current += 1) }));
  };

  const handleRemove = id => {
    setUseInfo(useInfo.filter(useInfo => useInfo.id !== id));
  };

  const handleUpdate = (id, data) => {
    setUseInfo(
      useInfo.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      })
    );
  };

  return (
    <>
      <BasicJSX />
      <PropsState name="react" />
      <LifeCycle />
      <InputState onData={handleData} />
      <input value={keyword} onChange={handleChange} placeholder="검색하기" />
      <InputInfoList
        useInfo={useInfo.filter(info => info.name.indexOf(keyword) > -1)}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
    </>
  );
}

export default ReactStudy;
