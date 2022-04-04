import React, { useState } from 'react';

const TwitterAuth = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const onChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const onChange = event => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={form.email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={form.password}
          onChange={onChange}
        />
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue With Google</button>
      </div>
    </>
  );
};

export default TwitterAuth;
