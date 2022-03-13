import React, { useState, useEffect } from 'react';
import {
  usePreventLeave,
  useClick,
  useTitle,
  useBeforeLeave,
  useFadeIn,
  useScroll,
  useScreen,
} from '../../utils/Hooks';
import styled from 'styled-components';

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);

  const hello = () => console.log('hello');
  const sayHello = () => console.log('onClick');

  useEffect(() => {
    hello();
  }, [number]);

  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);

  const title = useClick(sayHello);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const beForeLife = () => console.log('떠나지 마세요!');
  useBeforeLeave(beForeLife);

  const fadeInH3 = useFadeIn(3);

  const fadeInp = useFadeIn(6);

  const { y } = useScroll();

  const onFullS = callback => {
    console.log(callback ? 'we are full' : 'we are small');
  };

  const { element, triggerFullScreen, exitFullScreen } = useScreen(onFullS);

  return (
    <UseEffectSection>
      <h2>useEffect</h2>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setNewNumber(newNumber + 1)}>{newNumber}</button>
      </div>
      <br />
      <h3 ref={title}>useClick 커스텀 훅</h3>
      <br />
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>unProtect</button>
      </div>
      <br />
      <h3>떠나지마요!(console.log확인)</h3>
      <br />
      <h3 {...fadeInH3}>useFadeIn 효과</h3>
      <p {...fadeInp}>잘 보이나요?</p>
      <br />
      <Scroll scroll={y}>useScroll</Scroll>
      <br />
      <ImgBox ref={element}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="바다이미지"
        />
        <Button onClick={exitFullScreen}>원래 화면으로 바꿔줘!</Button>
      </ImgBox>
      <Button onClick={triggerFullScreen}>꽉 찬 화면으로 바꿔줘!</Button>
    </UseEffectSection>
  );
};

export default UseEffect;

const Button = styled.button`
  width: 150px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Scroll = styled.h3`
  color: ${props => (props.scroll > 100 ? 'red' : 'blue')};
`;

const UseEffectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
`;
