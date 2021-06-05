import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input';
import styles from './AuthForm.module.css';
const INITIAL_STATE = { name: '', email: '', password: '' };

export const AuthForm = ({ text, email, password, cbAuth }) => {
  const [user, setUser] = useState(INITIAL_STATE);
  const btnText = text ? 'Registration' : 'LogIn';

  const handleChange = event => {
    setUser({ ...user, [event.target.name.toLowerCase()]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    cbAuth(user);
    setUser(INITIAL_STATE);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        {text && <Input type={text} name={'Name'} onChange={handleChange} />}
        <Input type={email} name={'Email'} onChange={handleChange} />
        <Input type={password} name={'Password'} onChange={handleChange} />
        <Button type="submit" text={btnText} />
      </form>
    </div>
  );
};
