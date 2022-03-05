import React, { useEffect, useRef, useState } from 'react';
import BasicJSX from '../Components/ReactBasic/BasicJSX';
import InputInfoList from '../Components/ReactBasic/InputInfoList';
import InputState from '../Components/ReactBasic/InputState';
import LifeCycle from '../Components/ReactBasic/LifeCycle';
import PropsState from '../Components/ReactBasic/PropsState';

function ReactBasicStudy() {
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
    setUseInfo(useInfo.filter(info => info.id !== id));
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

  useEffect(() => {
    console.log(useInfo);
  }, [useInfo]);

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

export default ReactBasicStudy;
